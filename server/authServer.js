import http from 'http';

const PORT = process.env.PORT || 3001;
const SSO_GATEWAY_URL = process.env.SSO_GATEWAY_URL || 'http://localhost:3000';

const server = http.createServer(async (req, res) => {
  // CORS Headers for external integration
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  const url = req.url ? req.url.split('?')[0] : '';

  // 1. Health check
  if (url === '/api/health' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ status: 'ok', service: 'EVOLVE SSO Backend Bridge' }));
  }

  // 2. Token Exchange Endpoint: POST /api/auth/callback
  if (url === '/api/auth/callback' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const { code } = JSON.parse(body || '{}');
        if (!code) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({
            status: 'error',
            message: 'One-time authorization code is required'
          }));
        }

        console.log(`[SSO Server] Exchanging auth code with Gateway (${SSO_GATEWAY_URL})...`);

        // Backend-to-backend token exchange with Centralized SHS SSO Gateway
        const ssoRes = await fetch(`${SSO_GATEWAY_URL}/api/v1/auth/embed/exchange`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code })
        });

        const ssoData = await ssoRes.json().catch(() => null);

        if (!ssoRes.ok || ssoData?.status !== 'success') {
          console.error('[SSO Server] Exchange rejected by Gateway:', ssoData);
          res.statusCode = ssoRes.status || 401;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({
            status: 'error',
            message: ssoData?.message || 'Invalid or expired authorization code'
          }));
        }

        // Success! Extract verified session and user profile
        const { sessionToken, user, expiresAt } = ssoData.data;
        console.log(`[SSO Server] Verified session for: ${user?.email} (${user?.globalRole})`);

        // Establish HttpOnly session cookie on this domain
        const expiresHeader = expiresAt ? `; Expires=${new Date(expiresAt).toUTCString()}` : '';
        res.setHeader('Set-Cookie', `evolve_session=${sessionToken}; Path=/; HttpOnly; SameSite=Lax${expiresHeader}`);
        res.setHeader('Content-Type', 'application/json');

        return res.end(JSON.stringify({
          status: 'success',
          data: {
            sessionToken,
            user,
            expiresAt
          }
        }));
      } catch (err) {
        console.error('[SSO Server] Internal error:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ status: 'error', message: err.message || 'Server error' }));
      }
    });
    return;
  }

  // 3. Logout Endpoint: POST /api/auth/logout
  if (url === '/api/auth/logout' && req.method === 'POST') {
    res.setHeader('Set-Cookie', 'evolve_session=; Path=/; HttpOnly; SameSite=Lax; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ status: 'success', message: 'Session terminated' }));
  }

  // 404 for unknown endpoints
  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'error', message: 'Not Found' }));
});

server.listen(PORT, () => {
  console.log(`[SSO Server] EVOLVE SSO Authentication Server listening on port ${PORT}`);
  console.log(`[SSO Server] Connected to Centralized SSO Gateway at: ${SSO_GATEWAY_URL}`);
});

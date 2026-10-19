import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom Vite plugin for Backend-to-Backend SSO Token Exchange
function ssoBackendPlugin() {
  return {
    name: 'sso-backend-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';

        // POST /api/auth/callback: Exchange one-time auth code for session token
        if (url === '/api/auth/callback' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', async () => {
            try {
              const parsed = JSON.parse(body || '{}');
              const code = parsed.code;

              if (!code) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ status: 'error', message: 'Missing one-time authorization code' }));
              }

              const ssoGatewayHost = process.env.SSO_GATEWAY_URL || 'http://localhost:3000';
              
              // Backend-to-backend token exchange with Centralized SHS SSO Gateway
              const ssoRes = await fetch(`${ssoGatewayHost}/api/v1/auth/embed/exchange`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code })
              });

              const ssoData = await ssoRes.json().catch(() => null);

              if (!ssoRes.ok || ssoData?.status !== 'success') {
                res.statusCode = ssoRes.status || 401;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({
                  status: 'error',
                  message: ssoData?.message || 'Authorization code expired or invalid'
                }));
              }

              // Establish host session cookie (HttpOnly, SameSite=Lax)
              const sessionToken = ssoData.data.sessionToken;
              const expires = ssoData.data.expiresAt ? new Date(ssoData.data.expiresAt).toUTCString() : '';
              res.setHeader('Set-Cookie', `evolve_session=${sessionToken}; Path=/; HttpOnly; SameSite=Lax${expires ? `; Expires=${expires}` : ''}`);
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({
                status: 'success',
                data: ssoData.data
              }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ status: 'error', message: err.message || 'Server error during token exchange' }));
            }
          });
          return;
        }

        // POST /api/auth/logout
        if (url === '/api/auth/logout' && req.method === 'POST') {
          res.setHeader('Set-Cookie', 'evolve_session=; Path=/; HttpOnly; SameSite=Lax; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ status: 'success', message: 'Logged out' }));
        }

        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Evolve/' : '/',
  plugins: [react(), tailwindcss(), ssoBackendPlugin()],
})


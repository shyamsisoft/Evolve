/**
 * SHS Single Sign-On (SSO) Client Gateway Service
 * 
 * Implements:
 * 1. Sandboxed DOM Isolation via embedded iframe inside custom <div> container
 * 2. Cross-domain postMessage listener for short-lived 60s authorization code
 * 3. Backend-to-backend authorization code exchange for secure session token
 */

const getPortalUrl = () => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SSO_PORTAL_URL) {
      return import.meta.env.VITE_SSO_PORTAL_URL;
    }
  } catch (e) {
    // fallback
  }
  return 'http://localhost:3000';
};

export const SSO_CONFIG = {
  portalUrl: getPortalUrl(),
  sdkScriptUrl: 'http://localhost:3000/embed.js',
  backendExchangeEndpoint: '/api/auth/callback',
  directGatewayExchangeEndpoint: 'http://localhost:3000/api/v1/auth/embed/exchange'
};

/**
 * Exchanges the single-use 60-second authorization code with our backend
 * @param {string} code - The one-time authorization code received via postMessage
 * @returns {Promise<{ status: string, data: { sessionToken: string, user: object, expiresAt: string } }>}
 */
export async function exchangeAuthCode(code) {
  if (!code) {
    throw new Error('Authorization code is required for session token exchange');
  }

  // 1. Primary: Backend-to-backend exchange via our local server endpoint
  try {
    const res = await fetch(SSO_CONFIG.backendExchangeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code })
    });

    const data = await res.json().catch(() => null);

    if (res.ok && data?.status === 'success') {
      return data;
    }

    if (data?.message) {
      throw new Error(data.message);
    }
  } catch (backendErr) {
    console.warn('[SHS SSO] Local backend exchange failed, trying direct gateway fallback:', backendErr.message);
  }

  // 2. Direct Gateway Fallback (for static preview hosting without local backend proxy)
  try {
    const directRes = await fetch(SSO_CONFIG.directGatewayExchangeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code })
    });

    const directData = await directRes.json().catch(() => null);

    if (directRes.ok && directData?.status === 'success') {
      return directData;
    }

    throw new Error(directData?.message || 'Token exchange failed with Centralized SSO Gateway');
  } catch (err) {
    throw new Error(err.message || 'Network error during SSO token exchange');
  }
}

/**
 * Helper to ensure SHS SDK is present
 */
export function loadSHSSDK() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.SHSAuth || window.TeaCottageAuth) {
    return Promise.resolve(window.SHSAuth || window.TeaCottageAuth);
  }
  return Promise.resolve(null);
}


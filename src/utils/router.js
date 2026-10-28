// Dynamic router utility for EVOLVE
// Provides clean HTML5 path-based routing (NO hash `#`)
// Domain-agnostic: automatically detects whether running at root (localhost / custom domain) or in a subpath (e.g. /Evolve/)

export function getBasePath() {
  const path = typeof window !== 'undefined' ? window.location.pathname || '' : '';
  // If hosted in a subpath like /Evolve/
  if (/^\/evolve(\/|$)/i.test(path)) {
    return '/Evolve';
  }
  // Vite base environment variable
  const viteBase = (import.meta.env?.BASE_URL || '').replace(/\/$/, '');
  if (viteBase && viteBase !== '' && viteBase !== '.') {
    return viteBase;
  }
  return '';
}

// Canonical alias dictionary
const ROUTE_ALIASES = {
  'lead': 'lead',
  'cfo-advisory': 'lead',
  'cfo-fpa-advisory': 'lead',
  'build': 'build',
  'finance-functions': 'build',
  'operating-models': 'build',
  'transform': 'transform',
  'finance-transformation': 'transform',
  'data-technology': 'transform',
  'protect': 'protect',
  'tax-compliance': 'protect',
  'tax': 'protect',
  'growing-businesses': 'growing-businesses',
  'established-corporate': 'established-corporate',
  'corporate': 'established-corporate',
  'not-for-profit': 'not-for-profit',
  'non-profit-community': 'not-for-profit',
  'nfp': 'not-for-profit',
  'local-government': 'local-government',
  'councils': 'local-government',
  'what-we-do': 'what-we-do',
  'what-we-do-overview': 'what-we-do',
  'who-we-help': 'who-we-help',
  'who-we-help-overview': 'who-we-help',
  'about': 'about',
  'contact': 'contact',
  'insights': 'insights',
};

export function parseCurrentRoute() {
  if (typeof window === 'undefined') {
    return { page: null, articleId: null };
  }

  const base = getBasePath();
  let pathname = window.location.pathname || '/';

  // Strip base if pathname starts with it
  if (base && pathname.toLowerCase().startsWith(base.toLowerCase())) {
    pathname = pathname.slice(base.length) || '/';
  }

  const hasHash = Boolean(window.location.hash);

  // Gracefully handle legacy hash links (e.g. #/lead or #lead) by migrating to clean path
  if ((pathname === '/' || pathname === '') && hasHash) {
    const hashClean = window.location.hash.replace(/^#\/?/, '').trim();
    if (hashClean) {
      const parts = hashClean.split('/').filter(Boolean);
      const first = parts[0]?.toLowerCase();
      if (first === 'insights' && parts[1]) {
        return { page: 'insight-detail', articleId: parts[1], shouldReplaceUrl: true };
      }
      if (ROUTE_ALIASES[first]) {
        return { page: ROUTE_ALIASES[first], articleId: null, shouldReplaceUrl: true };
      }
    }
  }

  // Clean trailing and leading slashes
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return { page: null, articleId: null, shouldReplaceUrl: hasHash };
  }

  const primary = segments[0].toLowerCase();

  // Nested route: /insights/:articleId
  if (primary === 'insights' && segments[1]) {
    return { page: 'insight-detail', articleId: segments[1], shouldReplaceUrl: hasHash };
  }

  if (ROUTE_ALIASES[primary]) {
    return { page: ROUTE_ALIASES[primary], articleId: null, shouldReplaceUrl: hasHash };
  }

  // Default to home for unknown paths
  return { page: null, articleId: null, shouldReplaceUrl: hasHash };
}

export function buildRouteUrl(pageId, articleId = null) {
  const base = getBasePath();
  if (!pageId) {
    return base ? `${base}/` : '/';
  }

  if (pageId === 'insight-detail') {
    return `${base}/insights/${articleId || 'a1'}`;
  }

  // Canonical paths for service & audience pillars
  const canonicalMap = {
    'cfo-advisory': 'lead',
    'cfo-fpa-advisory': 'lead',
    'finance-functions': 'build',
    'operating-models': 'build',
    'finance-transformation': 'transform',
    'data-technology': 'transform',
    'tax-compliance': 'protect',
    'tax': 'protect',
    'corporate': 'established-corporate',
    'non-profit-community': 'not-for-profit',
    'nfp': 'not-for-profit',
    'councils': 'local-government',
    'what-we-do-overview': 'what-we-do',
    'who-we-help-overview': 'who-we-help',
  };

  const path = canonicalMap[pageId] || pageId;
  return `${base}/${path}`;
}

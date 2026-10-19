// Prepend Vite's base URL so images resolve correctly on GitHub Pages
// In dev: BASE_URL = '/'  → '/images/x.jpg' stays '/images/x.jpg'
// In prod (GitHub Pages): BASE_URL = '/Evolve/' → '/Evolve/images/x.jpg'
const BASE = import.meta.env.BASE_URL || '/';

export const imgUrl = (path) => {
  if (!path || typeof path !== 'string') return path;
  
  // Already absolute external URL (http/https) or data/blob URI – leave untouched
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Ensure normalizedBase has leading and trailing slashes: e.g. '/Evolve/' or '/'
  const normalizedBase = BASE.startsWith('/')
    ? (BASE.endsWith('/') ? BASE : `${BASE}/`)
    : `/${BASE}/`;

  // Base folder segment without slashes (e.g. 'Evolve')
  const baseSegment = normalizedBase.replace(/^\/+|\/+$/g, '');

  // Strip all leading slashes from input path
  let clean = path.replace(/^\/+/, '');

  if (baseSegment) {
    // Strip any repetitive base segment(s) from the start of the path
    // e.g., 'Evolve/images/...' or 'Evolve/Evolve/images/...' -> 'images/...'
    while (clean.startsWith(baseSegment + '/')) {
      clean = clean.slice(baseSegment.length + 1).replace(/^\/+/, '');
    }
    return `${normalizedBase}${clean}`;
  }

  return `/${clean}`;
};

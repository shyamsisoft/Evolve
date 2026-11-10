// Prepend Vite's base URL so images resolve correctly on GitHub Pages
// In dev: BASE_URL = '/'  → '/images/x.webp' stays '/images/x.webp'
// In prod (GitHub Pages): BASE_URL = '/Evolve/' → '/Evolve/images/x.webp'
const BASE = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';

export const imgUrl = (path, options = {}) => {
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
  }

  // Automatically prefer ultra-fast, modern .webp for local images in images/
  // Preserves .gif animations and .svg vectors.
  const preferWebp = options.preferWebp !== false;
  if (preferWebp && clean.startsWith('images/')) {
    clean = clean.replace(/\.(png|jpe?g)(\?.*)?$/i, (match, ext, query) => `.webp${query || ''}`);
  }

  if (baseSegment) {
    return `${normalizedBase}${clean}`;
  }

  return `/${clean}`;
};

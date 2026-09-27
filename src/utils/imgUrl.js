// Prepend Vite's base URL so images resolve correctly on GitHub Pages
// In dev: BASE_URL = '/'  → '/images/x.jpg' stays '/images/x.jpg'
// In prod (GitHub Pages): BASE_URL = '/Evolve/' → '/Evolve/images/x.jpg'
const BASE = import.meta.env.BASE_URL; // always has trailing slash

export const imgUrl = (path) => {
  if (!path) return path;
  // Already absolute URL (http/https) – leave untouched
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  // Strip leading slash then prepend base
  return `${BASE}${path.replace(/^\//, '')}`;
};

/**
 * Prefix an in-app absolute path with Astro's configured base path so internal
 * links work both locally (base `/`) and on GitHub Pages project pages
 * (base `/<repo>`). Without this, hardcoded `/cases/…` links 404 in production.
 *
 *   withBase('/cases/kloo')  // base '/'            → '/cases/kloo'
 *   withBase('/cases/kloo')  // base '/portfolio'   → '/portfolio/cases/kloo'
 *   withBase('/')            // base '/portfolio'   → '/portfolio/'
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

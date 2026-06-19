// @ts-check
import { defineConfig } from 'astro/config';

// site/base are set for GitHub Pages deployment.
// For a project page (https://<user>.github.io/<repo>/) set base to '/<repo>'.
// Override via env so the same config works locally and in CI.
const site = process.env.SITE_URL || 'https://example.github.io';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});

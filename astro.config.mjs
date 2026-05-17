import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://castrofullstack.github.io',
  base: '/mba-blog-site',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
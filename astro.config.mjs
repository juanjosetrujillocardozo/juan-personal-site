import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://juan.trujotechnologies.com',
  compressHTML: true,
  build: { inlineStylesheets: 'always' }
});

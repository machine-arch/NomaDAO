import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  root: './',
  build: {
    // Relative to the root
    outDir: './dist',
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: 'production',
        },
      },
    }),
  ],
});

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  root: './',
  build: {
    target: 'es5',
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'iife',
      },
    },
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: 'production',
        },
      },
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});

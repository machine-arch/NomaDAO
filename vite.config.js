import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  root: './',
  build: {
    target: 'es2015',
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es',
        manualChunks: {
          index_1: ['src/components/Booking/Booking.jsx'],
        },
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

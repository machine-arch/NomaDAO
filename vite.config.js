import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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
          index_1: ['src/components/modules/booking/Booking.jsx'],
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
    react({
      babel: {
        plugins: ['@babel/plugin-proposal-optional-chaining'],
      },
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});

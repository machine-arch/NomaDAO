import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  root: './',
  build: {
    target: 'es6',
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es',
        manualChunks: {
          index_1: ['src/components/modules/booking/Booking.jsx'],
          index_2: [
            'src/components/modules/booking/BookingDetailed/BookingDetailed.component.jsx',
          ],
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

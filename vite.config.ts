import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Point at the Functions emulator during local development (firebase emulators:start).
      '/api': 'http://127.0.0.1:5001',
    },
  },
});

// vite.config.js in frontend/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared-dashboard': path.resolve(__dirname, '../dashboard/src'),
    },
  },
});

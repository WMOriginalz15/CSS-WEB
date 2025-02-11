import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': '/src',
      'public': '/public'
    }
  },
  base: '/',
  build: {
    rollupOptions: {
      input: 'src/your-new-entry-file.tsx',
    },
  },
});

import { defineConfig } from 'vite';

export default defineConfig({
  // Serve files from root directory
  root: '.',
  // Build configuration
  build: {
    outDir: 'dist',
    // Ensure proper asset handling
    assetsDir: 'assets',
  },
});
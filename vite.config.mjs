import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // The site is published as a GitHub *project* site, so every asset must be
  // resolved from /Portfolio/ rather than the domain root.
  base: '/Portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Keep the bundle honest: warn if any single chunk grows unexpectedly large.
    chunkSizeWarningLimit: 500,
  },
});

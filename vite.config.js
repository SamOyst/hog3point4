import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    //Set as 4000 so backend can communicate
    port: 4000,
  },
  build: {
    outDir: 'build', // CRA's default build output
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//https://ucl-winner.onrender.com
//http://localhost:5174
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ucl-winner.onrender.com', // Your backend API URL
        changeOrigin: true, // Change the origin of the host header to the target URL
        secure: false, // If your backend uses HTTPS with a self-signed certificate, set this to false
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the `/api` prefix when forwarding the request
      },
    },
  },
});
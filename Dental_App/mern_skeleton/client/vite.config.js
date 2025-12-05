import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const { PORT = 5000 } = process.env;

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
      "/auth": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },

  build: {
    manifest: true,
    outDir: "./dist",
    minify: "terser",
    sourcemap: false,
    rollupOptions: {
      input: "./index.html",
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'mui': ['@mui/material', '@mui/icons-material'],
        },
      },
    },
  },
  
  // Performance optimizations
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
  },
});

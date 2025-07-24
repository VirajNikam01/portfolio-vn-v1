// vite.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
// import { splitVendorChunkPlugin } from 'vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    // splitVendorChunkPlugin(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setupTests.ts'],
    css: true,
  },
})

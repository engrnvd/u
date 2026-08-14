import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './examples',
  server: {
    host: true,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      'src': resolve('./'),
      '@': resolve('./'),
    }
  }
})

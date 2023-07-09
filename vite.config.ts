import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './examples',
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      'src': resolve('./examples'),
      '@': fileURLToPath(new URL('./examples', import.meta.url))
    }
  }
})

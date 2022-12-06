import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueTypeImports(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@type': fileURLToPath(new URL('./src/assets/types.ts', import.meta.url)),
      '@const': fileURLToPath(new URL('./src/assets/constants.ts', import.meta.url)),
      '@func': fileURLToPath(new URL('./src/assets/funcs.ts', import.meta.url)),
      '@lib': fileURLToPath(new URL('./src/components', import.meta.url)),
    }
  },
  server:{
    host:"0.0.0.0"
  }
})

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        eigen: resolve(__dirname, 'eigen.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})

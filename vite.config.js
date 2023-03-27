import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, './')
const outDir = resolve(__dirname, 'dist')

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root,
  base: '/learning-javascript/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html')
      }
    }
  }
})

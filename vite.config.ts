import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  base: 'https://miguelve69.github.io/gh-react-vite/'
  
})

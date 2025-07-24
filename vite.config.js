import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_PATH = '/TIL';

export default defineConfig({
  base: BASE_PATH,
  define: {
    __BASE_PATH__: JSON.stringify(BASE_PATH),
    __IMAGE_BASE_PATH__: JSON.stringify(BASE_PATH),
  },
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TIL/', // 🔁 Replace with your actual base path
  plugins: [react()],
})

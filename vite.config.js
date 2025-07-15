import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import config from './config.js'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? config.prodBase : config.devBase,
  plugins: [react()],
}))

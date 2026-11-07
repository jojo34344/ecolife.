import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Em desenvolvimento, repassa /api para o servidor do Zinho (porta 3001)
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})

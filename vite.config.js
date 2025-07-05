// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-Portfolio/', // 👈 Add this line (must match your repo name)
  plugins: [react()],
})

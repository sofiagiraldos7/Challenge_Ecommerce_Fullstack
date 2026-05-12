import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Challenge_Ecommerce_Fullstack/',
  plugins: [react(), tailwindcss()],
})

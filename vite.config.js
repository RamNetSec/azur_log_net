import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/azur_log_net/',
  plugins: [react()],
  build: {
    // Ensure CSS is properly extracted and processed
    cssCodeSplit: true,
    // Improve compatibility
    target: 'es2015'
  }
})

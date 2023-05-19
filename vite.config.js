import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tweets-app/",
  plugins: [react()],
  server: {
    proxy: {
      rewrite: {
       "!^\\.(js|css|png|jpe?g|gif|svg|ico|json|woff|woff2|eot|ttf)$": "/index.html",
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  // server: {
  //   proxy: {
    
      // '/login': {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true,

  //     },
  //     '/tasks': {
  //       target: 'http://localhost:8080',
  //       changeOrigin: true,
  //     },
  //     '/home': {
  //       target: 'http://localhost:8080',
  //       changeOrigin: true,
  //     },
  //     '/logout': {
  //       target: 'http://localhost:8080',
  //       changeOrigin: true,
  //     },
  //     '/clients': {
  //       target: 'http://localhost:8080',
  //       changeOrigin: true,
  //     },

//     },
//   }
//   }


})

// rewrite: path => path.replace(/^\/login/, '/login')

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
             mono: ["Roboto Mono", "monospace"],
             sans: ["Poppins", "sans-serif"],
             serif: ["Momo Trust Display", "serif"],
          },
        },
      },
    })
  ],
})
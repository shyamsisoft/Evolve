import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// `command` is 'build' for `vite build` and 'serve' for `vite dev`
// This is the correct Vite way to detect build vs dev — process.env.NODE_ENV
// is NOT reliably set at config-parse time.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Evolve/' : '/',
  plugins: [react(), tailwindcss()],
}))


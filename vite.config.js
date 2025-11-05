import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import tailwindcssForms from '@tailwindcss/forms'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Map heroicons deep imports to the package's ESM folder so Vite can resolve them reliably.
      '@heroicons/react/24/outline/esm': path.resolve(process.cwd(), 'node_modules/@heroicons/react/24/outline/esm'),
      '@heroicons/react/24/outline': path.resolve(process.cwd(), 'node_modules/@heroicons/react/24/outline/esm'),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcssForms,
      ],
    },
  },
})

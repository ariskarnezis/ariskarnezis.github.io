import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Figma exports sometimes bake version numbers into import paths,
// e.g. "@radix-ui/react-slot@1.1.2" or "lucide-react@0.487.0".
// This strips the "@version" so the package resolves normally.
function stripVersionedImports() {
  return {
    name: 'strip-versioned-imports',
    enforce: 'pre' as const,
    async resolveId(source: string, importer: string | undefined, options: any) {
      const match = source.match(/^(@?[^@]+)@\d[\w.\-]*(\/.*)?$/)
      if (match) {
        const cleaned = match[1] + (match[2] || '')
        const resolved = await this.resolve(cleaned, importer, {
          ...options,
          skipSelf: true,
        })
        return resolved
      }
      return null
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    stripVersionedImports(),
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})

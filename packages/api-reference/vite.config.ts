import vue from '@vitejs/plugin-vue'
import path from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { defineConfig } from 'vitest/config'

import pkg from './package.json'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [vue(), libInjectCss()],
  build: {
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: ['src/index.ts'],
      name: '@readyapi/api-reference',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'vue',
        'prismjs',
        ...Object.keys(pkg.dependencies || {}).filter(
          (item) => !item.startsWith('@readyapi'),
        ),
      ],
    },
  },
  resolve: {
    alias: [
      // Resolve the uncompiled source code for all @readyapi packages
      // It’s working with the alias, too. It’s just required to enable HMR.
      // It also does not match components since we want the built version
      {
        // Resolve the uncompiled source code for all @readyapi packages
        // @readyapi/* -> packages/*/
        // (not @readyapi/components/*/style.css)
        find: /^@readyapi\/(?!(openapi-parser|snippetz|galaxy|components\/style\.css|components\b))(.+)/,
        replacement: path.resolve(__dirname, '../$2/src/index.ts'),
      },
    ],
  },
  test: {
    coverage: {
      enabled: true,
      reporter: 'text',
    },
  },
})

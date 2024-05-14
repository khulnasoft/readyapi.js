import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        // Resolve the uncompiled source code for all @readyapi packages
        // @readyapi/* -> packages/*/
        // (not @readyapi/*/style.css)
        find: /^@readyapi\/(?!(openapi-parser|snippetz|galaxy|components\/style\.css|components\b))(.+)/,
        replacement: path.resolve(__dirname, '../../packages/$2/src/index.ts'),
      },
    ],
  },
})

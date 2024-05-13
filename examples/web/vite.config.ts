import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5050,
    open: true,
  },
  resolve: {
    alias: [
      // Resolve the uncompiled source code for all @readyapi packages
      // It’s working with the alias, too. It’s just required to enable HMR.
      // It also does not match components since we want the built version
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

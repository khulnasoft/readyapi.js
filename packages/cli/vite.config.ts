import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@readyapi/mock-server',
        replacement: path.resolve(__dirname, '../mock-server/src/index.ts'),
      },
    ],
  },
})

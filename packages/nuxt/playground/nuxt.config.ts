import type { NuxtConfig } from 'nuxt/schema'

export default defineNuxtConfig({
  modules: ['../src/module'],
  readyapi: {
    spec: {
      url: 'https://cdn.ready-api.khulnasoft.com/spec/openapi_petstore.json',
    },
    pathRouting: {
      basePath: '/readyapi',
    },
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  devtools: { enabled: true },
  devServer: {
    port: 5062,
  },
} as NuxtConfig)

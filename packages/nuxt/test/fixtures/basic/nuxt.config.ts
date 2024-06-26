import type { NuxtConfig } from 'nuxt/schema'

export default defineNuxtConfig({
  modules: ['../../../src/module'],
  readyapi: {
    spec: {
      url: 'https://cdn.readyapi.khulnasoft.com/spec/openapi_petstore.json',
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
} as NuxtConfig)

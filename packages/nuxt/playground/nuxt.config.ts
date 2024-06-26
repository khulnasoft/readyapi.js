import type { NuxtConfig } from 'nuxt/schema'

export default defineNuxtConfig({
  modules: ['../src/module'],
  readyapi: {
    spec: {
      url: 'https://cdn.readyapi.khulnasoft.com/spec/openapi_petstore.json',
    },
    pathRouting: {
      basePath: '/readyapi',
    },
    configurations: [
      {
        spec: {
          url: 'https://cdn.readyapi.khulnasoft.com/spec/openapi_petstore.json',
        },
        pathRouting: {
          basePath: '/petstore',
        },
      },
      {
        spec: {
          url: 'https://cdn.jsdelivr.net/npm/@readyapi/galaxy/dist/latest.json',
        },
        pathRouting: {
          basePath: '/galaxy',
        },
      },
    ],
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

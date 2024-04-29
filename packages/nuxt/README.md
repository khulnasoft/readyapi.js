# Ready API Reference Nuxt Module

[![Version](https://img.shields.io/npm/v/%40scalar/nuxt)](https://www.npmjs.com/package/@readyapi/nuxt)
[![Downloads](https://img.shields.io/npm/dm/%40scalar/nuxt)](https://www.npmjs.com/package/@readyapi/nuxt)
[![License](https://img.shields.io/npm/l/%40scalar%2Fnuxt)](https://www.npmjs.com/package/@readyapi/nuxt)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/8HeZcRGPFS)

This plugin provides an easy way to render a beautiful API reference based on a OpenAPI/Swagger file with Nuxt.

[![Screenshot of an API Reference](https://github.com/khulnasoft/readyapi.js/assets/6176314/178f4e4c-afdf-4c6a-bc72-128ea1786350)](https://docs.scalar.com/swagger-editor)

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @readyapi/nuxt
```

That's it! You can now use @readyapi/nuxt in your Nuxt app ✨

## Configuration

If you are using nuxt server routes you can enable scalar simply by enabling openAPI in the nitro
config in your nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: ['@readyapi/nuxt'],
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
})
```

If you would like to add your own OpenAPI spec file you can do so with the following minimal config

```ts
export default defineNuxtConfig({
  modules: ['@readyapi/nuxt'],
  scalar: {
    spec: {
      url: 'https://cdn.scalar.com/spec/openapi_petstore.json',
    },
  },
})
```

By default the docs will be hosted at `/scalar` but you an easily customize that, here's a more in
depth config example.

```ts
export default defineNuxtConfig({
  modules: ['@readyapi/nuxt'],
  scalar: {
    darkMode: true,
    hideModals: false,
    hideDownloadButton: false,
    metaData: {
      title: 'API Documentation by Scalar',
    },
    proxy: 'https://api.scalar.com/request-proxy',
    searchHotKey: 'k',
    showSidebar: true,
    pathRouting: {
      basePath: '/scalar',
    },
    spec: {
      url: 'https://cdn.scalar.com/spec/openapi_petstore.json',
    },
  },
})
```

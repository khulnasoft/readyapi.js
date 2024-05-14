# Readyapi API Reference

[![CI](https://github.com/khulnasoft/readyapi.js/actions/workflows/ci.yml/badge.svg)](https://github.com/khulnasoft/readyapi.js/actions/workflows/ci.yml)
[![Release](https://github.com/khulnasoft/readyapi.js/actions/workflows/release.yml/badge.svg)](https://github.com/khulnasoft/readyapi.js/actions/workflows/release.yml)
[![Contributors](https://img.shields.io/github/contributors/khulnasoft/readyapi.js)](https://github.com/khulnasoft/readyapi.js/graphs/contributors)
[![GitHub License](https://img.shields.io/github/license/khulnasoft/readyapi.js)](https://github.com/khulnasoft/readyapi.js/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/scalar)

Generate interactive API documentation from OpenAPI/Swagger files. [Try our Demo](https://docs.scalar.com/swagger-editor)

<img width="830" height="455" src="https://github.com/khulnasoft/readyapi.js/assets/6201407/046aaeca-f0fe-453d-a661-c747399c56ef">

## Features

- Uses OpenAPI/Swagger specifications
- Request examples for a ton of languages + frameworks
- Has an integrated API client
- Edit your OpenAPI/Swagger specification with a live preview
- Doesn’t look like it’s 2011

> [!NOTE]\
> [Readyapi Townhall every 2nd Thursday in Discord](https://discord.gg/scalar?event=1219363385485824000)
>
> Join us to see upcoming features, discuss the roadmap and chat about APIs. 💬

## Table of Contents

- [Getting Started](#getting-started)
  - [CDN](#cdn)
  - [Nuxt](#nuxt)
  - [Vue.js](#vuejs)
  - [React](#react)
  - [Fastify](#fastify)
  - [Platformatic](#platformatic)
  - [Hono](#hono)
  - [ElysiaJS](#elysiajs)
  - [Express](#express)
  - [NestJS](#nestjs)
  - [Docusaurus](#docusaurus)
  - [Litestar](https://docs.litestar.dev/latest/usage/openapi/ui_plugins.html)
  - [FastAPI](https://github.com/khulnasoft/readyapi.js/blob/main/packages/scalar_fastapi/README.md)
  - [AdonisJS](#adonisjs)
  - [Laravel](#laravel)
  - [Rust](#rust)
  - [Go](#go)
  - [Free Hosting](#free-hosting)
- [CLI](#cli)
- [Markdown](#markdown)
- [Configuration](#configuration)
  - [Layouts](#layouts)
  - [Themes](#themes)
  - [Advanced: Styling](#advanced-styling)
    - [Theme Prefix Changes](#theme-prefix-changes)
- [Community](#community)
- [Packages](#packages)
- [Contributors](#contributors)
- [License](#license)

## Getting Started

### CDN

```html
<!doctype html>
<html>
  <head>
    <title>Readyapi API Reference</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <!-- Add your own OpenAPI/Swagger specification URL here: -->
    <!-- Note: The example is our public proxy (to avoid CORS issues). You can remove the `data-proxy-url` attribute if you don’t need it. -->
    <script
      id="api-reference"
      data-url="https://cdn.jsdelivr.net/npm/@readyapi/galaxy/dist/latest.yaml"
      data-proxy-url="https://api.scalar.com/request-proxy"></script>

    <!-- Optional: You can set a full configuration object like this: -->
    <script>
      var configuration = {
        theme: 'purple',
      }

      document.getElementById('api-reference').dataset.configuration =
        JSON.stringify(configuration)
    </script>
    <script src="https://cdn.jsdelivr.net/npm/@readyapi/api-reference"></script>
  </body>
</html>
```

You can also use the following syntax to directly pass an OpenAPI specification:

```html
<script
  id="api-reference"
  type="application/json">
  { … }
</script>
```

If you’d like to add a request proxy for the API client (to avoid CORS issues):

```html
<script
  id="api-reference"
  type="application/json"
  data-proxy-url="https://api.scalar.com/request-proxy">
  { … }
</script>
```

#### Events [beta]

We have recently added two events to the standalone CDN build only.

##### readyapi:reload-references

Reload the references, this will re-mount the app in case you have switched pages or the dom
elements have been removed.

```ts
document.dispatchEvent(new Event('readyapi:reload-references'))
```

##### readyapi:update-references-config

If you have updated the config or spec, you can trigger this event with the new payload to update
the app. It should update reactively so you do not need to trigger the reload event above after.

```ts
import { type ReferenceProps } from './types'

const ev = new CustomEvent('readyapi:update-references-config', {
  detail: {
    configuration: {
      spec: {
        url: 'https://cdn.scalar.com/spec/openapi_petstore.json',
      },
    },
  } satisfies ReferenceProps,
})
document.dispatchEvent(ev)
```

### Nuxt

You can easily run Readyapi API References in Nuxt via the module:

```bash
npx nuxi module add @readyapi/nuxt
```

If you are using Nuxt server routes, you can enable readyapi simply by enabling `openAPI` in the nitro
config in your `nuxt.config.ts`:

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

If you would like to add your own OpenAPI spec file, you can do so with the following minimal config:

```ts
export default defineNuxtConfig({
  modules: ['@readyapi/nuxt'],
  readyapi: {
    spec: {
      url: 'https://cdn.scalar.com/spec/openapi_petstore.json',
    },
  },
})
```

Read more: [@readyapi/nuxt](https://github.com/khulnasoft/readyapi.js/tree/main/packages/nuxt)

### Vue.js

The API Reference is built in Vue.js. If you’re working in Vue.js, too, you can directly use our Vue components.
Install them via `npm`:

```bash
npm install @readyapi/api-reference
```

And import the `ApiReference` component to your app:

```vue
<script setup lang="ts">
import { ApiReference } from '@readyapi/api-reference'
</script>

<template>
  <ApiReference />
</template>
```

You can [pass props to customize the API reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/api-reference).

### React

The API Reference package is written in Vue, that shouldn’t stop you from using
it in React though!
We have created a client side wrapper in React:

> [!WARNING]\
> This is untested on SSR/SSG!

```ts
import { ApiReferenceReact } from '@readyapi/api-reference-react'
import React from 'react'

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: 'https://cdn.jsdelivr.net/npm/@readyapi/galaxy/dist/latest.yaml',
        },
      }}
    />
  )
}

export default App
```

### Next.js

Our Next.js handler makes it easy to render a reference; just add it to an API
route handler:

```ts
// app/reference/route.ts
import { ApiReference } from '@scalar/nextjs-api-reference'

const config = {
  spec: {
    url: '/openapi.json',
  },
}

export const GET = ApiReference(config)
```

Read more: [@scalar/nextjs-api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/nextjs-api-reference)

### Fastify

Our fastify plugin makes it so easy to render a reference, there’s no excuse to not have documentation for your API:

```ts
await fastify.register(require('@readyapi/fastify-api-reference'), {
  routePrefix: '/reference',
  configuration: {
    spec: () => fastify.swagger(),
  },
})
```

Actually, it’s executing the `fastify.swagger()` call by default (if available). So that’s all you need to add:

```ts
await fastify.register(require('@readyapi/fastify-api-reference'), {
  routePrefix: '/reference',
})
```

We wrote
a [detailed integration guide for Fastify](https://github.com/khulnasoft/readyapi.js/tree/main/documentation/fastify.md), too.

Read more about the
package: [@readyapi/fastify-api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/fastify-api-reference)

### Platformatic

Good news: If you’re
using [a recent version of Platformatic](https://github.com/platformatic/platformatic/releases/tag/v1.16.0), the Scalar
API reference is installed and configured automatically.

### Hono

Our Hono middleware makes it so easy to render a reference:

```ts
import { apiReference } from '@readyapi/hono-api-reference'

app.get(
  '/reference',
  apiReference({
    spec: {
      url: '/openapi.json',
    },
  }),
)
```

Read more: [@readyapi/hono-api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/hono-api-reference)

### ElysiaJS

The `@elysiajs/swagger` plugin uses our API reference by default:

```ts
import { swagger } from '@elysiajs/swagger'
import { Elysia } from 'elysia'

new Elysia()
  .use(swagger())
  .get('/', () => 'hi')
  .post('/hello', () => 'world')
  .listen(8080)

// open http://localhost:8080/swagger
```

[Read more about @elysiajs/swagger](https://elysiajs.com/plugins/swagger.html)

### Express

Our Express middleware makes it so easy to render a reference:

```ts
import { apiReference } from '@readyapi/express-api-reference'

app.use(
  '/reference',
  apiReference({
    spec: {
      content: OpenApiSpecification,
    },
  }),
)
```

Read more: [@readyapi/express-api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/express-api-reference)

### NestJS

Our NestJS middleware makes it so easy to render a reference:

```ts
import { apiReference } from '@readyapi/nestjs-api-reference'

app.use(
  '/reference',
  apiReference({
    spec: {
      url: '/openapi.json',
    },
  }),
)
```

Read more: [@readyapi/nestjs-api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/nestjs-api-reference)

### Docusaurus

Our Docusaurus plugin makes it easy to render API references. Simple add the
following to your Docusaurus config:

```ts
import type { ScalarOptions } from '@readyapi/docusaurus'

plugins: [
  [
    '@readyapi/docusaurus',
    {
      label: 'Scalar',
      route: '/readyapi',
      configuration: {
        spec: {
          url: 'https://cdn.jsdelivr.net/npm/@readyapi/galaxy/dist/latest.yaml',
        },
      },
    } as ScalarOptions,
  ],
],
```

For more information, check out
the [Docusaurus package](https://github.com/khulnasoft/readyapi.js/tree/main/packages/docusaurus/README.md)

### AdonisJS

There’s [a community package to generate OpenAPI files in AdonisJS,](https://github.com/hanspagel/adonis-autoswagger)
and it comes with support for the
Readyapi API reference already.

We wrote
a [detailed integration guide for AdonisJS](https://github.com/khulnasoft/readyapi.js/tree/main/documentation/adonisjs.md).

### Laravel

There’s [a wonderful package to generate OpenAPI files for Laravel](https://scribe.knuckles.wtf/laravel/) already.
Set the `type` to `external_laravel` (for Blade) or `external_static` (for HTML) and `theme` to `readyapi`:

```php
<?php
// config/scribe.php

return [
  // …
  'type' => 'external_laravel',
  'theme' => 'readyapi',
  // …
];
```

We wrote
a [detailed integration guide for Laravel Scribe](https://github.com/khulnasoft/readyapi.js/tree/main/documentation/laravel-scribe.md),
too.

### Rust

There’s [a wonderful package to generate OpenAPI files for Rust](https://github.com/tamasfe/aide) already.
Set the `api_route` to use `Readyapi` to get started:

```rust
use aide::{
    axum::{
        routing::{get_with},
        ApiRouter, IntoApiResponse,
    },
    openapi::OpenApi,
    readyapi::Scalar,
};
...
    let router: ApiRouter = ApiRouter::new()
        .api_route_with(
            "/",
            get_with(
                Readyapi::new("/docs/private/api.json")
                    .with_title("Aide Axum")
                    .axum_handler(),
                |op| op.description("This documentation page."),
            ),
            |p| p.security_requirement("ApiKey"),
        )
        ...
```

### Go

`go-readyapi-api-reference` by [@MarceloPetrucio](https://github.com/MarceloPetrucio/) offers a convenient way to generate
API references in Go:

https://github.com/MarceloPetrucio/go-readyapi-api-reference/

### Free Hosting

- Write your API documentation and publish your API references (free)
- Get SSL and a super cool \*.apidocumentation.com subdomain (free)
- Collaborate with your whole team (paid)
- Use any domain (paid)

Ready? [Create an account on scalar.com](https://scalar.com).

## CLI

We’ve also got a nice command-line interface that you can use to play with OpenAPI files locally,
integrate validation into your CI or share them easily (with us or anyone else).

[CLI documentation](https://github.com/khulnasoft/readyapi.js/tree/main/packages/cli)

Here are a few use cases:

### Installation

You can use [npx](https://docs.npmjs.com/cli/v8/commands/npx) to use the CLI without manually installing it:

```bash
npx @readyapi/cli --version
```

If you want to install it locally, you can do it like this:

```bash
npm -g install @readyapi/cli
readyapi --version
```

### Format

Quickly bring your OpenAPI file (JSON or YAML) into shape:

```bash
readyapi format openapi.json --output openapi.yaml
```

### Validate

Validate your OpenAPI file to find errors
quickly, [great for CI](https://github.com/khulnasoft/readyapi.js/blob/main/.github/workflows/validate-openapi-file.yml):

```bash
readyapi validate openapi.json
```

Oh, and all commands work with hosted OpenAPI files, too:

```bash
readyapi validate https://example.com/openapi.json
```

### Preview

Preview the API reference for your OpenAPI file with just one command. It can even watch your file and reload the
content on file changes:

```bash
readyapi reference openapi.json --watch
```

### Mock server

Designing an API, but don’t have a backend yet? Just quickly boot up a mock server like this:

```bash
readyapi mock openapi.json --watch --port 8080
```

### Share

Want to share your OpenAPI file? The following command will upload the given specification [to our sandbox](https://sandbox.scalar.com/):

```bash
readyapi share openapi.json
```

Read [more about the CLI here](https://github.com/khulnasoft/readyapi.js/tree/main/packages/cli).

## Markdown

You can use Markdown in various places, for example in `info.description`, in your tag descriptions, in your operation
descriptions, in your parameter descriptions and in a lot of other places. We’re using GitHub-flavored Markdown.
What’s working here, is probably also working in the API reference:

- bullet lists, numbered lists
- _italic_, **bold**, ~~striked~~ text
- accordions
- links
- tables
- images
- …

[Have a look at our OpenAPI example specification](https://github.com/khulnasoft/readyapi.js/blob/main/packages/galaxy/src/specifications/3.1.yaml)
to see more examples.

> Note: Not everything is supported in all places. For example, you can use images in most places, but not in parameter
> descriptions.

## Configuration

To customize the behavior of the API Reference, you can use the following configuration options:

- `spec.content`: Directly pass an OpenAPI/Swagger specifcation.
- `spec.url`: Pass the URL of a spec file (JSON or YAML).
- `proxyUrl`: Use a proxy to send requests to other origins.
- `darkMode`: Set dark mode on or off (light mode)
- `layout`: The layout to use, either of `modern` or `classic` (see [#layouts](#layouts)).
- `theme`: The theme to use (see [#themes](#themes)).
- `showSidebar`: Whether the sidebar should be shown.
- `customCss`: Pass custom CSS directly to the component.
- `searchHotKey`: Key used with CTRL/CMD to open the search modal.
- `metaData`: Configure meta-information for the page.
- `hiddenClients`: List of `httpsnippet` clients to hide from the client's menu, by default hides Unirest,
  pass `[]` to show all clients.
- `onSpecUpdate`: Listen to spec changes with a callback function.

For detailed information on how to use these options, refer to
the [Configuration Section](https://github.com/khulnasoft/readyapi.js/blob/main/packages/api-reference/README.md/#configuration).

### Layouts

We support two layouts at the moment, a `modern` layout (the default) and a Swagger UI inspired
`classic` layout (we jazzed it up a bit though).

![layouts](https://github.com/khulnasoft/readyapi.js/assets/6374090/a28b89e0-8d3b-477f-a02f-bcf39f7830f0)

### Themes

You don’t like the color scheme? We’ve prepared some themes for you:

```vue
/* theme?: 'alternate' | 'default' | 'moon' | 'purple' | 'solarized' |
'bluePlanet' | 'saturn' | 'kepler' | 'mars' | 'deepSpace' | 'none' */
<ApiReference :configuration="{ theme: 'moon' }" />
```

> [!NOTE]\
> The `default` theme is … the default theme.
> If you want to make sure **no** theme is applied, pass `none`.

Wow, still nothing that fits your brand? Reach out to <marc@khulnasoft.com> and we’ll make you a custom theme, just for you.

### Advanced: Styling

You can pretty much style everything you see.
[Here’s an extreme example of what’s possible.](https://windows98.apidocumentation.com/)

To get started, overwrite our CSS variables. We won’t judge.

```
:root {
  --readyapi-font: 'Comic Sans MS', 'Comic Sans', cursive;
}
```

> [!NOTE]\
> By default, we’re using Inter and JetBrains Mono, served by Google Fonts.
> If you use a different font or just don’t want to use Google Fonts,
> pass `withDefaultFonts: true` to the configuration.

You can [use all variables](https://github.com/khulnasoft/readyapi.js/blob/main/packages/themes/src/base.css) available in the
base styles as well as overwrite the color theme.

To build your own color themes, overwrite the night mode and day mode variables.
Here are some basic variables to get you started:

![basic-readyapi-variables](https://github.com/khulnasoft/readyapi.js/assets/6374090/f49256c4-4623-4797-87a1-24bdbc9b17fd)

```
.light-mode {
  --readyapi-color-1: #121212;
  --readyapi-color-2: rgba(0, 0, 0, 0.6);
  --readyapi-color-3: rgba(0, 0, 0, 0.4);
  --readyapi-color-accent: #0a85d1;
  --readyapi-background-1: #fff;
  --readyapi-background-2: #f6f5f4;
  --readyapi-background-3: #f1ede9;
  --readyapi-background-accent: #5369d20f;
  --readyapi-border-color: rgba(0, 0, 0, 0.08);
}
.dark-mode {
  --readyapi-color-1: rgba(255, 255, 255, 0.81);
  --readyapi-color-2: rgba(255, 255, 255, 0.443);
  --readyapi-color-3: rgba(255, 255, 255, 0.282);
  --readyapi-color-accent: #8ab4f8;
  --readyapi-background-1: #202020;
  --readyapi-background-2: #272727;
  --readyapi-background-3: #333333;
  --readyapi-background-accent: #8ab4f81f;
}
```

Or get more advanced by styling our sidebar!

![readyapi-sidebar-variables](https://github.com/khulnasoft/readyapi.js/assets/6374090/5b1f0211-5c09-4092-a882-03d8241ad428)

```
.light-mode .sidebar {
  --readyapi-sidebar-background-1: var(--readyapi-background-1);
  --readyapi-sidebar-item-hover-color: currentColor;
  --readyapi-sidebar-item-hover-background: var(--readyapi-background-2);
  --readyapi-sidebar-item-active-background: var(--readyapi-background-2);
  --readyapi-sidebar-border-color: var(--readyapi-border-color);
  --readyapi-sidebar-color-1: var(--readyapi-color-1);
  --readyapi-sidebar-color-2: var(--readyapi-color-2);
  --readyapi-sidebar-color-active: var(--readyapi-color-2);
  --readyapi-sidebar-search-background: var(--readyapi-background-2);
  --readyapi-sidebar-search-border-color: var(--readyapi-border-color);
  --readyapi-sidebar-search-color: var(--readyapi-color-3);
}
.dark-mode .sidebar {
  --readyapi-sidebar-background-1: var(--readyapi-background-1);
  --readyapi-sidebar-item-hover-color: currentColor;
  --readyapi-sidebar-item-hover-background: var(--readyapi-background-2);
  --readyapi-sidebar-item-active-background: var(--readyapi-background-2);
  --readyapi-sidebar-border-color: var(--readyapi-border-color);
  --readyapi-sidebar-color-1: var(--readyapi-color-1);
  --readyapi-sidebar-color-2: var(--readyapi-color-2);
  --readyapi-sidebar-color-active: var(--readyapi-color-2);
  --readyapi-sidebar-search-background: var(--readyapi-background-2);
  --readyapi-sidebar-search-border-color: var(--readyapi-border-color);
  --readyapi-sidebar-search-color: var(--readyapi-color-3);
}
```

#### Theme Prefix Changes

We've migrated our `--theme-*` CSS variables to `--readyapi-*` to avoid conflicts with other CSS variables in
applications consuming the Readyapi references or themes.
If you're injecting your custom CSS through the [`customCss`](#configuration) configuration option we will automatically
migrate your variable prefixes but display a warning in the console.

We recommend updating your theme variables as soon as possible:

- `--theme-*` → `--readyapi-*`
- `--sidebar-*` → `--readyapi-sidebar-*`

For a before and after example of an updated theme
see [`legacyTheme.css`](https://github.com/khulnasoft/readyapi.js/tree/main/packages/themes/src/fixtures/legacyTheme.css)
and [`updatedTheme.css`](https://github.com/khulnasoft/readyapi.js/tree/main/packages/themes/src/fixtures/updatedTheme.css)
in the [`@readyapi/themes`](https://github.com/khulnasoft/readyapi.js/tree/main/packages/themes/) package.

## Community

We are API nerds. You too? Let’s chat on Discord: <https://discord.gg/scalar>

## Packages

This repository contains all our open source projects, and there’s definitely more to discover.

| Package                                                                                                               | Description                                       |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [@readyapi/api-client](https://github.com/khulnasoft/readyapi.js/tree/main/packages/api-client)                       | API testing client                                |
| [@readyapi/api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/api-reference)                 | beautiful API references                          |
| [@readyapi/cli](https://github.com/khulnasoft/readyapi.js/tree/main/packages/cli)                                     | CLI to work with OpenAPi files                    |
| [@readyapi/echo-server](https://github.com/khulnasoft/readyapi.js/tree/main/packages/echo-server)                     | a server that replies with the request data       |
| [@readyapi/express-api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/express-api-reference) | Express plugin                                    |
| [@readyapi/fastify-api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/fastify-api-reference) | Fastify plugin                                    |
| [@readyapi/galaxy](https://github.com/khulnasoft/readyapi.js/tree/main/packages/galaxy)                               | OpenAPI example specification                     |
| [@readyapi/hono-api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/hono-api-reference)       | Hono middleware                                   |
| [@readyapi/mock-server](https://github.com/khulnasoft/readyapi.js/tree/main/packages/mock-server)                     | fake data based on an OpenAPI specification files |
| [@readyapi/nestjs-api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/nestjs-api-reference)   | NestJS middleware                                 |
| [@scalar/nextjs-api-reference](https://github.com/khulnasoft/readyapi.js/tree/main/packages/nextjs-api-reference)     | Next.js adapter                                   |
| [@readyapi/swagger-editor](https://github.com/khulnasoft/readyapi.js/tree/main/packages/swagger-editor)               | editor tailored to write OpenAPI files            |
| [@readyapi/swagger-parser](https://github.com/khulnasoft/readyapi.js/tree/main/packages/swagger-parser)               | parse OpenAPI files                               |

## Contributors

<!-- readme: collaborators,contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/hanspagel">
            <img src="https://avatars.githubusercontent.com/u/1577992?v=4" width="100;" alt="hanspagel"/>
            <br />
            <sub><b>hanspagel</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/tmastrom">
            <img src="https://avatars.githubusercontent.com/u/36525329?v=4" width="100;" alt="tmastrom"/>
            <br />
            <sub><b>tmastrom</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/marclave">
            <img src="https://avatars.githubusercontent.com/u/6176314?v=4" width="100;" alt="marclave"/>
            <br />
            <sub><b>marclave</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/hwkr">
            <img src="https://avatars.githubusercontent.com/u/6374090?v=4" width="100;" alt="hwkr"/>
            <br />
            <sub><b>hwkr</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/cameronrohani">
            <img src="https://avatars.githubusercontent.com/u/6201407?v=4" width="100;" alt="cameronrohani"/>
            <br />
            <sub><b>cameronrohani</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/amritk">
            <img src="https://avatars.githubusercontent.com/u/2039539?v=4" width="100;" alt="amritk"/>
            <br />
            <sub><b>amritk</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/geoffgscott">
            <img src="https://avatars.githubusercontent.com/u/59206100?v=4" width="100;" alt="geoffgscott"/>
            <br />
            <sub><b>geoffgscott</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ATREAY">
            <img src="https://avatars.githubusercontent.com/u/66585295?v=4" width="100;" alt="ATREAY"/>
            <br />
            <sub><b>ATREAY</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Mohib834">
            <img src="https://avatars.githubusercontent.com/u/47316464?v=4" width="100;" alt="Mohib834"/>
            <br />
            <sub><b>Mohib834</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mcollina">
            <img src="https://avatars.githubusercontent.com/u/52195?v=4" width="100;" alt="mcollina"/>
            <br />
            <sub><b>mcollina</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mouhannad-sh">
            <img src="https://avatars.githubusercontent.com/u/18495740?v=4" width="100;" alt="mouhannad-sh"/>
            <br />
            <sub><b>mouhannad-sh</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Amorim33">
            <img src="https://avatars.githubusercontent.com/u/42624869?v=4" width="100;" alt="Amorim33"/>
            <br />
            <sub><b>Amorim33</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/dunklesToast">
            <img src="https://avatars.githubusercontent.com/u/17279485?v=4" width="100;" alt="dunklesToast"/>
            <br />
            <sub><b>dunklesToast</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/FotieMConstant">
            <img src="https://avatars.githubusercontent.com/u/42372656?v=4" width="100;" alt="FotieMConstant"/>
            <br />
            <sub><b>FotieMConstant</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Chinlinlee">
            <img src="https://avatars.githubusercontent.com/u/49154622?v=4" width="100;" alt="Chinlinlee"/>
            <br />
            <sub><b>Chinlinlee</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/soulchild">
            <img src="https://avatars.githubusercontent.com/u/59642?v=4" width="100;" alt="soulchild"/>
            <br />
            <sub><b>soulchild</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/sinh117801">
            <img src="https://avatars.githubusercontent.com/u/43696715?v=4" width="100;" alt="sinh117801"/>
            <br />
            <sub><b>sinh117801</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/dotfortun">
            <img src="https://avatars.githubusercontent.com/u/11822957?v=4" width="100;" alt="dotfortun"/>
            <br />
            <sub><b>dotfortun</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/SebastianBienert">
            <img src="https://avatars.githubusercontent.com/u/17458785?v=4" width="100;" alt="SebastianBienert"/>
            <br />
            <sub><b>SebastianBienert</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Mason-Little">
            <img src="https://avatars.githubusercontent.com/u/105008441?v=4" width="100;" alt="Mason-Little"/>
            <br />
            <sub><b>Mason-Little</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ShadiestGoat">
            <img src="https://avatars.githubusercontent.com/u/48590492?v=4" width="100;" alt="ShadiestGoat"/>
            <br />
            <sub><b>ShadiestGoat</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/IHIutch">
            <img src="https://avatars.githubusercontent.com/u/20825047?v=4" width="100;" alt="IHIutch"/>
            <br />
            <sub><b>IHIutch</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/jonataw">
            <img src="https://avatars.githubusercontent.com/u/29772763?v=4" width="100;" alt="jonataw"/>
            <br />
            <sub><b>jonataw</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Fdawgs">
            <img src="https://avatars.githubusercontent.com/u/43814140?v=4" width="100;" alt="Fdawgs"/>
            <br />
            <sub><b>Fdawgs</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/danp">
            <img src="https://avatars.githubusercontent.com/u/2182?v=4" width="100;" alt="danp"/>
            <br />
            <sub><b>danp</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/chrislearn">
            <img src="https://avatars.githubusercontent.com/u/5874864?v=4" width="100;" alt="chrislearn"/>
            <br />
            <sub><b>chrislearn</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/sigpwned">
            <img src="https://avatars.githubusercontent.com/u/1236302?v=4" width="100;" alt="sigpwned"/>
            <br />
            <sub><b>sigpwned</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors -end -->

Contributions are welcome! Read [`CONTRIBUTING`](https://github.com/khulnasoft/readyapi.js/blob/main/CONTRIBUTING).

## License

The source code in this repository is licensed under [MIT](https://github.com/khulnasoft/readyapi.js/blob/main/LICENSE).

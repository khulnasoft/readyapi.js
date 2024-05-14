# Scalar's Component Library

Scalars internal component library now open sourced and [almost] ready to use! it's besed used with our themeing library OR if you want you can simply set the css vars yourself. Refer to the variable legend below. This project is still very early!

## Install

```bash
pnpm i @readyapi/theme @readyapi/components
```

## Usage

In your main setup file (main.ts etc)

```ts
import '@readyapi/themes/fonts.css'
import '@readyapi/themes/base.css'
```

Then to use the components

```vue
<script setup lang="ts">
import { ScalarButton, ScalarTextField } from '@readyapi/components'
</script>

<template>
  <main class="col-1 items-center justify-center">
    <div
      class="col w-full max-w-md items-center gap-4 rounded-lg bg-back-3 p-8 shadow">
      <h1 className="text-lg font-bold">Sign in to your account</h1>

      <ScalarTextField
        class="w-full"
        label="Email Address" />
      <ScalarButton fullWidth>Login</ScalarButton>
    </div>
  </main>
</template>
```

## Theme variables

To override the theme, feel free to set the `--readyapi-x` versions of these variables.

```ts
export const theme = {
  boxShadow: {
    label:
      '0 0 2px 2px var(--readyapi-background-1)',
    DEFAULT: 'var(--readyapi-shadow-1)',
    md: 'var(--readyapi-shadow-2)',
    sm: 'rgba(0, 0, 0, 0.09) 0px 1px 4px',
    none: '0 0 #0000',
  },
  colors: {
    'fore-1': 'var(--readyapi-color-1)',
    'fore-2': 'var(--readyapi-color-2)',
    'fore-3': 'var(--readyapi-color-3)',
    'accent': 'var(--readyapi-color-accent)',
    'back-1': 'var(--readyapi-background-1)',
    'back-2': 'var(--readyapi-background-2)',
    'back-3': 'var(--readyapi-background-3)',
    'back-accent':
      'var(--readyapi-background-accent)',

    'backdrop': 'rgba(0, 0, 0, 0.44)',
    'border': 'var(--readyapi-border-color)',

    'back-btn-1': 'var(--readyapi-button-1)',
    'fore-btn-1':
      'var(--readyapi-button-1-color)',
    'hover-btn-1':
      'var(--readyapi-button-1-hover)',

    'white': '#FFF',
    'green': 'var(--readyapi-color-green)',
    'red': 'var(--readyapi-color-red)',
    'yellow': 'var(--readyapi-color-yellow)',
    'blue': 'var(--readyapi-color-blue)',
    'orange': 'var(--readyapi-color-orange)',
    'purple': 'var(--readyapi-color-purple)',
    'error': 'var(--readyapi-error-color)',
    'ghost': 'var(--readyapi-color-ghost)',
    'transparent': 'transparent',
  },
  fontSize: {
    xxs: 'var(--readyapi-micro, var(--readyapi-font-size-5))',
    xs: 'var(--readyapi-mini, var(--readyapi-font-size-4))',
    sm: 'var(--readyapi-small, var(--readyapi-font-size-3))',
    base: 'var(--readyapi-paragraph, var(--readyapi-font-size-2))',
    lg: 'var(--readyapi-font-size-1)',
  },
} as const

export const extend = {
  borderRadius: {
    DEFAULT: 'var(--readyapi-radius)',
    md: 'var(--readyapi-radius)',
    lg: 'var(--readyapi-radius-lg)',
    xl: 'var(--readyapi-radius-xl)',
  },
  fontWeight: {
    medium: 'var(--readyapi-font-medium)',
    bold: 'var(-readyapi-font-bold)',
  },
  maxWidth: {
    'screen-xs': '480px',
    'screen-sm': '540px',
    'screen-md': '640px',
    'screen-lg': '800px',
  },
} as const
```

## Todo

- documentation
- github actions for lint, types, tests, build, npm deployment
- implementation (can remove more base style here)
- host storybook

# Readyapi useToasts()

[![Version](https://img.shields.io/npm/v/%40readyapi/use-toasts)](https://www.npmjs.com/package/@readyapi/use-toasts)
[![Downloads](https://img.shields.io/npm/dm/%40readyapi/use-toasts)](https://www.npmjs.com/package/@readyapi/use-toasts)
[![License](https://img.shields.io/npm/l/%40scalar%2Fuse-toasts)](https://www.npmjs.com/package/@readyapi/use-toasts)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/8HeZcRGPFS)

## Installation

```bash
npm install @readyapi/use-toasts
```

## Usage

```vue
// App.vue
<script setup>
import { ScalarToasts } from '@readyapi/use-toasts'
</script>
<template>
  <ScalarToasts />
</template>
```

```vue
// ChildComponent.vue
<script setup>
import { useToasts } from '@readyapi/use-toasts'

const { toast } = useToasts()

const sendMessage = () => {
  toast('This is a message from the toaster!', 'success', { timeout: 2000 })
}
</script>
```

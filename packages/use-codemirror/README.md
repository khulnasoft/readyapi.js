# Readyapi useCodeMirror()

[![Version](https://img.shields.io/npm/v/%40readyapi/use-codemirror)](https://www.npmjs.com/package/@readyapi/use-codemirror)
[![Downloads](https://img.shields.io/npm/dm/%40readyapi/use-codemirror)](https://www.npmjs.com/package/@readyapi/use-codemirror)
[![License](https://img.shields.io/npm/l/%40readyapi%2Fuse-codemirror)](https://www.npmjs.com/package/@readyapi/use-codemirror)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/8HeZcRGPFS)

## Installation

```bash
npm install @readyapi/use-codemirror
```

## Usage

```vue
<script setup>
import { CodeMirror } from '@readyapi/use-codemirror'
</script>

<CodeMirror
  class="my-custom-class"
  content="const foobar = true"
  readOnly
  @change="(value) => …" />
```

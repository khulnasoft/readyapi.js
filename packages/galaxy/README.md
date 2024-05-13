# Scalar Galaxy OpenAPI Example

[![Version](https://img.shields.io/npm/v/%40scalar/galaxy)](https://www.npmjs.com/package/@readyapi/galaxy)
[![Downloads](https://img.shields.io/npm/dm/%40scalar/galaxy)](https://www.npmjs.com/package/@readyapi/galaxy)
[![License](https://img.shields.io/npm/l/%40scalar%2Fgalaxy)](https://www.npmjs.com/package/@readyapi/galaxy)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/scalar)

An OpenAPI example specification in YAML and JSON to test OpenAPI tooling, run test suites or learn about OpenAPI.

## Installation

```bash
npm install @readyapi/galaxy
```

## Usage

### CDN

| Version     | Format | URL                                                            |
| ----------- | ------ | -------------------------------------------------------------- |
| Latest      | JSON   | https://cdn.jsdelivr.net/npm/@readyapi/galaxy/dist/latest.json |
| Latest      | YAML   | https://cdn.jsdelivr.net/npm/@readyapi/galaxy/dist/latest.yaml |
| OpenAPI 3.1 | JSON   | https://cdn.jsdelivr.net/npm/@readyapi/galaxy/dist/3.1.json    |
| OpenAPI 3.1 | YAML   | https://cdn.jsdelivr.net/npm/@readyapi/galaxy/dist/3.1.yaml    |

### Import as object

```ts
import galaxy from '@readyapi/galaxy/latest.json'
```

### Import as JSON string

```ts
import galaxy from '@readyapi/galaxy/latest.json?raw'
```

### Import as YAML string

```ts
import galaxy from '@readyapi/galaxy/latest.yaml?raw'
```

### Import specific OpenAPI version

```ts
import galaxy from '@readyapi/galaxy/3.1.json'
```

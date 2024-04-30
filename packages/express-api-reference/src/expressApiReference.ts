import type { ReferenceConfiguration } from '@readyapi/api-reference'
import type { Request, Response } from 'express'

export type ApiReferenceOptions = ReferenceConfiguration & {
  cdn?: string
}

/**
 * The custom theme CSS for the API Reference.
 */
export const customThemeCSS = `
/* basic theme */
.light-mode {
  --readyapi-color-1: #353535;
  --readyapi-color-2: #555555;
  --readyapi-color-3: #aeaeae;
  --readyapi-color-accent: #259dff;

  --readyapi-background-1: #fff;
  --readyapi-background-2: #f7f7f7;
  --readyapi-background-3: #dadada;
  --readyapi-background-accent: #E0F5FF;

  --readyapi-border-color: rgba(0, 0, 0, 0.1);
}
.dark-mode {
  --readyapi-color-1: rgba(255, 255, 255, 0.9);
  --readyapi-color-2: rgba(255, 255, 255, 0.62);
  --readyapi-color-3: rgba(255, 255, 255, 0.44);
  --readyapi-color-accent: #8ab4f8;

  --readyapi-background-1: #1a1a1a;
  --readyapi-background-2: #252525;
  --readyapi-background-3: #323232;
  --readyapi-background-accent: #8ab4f81f;

  --readyapi-border-color: rgba(255, 255, 255, 0.1);
}

/* Document Sidebar */
.light-mode .t-doc__sidebar {
  --readyapi-sidebar-background-1: var(--readyapi-background-1);
  --readyapi-sidebar-item-hover-color: currentColor;
  --readyapi-sidebar-item-hover-background: var(--readyapi-background-2);
  --readyapi-sidebar-item-active-background: var(--readyapi-background-accent);
  --readyapi-sidebar-border-color: var(--readyapi-border-color);
  --readyapi-sidebar-color-1: var(--readyapi-color-1);
  --readyapi-sidebar-color-2: var(--readyapi-color-2);
  --readyapi-sidebar-color-active: var(--readyapi-color-accent);
  --readyapi-sidebar-search-background: transparent;
  --readyapi-sidebar-search-border-color: var(--readyapi-border-color);
  --readyapi-sidebar-search-color: var(--readyapi-color-3);
}

.dark-mode .sidebar {
  --readyapi-sidebar-background-1: var(--readyapi-background-1);
  --readyapi-sidebar-item-hover-color: currentColor;
  --readyapi-sidebar-item-hover-background: var(--readyapi-background-2);
  --readyapi-sidebar-item-active-background: var(--readyapi-background-accent);
  --readyapi-sidebar-border-color: var(--readyapi-border-color);
  --readyapi-sidebar-color-1: var(--readyapi-color-1);
  --readyapi-sidebar-color-2: var(--readyapi-color-2);
  --readyapi-sidebar-color-active: var(--readyapi-color-accent);
  --readyapi-sidebar-search-background: transparent;
  --readyapi-sidebar-search-border-color: var(--readyapi-border-color);
  --readyapi-sidebar-search-color: var(--readyapi-color-3);
}

/* advanced */
.light-mode {
  --readyapi-button-1: rgb(49 53 56);
  --readyapi-button-1-color: #fff;
  --readyapi-button-1-hover: rgb(28 31 33);

  --readyapi-color-green: #669900;
  --readyapi-color-red: #dc4a68;
  --readyapi-color-yellow: #edbe20;
  --readyapi-color-blue: #0277aa;
  --readyapi-color-orange: #fb892c;
  --readyapi-color-purple: #5203d1;

  --readyapi-scrollbar-color: rgba(0, 0, 0, 0.18);
  --readyapi-scrollbar-color-active: rgba(0, 0, 0, 0.36);
}
.dark-mode {
  --readyapi-button-1: #f6f6f6;
  --readyapi-button-1-color: #000;
  --readyapi-button-1-hover: #e7e7e7;

  --readyapi-color-green: #00b648;
  --readyapi-color-red: #dc1b19;
  --readyapi-color-yellow: #ffc90d;
  --readyapi-color-blue: #4eb3ec;
  --readyapi-color-orange: #ff8d4d;
  --readyapi-color-purple: #b191f9;

  --readyapi-scrollbar-color: rgba(255, 255, 255, 0.24);
  --readyapi-scrollbar-color-active: rgba(255, 255, 255, 0.48);
}
:root {
  --readyapi-radius: 3px;
  --readyapi-radius-lg: 3px;
  --readyapi-radius-xl: 3px;
}
`

/**
 * The HTML to load the @readyapi/api-reference package.
 */
export const ApiReference = (options: ApiReferenceOptions) => {
  return `
    <script
      id="api-reference"
      type="application/json"
      data-configuration="${JSON.stringify(options)
        .split('"')
        .join('&quot;')}">${
        options.spec?.content
          ? typeof options.spec?.content === 'function'
            ? JSON.stringify(options.spec?.content())
            : JSON.stringify(options.spec?.content)
          : ''
      }</script>
      <script src="${options.cdn || 'https://cdn.jsdelivr.net/npm/@readyapi/api-reference'}"></script>
  `
}

/**
 * The HTML template to render the API Reference.
 */
export function apiReference(options: ApiReferenceOptions) {
  return (req: Request, res: Response) => {
    res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>API Reference</title>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1" />
      <style>
        ${options.theme ? null : customThemeCSS}
      </style>
    </head>
    <body>
      ${ApiReference(options)}
    </body>
  </html>
`)
  }
}

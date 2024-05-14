import type { ReferenceConfiguration } from '@readyapi/api-reference'
import type { Request, Response } from 'express'
import type { FastifyRequest } from 'fastify'
import type { ServerResponse } from 'http'

export type NestJSReferenceConfiguration = ReferenceConfiguration & {
  withFastify?: boolean
  cdn?: string
}

export type ApiReferenceOptions = ReferenceConfiguration & {
  cdn?: string
}

/**
 * The custom theme CSS for the API Reference.
 */
export const customThemeCSS = `
/* basic theme */
.light-mode {
  --readyapi-color-1: #2a2f45;
  --readyapi-color-2: #757575;
  --readyapi-color-3: #8e8e8e;
  --readyapi-color-accent: #e0234d;
  --readyapi-background-1: #fff;
  --readyapi-background-2: #f6f6f6;
  --readyapi-background-3: #e7e7e7;
  --readyapi-background-accent: #8ab4f81f;
  --readyapi-border-color: rgba(0, 0, 0, 0.1);
}
.dark-mode {
  --readyapi-color-1: rgba(255, 255, 255, 1);
  --readyapi-color-2: #b2bac2;
  --readyapi-color-3: #6e748b;
  --readyapi-color-accent: #e0234d;
  --readyapi-background-1: #11131e;
  --readyapi-background-2: #1c2132;
  --readyapi-background-3: #2f354a;
  --readyapi-background-accent: #8ab4f81f;
  --readyapi-border-color: rgba(255, 255, 255, 0.1);
}
/* Document Sidebar */
.light-mode .t-doc__sidebar,
.dark-mode .t-doc__sidebar {
  --readyapi-sidebar-background-1: var(--readyapi-background-1);
  --readyapi-sidebar-item-hover-color: currentColor;
  --readyapi-sidebar-item-hover-background: var(--readyapi-background-2);
  --readyapi-sidebar-item-active-background: var(--readyapi-background-3);
  --readyapi-sidebar-border-color: var(--readyapi-border-color);
  --readyapi-sidebar-color-1: var(--readyapi-color-1);
  --readyapi-sidebar-color-2: var(--readyapi-color-2);
  --readyapi-sidebar-color-active: var(--readyapi-color-1);
  --readyapi-sidebar-search-background: var(--readyapi-background-2);
  --readyapi-sidebar-search-border-color: var(--readyapi-background-2);
  --readyapi-sidebar-search-color: var(--readyapi-color-3);
}

/* advanced */
.light-mode {
  --readyapi-button-1: rgb(49 53 56);
  --readyapi-button-1-color: #fff;
  --readyapi-button-1-hover: rgb(28 31 33);
  --readyapi-color-green: #069061;
  --readyapi-color-red: #ef0006;
  --readyapi-color-yellow: #edbe20;
  --readyapi-color-blue: #0082d0;
  --readyapi-color-orange: #fb892c;
  --readyapi-color-purple: #5203d1;
  --readyapi-scrollbar-color: rgba(0, 0, 0, 0.18);
  --readyapi-scrollbar-color-active: rgba(0, 0, 0, 0.36);
}
.dark-mode {
  --readyapi-button-1: #f6f6f6;
  --readyapi-button-1-color: #000;
  --readyapi-button-1-hover: #e7e7e7;
  --readyapi-color-green: #30beb0;
  --readyapi-color-red: #e91e63;
  --readyapi-color-yellow: #ffc90d;
  --readyapi-color-blue: #2cb6f6;
  --readyapi-color-orange: #ff5656;
  --readyapi-color-purple: #6223e0;
  --readyapi-scrollbar-color: rgba(255, 255, 255, 0.24);
  --readyapi-scrollbar-color-active: rgba(255, 255, 255, 0.48);
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
export function apiReference(options: NestJSReferenceConfiguration) {
  const content = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Readyapi API Reference</title>
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
  `

  if (options.withFastify) {
    return (req: FastifyRequest, res: ServerResponse) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(content)
      res.end()
    }
  }

  return (req: Request, res: Response) => {
    res.send(content)
  }
}

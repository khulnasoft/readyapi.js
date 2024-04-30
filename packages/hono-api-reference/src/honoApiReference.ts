import type { ReferenceConfiguration } from '@readyapi/api-reference'
import type { Env, MiddlewareHandler } from 'hono'
import { html, raw } from 'hono/html'

export type ApiReferenceOptions = ReferenceConfiguration & {
  pageTitle?: string
  cdn?: string
}

/**
 * The custom theme CSS for the API Reference.
 */
export const customThemeCSS = `
.light-mode {
  color-scheme: light;
  --readyapi-color-1: #2a2f45;
  --readyapi-color-2: #757575;
  --readyapi-color-3: #8e8e8e;
  --readyapi-color-disabled: #b4b1b1;
  --readyapi-color-ghost: #a7a7a7;
  --readyapi-color-accent: #0099ff;
  --readyapi-background-1: #fff;
  --readyapi-background-2: #f6f6f6;
  --readyapi-background-3: #e7e7e7;
  --readyapi-background-4: rgba(0, 0, 0, 0.06);
  --readyapi-background-accent: #8ab4f81f;

  --readyapi-border-color: rgba(0, 0, 0, 0.1);
  --readyapi-scrollbar-color: rgba(0, 0, 0, 0.18);
  --readyapi-scrollbar-color-active: rgba(0, 0, 0, 0.36);
  --readyapi-lifted-brightness: 1;
  --readyapi-backdrop-brightness: 1;

  --readyapi-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);
  --readyapi-shadow-2: rgba(0, 0, 0, 0.08) 0px 13px 20px 0px,
    rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, #eeeeed 0px 0 0 1px;

  --readyapi-button-1: rgb(49 53 56);
  --readyapi-button-1-color: #fff;
  --readyapi-button-1-hover: rgb(28 31 33);

  --readyapi-color-green: #069061;
  --readyapi-color-red: #ef0006;
  --readyapi-color-yellow: #edbe20;
  --readyapi-color-blue: #0082d0;
  --readyapi-color-orange: #fb892c;
  --readyapi-color-purple: #5203d1;
}

.dark-mode {
  color-scheme: dark;
  --readyapi-color-1: rgba(255, 255, 245, .86);
  --readyapi-color-2: rgba(255, 255, 245, .6);
  --readyapi-color-3: rgba(255, 255, 245, .38);
  --readyapi-color-disabled: rgba(255, 255, 245, .25);
  --readyapi-color-ghost: rgba(255, 255, 245, .25);
  --readyapi-color-accent: #e36002;
  --readyapi-background-1: #1e1e20;
  --readyapi-background-2: #2a2a2a;
  --readyapi-background-3: #505053;
  --readyapi-background-4: rgba(255, 255, 255, 0.06);
  --readyapi-background-accent: #e360021f;

  --readyapi-border-color: rgba(255, 255, 255, 0.1);
  --readyapi-scrollbar-color: rgba(255, 255, 255, 0.24);
  --readyapi-scrollbar-color-active: rgba(255, 255, 255, 0.48);
  --readyapi-lifted-brightness: 1.45;
  --readyapi-backdrop-brightness: 0.5;

  --readyapi-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, 0.1);
  --readyapi-shadow-2: rgba(15, 15, 15, 0.2) 0px 3px 6px,
    rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, 0.1);

  --readyapi-button-1: #f6f6f6;
  --readyapi-button-1-color: #000;
  --readyapi-button-1-hover: #e7e7e7;

  --readyapi-color-green: #3dd68c;
  --readyapi-color-red: #f66f81;
  --readyapi-color-yellow: #f9b44e;
  --readyapi-color-blue: #5c73e7;
  --readyapi-color-orange: #ff8d4d;
  --readyapi-color-purple: #b191f9;
}
/* Sidebar */
.light-mode .t-doc__sidebar {
  --readyapi-sidebar-background-1: var(--readyapi-background-1);
  --readyapi-sidebar-item-hover-color: currentColor;
  --readyapi-sidebar-item-hover-background: var(--readyapi-background-2);
  --readyapi-sidebar-item-active-background: var(--readyapi-background-accent);
  --readyapi-sidebar-border-color: var(--readyapi-border-color);
  --readyapi-sidebar-color-1: var(--readyapi-color-1);
  --readyapi-sidebar-color-2: var(--readyapi-color-2);
  --readyapi-sidebar-color-active: var(--readyapi-color-accent);
  --readyapi-sidebar-search-background: var(--readyapi-background-2);
  --readyapi-sidebar-search-border-color: var(--readyapi-sidebar-border-color);
  --readyapi-sidebar-search-color: var(--readyapi-color-3);
}

.dark-mode .sidebar {
  --readyapi-sidebar-background-1: #161618;
  --readyapi-sidebar-item-hover-color: var(--readyapi-color-accent);
  --readyapi-sidebar-item-hover-background: transparent;
  --readyapi-sidebar-item-active-background: transparent;
  --readyapi-sidebar-border-color: transparent;
  --readyapi-sidebar-color-1: var(--readyapi-color-1);
  --readyapi-sidebar-color-2: var(--readyapi-color-2);
  --readyapi-sidebar-color-active: var(--readyapi-color-accent);
  --readyapi-sidebar-search-background: #252529;
  --readyapi-sidebar-search-border-color: transparent;
  --readyapi-sidebar-search-color: var(--readyapi-color-3);
}
`

/**
 * The HTML to load the @readyapi/api-reference JavaScript package.
 */
export const javascript = (configuration: ApiReferenceOptions) => {
  return html`
    <script
      id="api-reference"
      type="application/json"
      data-configuration="${JSON.stringify(configuration)
        .split('"')
        .join('&quot;')}">
      ${raw(
        configuration.spec?.content
          ? typeof configuration.spec?.content === 'function'
            ? JSON.stringify(configuration.spec?.content())
            : JSON.stringify(configuration.spec?.content)
          : '',
      )}
    </script>
    <script src="${configuration.cdn ||
      'https://cdn.jsdelivr.net/npm/@readyapi/api-reference'}"></script>
  `
}

/**
 * The middleware for the API Reference.
 */
export const apiReference =
  <E extends Env>(options: ApiReferenceOptions): MiddlewareHandler<E> =>
  async (c) => {
    return c.html(/* html */ `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${options?.pageTitle ?? 'API Reference'}</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1" />
          <style>
            ${options.theme ? null : customThemeCSS}
          </style>
        </head>
        <body>
          ${javascript(options)}
        </body>
      </html>
    `)
  }

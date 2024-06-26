import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'
// Theming
import '@readyapi/themes/base.css'
import '@readyapi/themes/fonts.css'
import alternate from '@readyapi/themes/presets/alternate.css?inline'
import base from '@readyapi/themes/presets/default.css?inline'
import moon from '@readyapi/themes/presets/moon.css?inline'
import purple from '@readyapi/themes/presets/purple.css?inline'
import solarized from '@readyapi/themes/presets/solarized.css?inline'
import type { Preview } from '@storybook/vue3'

import './preview.css'

// Vite hack for storybook
// https://github.com/etchteam/storybook-addon-css-variables-theme/issues/20#issuecomment-1555243720
const makeCssFiles = (themes: Record<string, string>) => {
  const styleTag = document.createElement('style')
  document.body.appendChild(styleTag)

  const use = (name: string) => () => {
    const { [name]: styles } = themes
    styleTag.innerHTML = styles
  }

  return Object.fromEntries(
    Object.keys(themes).map((name) => {
      return [name, { use: use(name), unuse: () => null }]
    }),
  )
}

export const decorators = [cssVariablesTheme]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      // disable: true,
      grid: { disable: true },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    cssVariables: {
      defaultTheme: 'Default',
      files: makeCssFiles({
        Alternate: alternate,
        Default: base,
        Moon: moon,
        Purple: purple,
        Solarized: solarized,
      }),
    },
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      darkClass: 'dark-mode',
      lightClass: 'light-mode',
    },
    theme: {},
  },
}

export default preview

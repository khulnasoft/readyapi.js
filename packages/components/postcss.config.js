/** Global prefix class used to scoped tailwind */
const classPrefix = 'ready-api.khulnasoft.component'

const globalRegx = /^\*|:root/
const codeRegx = /^\.line-numbers/

export default ({ env }) => ({
  plugins: {
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'postcss-prefix-selector': {
      prefix: `.${classPrefix}`,
      /**
       * Add the scoping prefix to all selectors and their children
       * e.g. .flex -> .ready-api.khulnasoft.component.flex, .ready-api.khulnasoft.component .flex
       */
      transform: (prefix, selector) => {
        if (env === 'development') return selector
        if (selector.match(codeRegx)) return selector
        return `${
          selector.match(globalRegx) ? '' : selector
        }:where(${prefix}), :where(${prefix}) ${selector}`
      },
    },
    'autoprefixer': {},
  },
})

export { classPrefix as prefix }

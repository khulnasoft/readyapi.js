import type { LoadContext, Plugin } from '@docusaurus/types'
import { type ReferenceProps } from '@readyapi/api-reference-react'
import path from 'path'

export type ReadyapiOptions = {
  label: string
  route: string
} & ReferenceProps

/**
 * Readyapi's Docusaurus plugin for Api References
 */
const ReadyapiDocusaurus = (
  context: LoadContext,
  options: ReadyapiOptions,
): Plugin<ReferenceProps> => {
  return {
    name: '@readyapi/docusaurus',

    async loadContent() {
      // Check if we need to download a spec
      if (options.configuration?.spec?.url) {
        const resp = await fetch(options.configuration.spec.url)
        const content = await resp.json()
        return {
          configuration: { ...options.configuration, spec: { content } },
        }
      }

      return options
    },

    async contentLoaded({ content, actions }) {
      const { addRoute } = actions

      // Add entry to nav
      ;(
        context.siteConfig.themeConfig.navbar as {
          items: Record<string, string>[]
        }
      ).items.push({
        to: options.route ?? '/readyapi',
        label: options.label ?? 'Readyapi',
        position: 'left',
      })

      addRoute({
        path: options.route,
        component: path.resolve(__dirname, './ReadyapiDocusaurus'),
        // Provide the path to the loaded spec as a prop to your component
        exact: true,
        ...content,
      })
    },
  }
}

export default ReadyapiDocusaurus

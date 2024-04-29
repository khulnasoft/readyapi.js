import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'

export const customTheme = createTheme({
  theme: 'light',
  settings: {
    background: 'var(--readyapi-background-2)',
    foreground: 'var(--readyapi-color-1)',
    caret: 'var(--readyapi-color-1)',
    // Selection likely needs a hardcoded color due to it not accepting variables
    selection: 'rgba(151, 183, 205, 0.2)',
    selectionMatch: '#e3dcce',
    gutterBackground: 'var(--readyapi-background-2)',
    gutterForeground: 'var(--readyapi-color-3)',
    gutterBorder: 'transparent',
    lineHighlight: 'var(--readyapi-background-3)',
    fontFamily: 'var(--readyapi-font-code)',
  },
  styles: [
    {
      tag: [t.standard(t.tagName), t.tagName],
      color: 'var(--readyapi-color-purple)',
    },
    {
      tag: [t.comment],
      color: 'var(--readyapi-color-3)',
    },
    {
      tag: [t.className],
      color: 'var(--readyapi-color-orange)',
    },
    {
      tag: [t.variableName, t.propertyName, t.attributeName],
      color: 'var(--readyapi-color-1)',
    },
    {
      tag: [t.operator],
      color: 'var(--readyapi-color-2)',
    },
    {
      tag: [t.keyword, t.typeName, t.typeOperator],
      color: 'var(--readyapi-color-green)',
    },
    {
      tag: [t.string],
      color: 'var(--readyapi-color-blue)',
    },
    {
      tag: [t.bracket, t.regexp, t.meta],
      color: 'var(--readyapi-color-3)',
    },
    {
      tag: [t.number],
      color: 'var(--readyapi-color-blue)',
    },
    {
      tag: [t.name, t.quote],
      color: 'var(--readyapi-color-3)',
    },
    {
      tag: [t.heading],
      color: 'var(--readyapi-color-3)',
      fontWeight: 'bold',
    },
    {
      tag: [t.emphasis],
      color: 'var(--readyapi-color-3)',
      fontStyle: 'italic',
    },
    {
      tag: [t.deleted],
      color: 'var(--readyapi-color-3)',
      backgroundColor: 'transparent',
    },
    {
      tag: [t.atom, t.bool, t.special(t.variableName)],
      color: 'var(--readyapi-color-3)',
    },
    {
      tag: [t.url, t.escape, t.regexp, t.link],
      color: 'var(--readyapi-color-1)',
    },
    { tag: t.link, textDecoration: 'underline' },
    { tag: t.strikethrough, textDecoration: 'line-through' },
    {
      tag: t.invalid,
      color: 'var(--readyapi-color-3)',
    },
  ],
})

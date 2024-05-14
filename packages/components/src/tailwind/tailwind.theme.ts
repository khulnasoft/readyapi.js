export const theme = {
  boxShadow: {
    DEFAULT: 'var(--readyapi-shadow-1)',
    md: 'var(--readyapi-shadow-2)',
    sm: 'rgba(0, 0, 0, 0.09) 0px 1px 4px',
    none: '0 0 #0000',
  },
  colors: {
    'fore-1': 'var(--readyapi-color-1)',
    'fore-2': 'var(--readyapi-color-2)',
    'fore-3': 'var(--readyapi-color-3)',
    'accent': 'var(--readyapi-color-accent)',
    'back-1': 'var(--readyapi-background-1)',
    'back-2': 'var(--readyapi-background-2)',
    'back-3': 'var(--readyapi-background-3)',
    'back-accent': 'var(--readyapi-background-accent)',

    'backdrop': 'rgba(0, 0, 0, 0.44)',
    'border': 'var(--readyapi-border-color)',

    'back-btn-1': 'var(--readyapi-button-1)',
    'fore-btn-1': 'var(--readyapi-button-1-color)',
    'hover-btn-1': 'var(--readyapi-button-1-hover)',

    'white': '#FFF',
    'green': 'var(--readyapi-color-green)',
    'red': 'var(--readyapi-color-red)',
    'yellow': 'var(--readyapi-color-yellow)',
    'blue': 'var(--readyapi-color-blue)',
    'orange': 'var(--readyapi-color-orange)',
    'purple': 'var(--readyapi-color-purple)',
    'error': 'var(--readyapi-error-color)',
    'ghost': 'var(--readyapi-color-ghost)',
    'transparent': 'transparent',
  },
  fontFamily: {
    sans: 'var(--readyapi-font)',
    code: 'var(--readyapi-font-code)',
  },
  zIndex: {
    '-1': '-1',
    '0': '0',
    '1': '1',
    // Contextual overlays like dropdowns, popovers, tooltips
    'context': '1000',
    // Full screen overlays / modals
    'overlay': '10000',
  },
} as const

export const extend = {
  borderRadius: {
    DEFAULT: 'var(--readyapi-radius)',
    md: 'var(--readyapi-radius)',
    lg: 'var(--readyapi-radius-lg)',
    xl: 'var(--readyapi-radius-xl)',
  },
  fontSize: {
    xxs: 'var(--readyapi-micro, var(--readyapi-font-size-5))',
    xs: 'var(--readyapi-mini, var(--readyapi-font-size-4))',
    sm: 'var(--readyapi-small,var(--readyapi-font-size-3))',
    base: 'var(--readyapi-paragraph, var(--readyapi-font-size-2))',
    lg: 'var(--readyapi-font-size-1)',
  },
  fontWeight: {
    medium: 'var(--readyapi-font-medium)',
    bold: 'var(--readyapi-font-bold)',
  },
  maxWidth: {
    'screen-xs': '480px',
    'screen-sm': '540px',
    'screen-md': '640px',
    'screen-lg': '800px',
  },
  brightness: {
    lifted: 'var(--readyapi-lifted-brightness)',
    backdrop: 'var(--readyapi-backdrop-brightness)',
  },
  spacing: {
    px: '1px',
  },
} as const

import type { ScalarState } from './types'

declare global {
  interface Window {
    __READYAPI__: ScalarState
  }
}

export const defaultStateFactory = (): ScalarState => ({})

/**
 * This allows us to access the server state in the front-end
 */
export const ssrState: ScalarState =
  typeof window !== 'undefined'
    ? window.__READYAPI__ ?? defaultStateFactory()
    : defaultStateFactory()

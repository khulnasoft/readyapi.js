import { type ReadyapiState } from './types'

declare global {
  interface Window {
    __SCALAR__: ReadyapiState
  }
}

export const defaultStateFactory = (): ReadyapiState => ({})

/**
 * This allows us to access the server state in the front-end
 */
export const ssrState: ReadyapiState =
  typeof window !== 'undefined'
    ? window.__SCALAR__ ?? defaultStateFactory()
    : defaultStateFactory()

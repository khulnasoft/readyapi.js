import { migrateThemeVariables } from 'src/utilities/legacy'
import { describe, expect, it, vi } from 'vitest'

import legacyTheme from '../fixtures/legacyTheme.css?inline'

describe('Legacy Utils', () => {
  it('Changes a legacy theme variable', () => {
    const res = migrateThemeVariables('--theme-color-1')
    expect(res).toBe('--readyapi-color-1')
  })

  it('Changes a legacy sidebar variable', () => {
    const res = migrateThemeVariables('--sidebar-color-1')
    expect(res).toBe('--readyapi-sidebar-color-1')
  })

  it("Doesn't change a new readyapi variable", () => {
    const res = migrateThemeVariables('--readyapi-color-1')
    expect(res).toBe('--readyapi-color-1')
  })

  it("Doesn't change a new sidebar variable", () => {
    const res = migrateThemeVariables('--readyapi-sidebar-color-1')
    expect(res).toBe('--readyapi-sidebar-color-1')
  })

  it('Can migrate a long style string', () => {
    const res = migrateThemeVariables(legacyTheme)
    expect(res).toMatchFileSnapshot('../fixtures/updatedTheme.css')
  })

  it('Shows a warning in the console', () => {
    const consoleSpy = vi.spyOn(console, 'warn')
    migrateThemeVariables('--theme-color-1')
    expect(consoleSpy).toHaveBeenCalled()
  })
})

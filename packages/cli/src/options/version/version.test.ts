import { describe, expect, it } from 'vitest'

import { version } from '../../../package.json'
import { ReadyapiCli } from '../../../tests/invoke-cli'

describe('--version', () => {
  it('outputs the version from package.json', () => {
    const [exitCode, logs] = ReadyapiCli().setCwd('../').invoke(['--version'])

    logs.should.contain(version)
    expect(exitCode).toBe(0)
  })
})

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ReadyapiSearchInput from './ReadyapiSearchInput.vue'

describe('ReadyapiButton', () => {
  it('renders properly', () => {
    const wrapper = mount(ReadyapiSearchInput)
    expect(wrapper.find('input')).toBeDefined()
  })
})

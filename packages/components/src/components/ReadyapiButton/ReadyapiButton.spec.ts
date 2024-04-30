import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ReadyapiButton from './ReadyapiButton.vue'

describe('ReadyapiButton', () => {
  it('renders properly', () => {
    const wrapper = mount(ReadyapiButton, {
      slots: {
        default: 'Hello Vitest',
      },
    })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

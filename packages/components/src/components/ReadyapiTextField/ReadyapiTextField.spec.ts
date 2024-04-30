import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ReadyapiTextField from './ReadyapiTextField.vue'

describe('ReadyapiIconButton', () => {
  it('renders an input', async () => {
    const wrapper = mount(ReadyapiTextField)

    // Wait for icon to load
    await flushPromises()

    expect(wrapper.find('input').exists()).toBeTruthy()
  })
})

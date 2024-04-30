import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import ReadyapiIconButton from './ReadyapiIconButton.vue'

describe('ReadyapiIconButton', () => {
  it('renders properly', async () => {
    const wrapper = mount(ReadyapiIconButton, {
      props: { label: 'Logo button', icon: 'Logo' },
    })

    // Wait for icon to load
    await vi.dynamicImportSettled()

    expect(wrapper.element.nodeName.toLowerCase()).toBe('button')
    expect(wrapper.find('svg').exists()).toBeTruthy()
  })
})

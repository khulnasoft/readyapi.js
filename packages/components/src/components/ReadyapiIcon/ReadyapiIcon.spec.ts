import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import ReadyapiIcon from './ReadyapiIcon.vue'

describe('ReadyapiButton', () => {
  it('renders properly', async () => {
    const wrapper = mount(ReadyapiIcon, { props: { icon: 'Logo' } })

    // Wait for icon to load
    await vi.dynamicImportSettled()

    expect(wrapper.element.nodeName.toLowerCase()).toBe('svg')
  })
})

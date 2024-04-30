import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ReadyapiSearchResultList from './ReadyapiSearchResultList.vue'

describe('ReadyapiButton', () => {
  it('renders properly', () => {
    const wrapper = mount(ReadyapiSearchResultList)
    expect(wrapper.find('input')).toBeDefined()
  })
})

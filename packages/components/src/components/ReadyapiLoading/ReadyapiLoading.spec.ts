import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ReadyapiLoading, { useLoadingState } from './ReadyapiLoading.vue'

describe('ReadyapiLoading', () => {
  it('renders properly', async () => {
    const loadingState = useLoadingState()
    loadingState.startLoading()

    const wrapper = mount(ReadyapiLoading, { props: { loadingState } })

    expect(wrapper.find('svg').exists()).toBeTruthy()
  })
})

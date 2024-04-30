import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import { useLoadingState } from '../ReadyapiLoading'
import ReadyapiSearchInput from './ReadyapiSearchInput.vue'

const meta = {
  component: ReadyapiSearchInput,
  tags: ['autodocs'],
  argTypes: {},
  render: (args) => ({
    components: { ReadyapiSearchInput },
    setup() {
      const model = ref('')
      return { args, model }
    },
    template: `<ReadyapiSearchInput v-bind="args" v-model="model" />`,
  }),
} satisfies Meta<typeof ReadyapiSearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const Loading: Story = {
  render: () => ({
    components: { ReadyapiSearchInput },
    setup() {
      const loadingState = useLoadingState()
      loadingState.startLoading()
      return { loadingState }
    },
    template: `<ReadyapiSearchInput modelValue="My search query" :loading="loadingState" />`,
  }),
}

import type { Meta, StoryObj } from '@storybook/vue3'

import { ReadyapiButton } from '../ReadyapiButton'
import ReadyapiLoading, { useLoadingState } from './ReadyapiLoading.vue'

/**
 * To use the loading, you must pass in a loadingState which can be created using the useLoadingState hook exported from this component
 */
const meta = {
  component: ReadyapiLoading,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'string', default: '24px' },
  },
  render: () => ({
    components: { ReadyapiButton, ReadyapiLoading },
    setup() {
      const loadingState = useLoadingState()
      loadingState.startLoading()
      return { loadingState }
    },
    template: `
      <div className="row gap-4 items-center">
        <ReadyapiLoading :loadingState="loadingState" />
        <ReadyapiButton @click="loadingState.validate()">Success</ReadyapiButton>
        <ReadyapiButton variant="danger" @click="loadingState.invalidate()">Error</ReadyapiButton>
        <ReadyapiButton variant="ghost" @click="loadingState.clear() && loadingState.startLoading()">Reset</ReadyapiButton>
      </div>
    `,
  }),
} satisfies Meta<typeof ReadyapiLoading>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {} as any

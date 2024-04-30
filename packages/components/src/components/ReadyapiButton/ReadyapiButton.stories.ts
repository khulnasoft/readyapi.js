import type { Meta, StoryObj } from '@storybook/vue3'

import { ReadyapiIcon } from '../ReadyapiIcon'
import { useLoadingState } from '../ReadyapiLoading'
import ReadyapiButton from './ReadyapiButton.vue'

/**
 * - Default slot must be text only as it becomes the [aria]-label
 * - If you are looking for an icon only button, use ReadyapiIconButton instead, its a helpful wrapper around this component
 */
const meta = {
  component: ReadyapiButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['md'] },
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'ghost', 'danger'],
    },
  },
  render: (args) => ({
    components: { ReadyapiButton },
    setup() {
      return { args }
    },
    template: `<ReadyapiButton v-bind="args">Button</ReadyapiButton>`,
  }),
} satisfies Meta<typeof ReadyapiButton>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const FullWidth: Story = { args: { fullWidth: true } }

export const Disabled: Story = { args: { disabled: true } }

export const Loading: Story = {
  render: () => ({
    components: { ReadyapiButton },
    setup() {
      const loadingState = useLoadingState()
      return { loadingState }
    },
    template: `<ReadyapiButton @click="loadingState.startLoading()" :loading="loadingState">Click me</ReadyapiButton>`,
  }),
}

export const LoadingFullWidth: Story = {
  render: () => ({
    components: { ReadyapiButton },
    setup() {
      const loadingState = useLoadingState()
      return { loadingState }
    },
    template: `<ReadyapiButton @click="loadingState.startLoading()" :loading="loadingState" fullWidth>Click me</ReadyapiButton>`,
  }),
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { ReadyapiButton, ReadyapiIcon },
    setup() {
      return { args }
    },
    template: `
      <ReadyapiButton :variant="args.variant">
        <template #icon>
          <ReadyapiIcon icon="Logo"/>
        </template>
        Button
      </ReadyapiButton>
    `,
  }),
}

export const CustomClasses: Story = {
  render: () => ({
    components: { ReadyapiButton },
    template: `<ReadyapiButton class="items-start font-normal px-9 py-1">I am a weird button</ReadyapiButton>`,
  }),
}

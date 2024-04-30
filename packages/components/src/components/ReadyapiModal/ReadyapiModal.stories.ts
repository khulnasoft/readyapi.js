import type { Meta, StoryObj } from '@storybook/vue3'

import { ReadyapiButton } from '../ReadyapiButton'
import ReadyapiModal, { useModal } from './ReadyapiModal.vue'

/**
 * Make sure to import the useModal hook from the ReadyapiModal component to open/close it
 */
const meta = {
  component: ReadyapiModal,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['history', 'search'] },
  },
} satisfies Meta<typeof ReadyapiModal>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {} as any,
  render: (args) => ({
    components: { ReadyapiButton, ReadyapiModal },
    setup() {
      const modalState = useModal()
      return { args, modalState }
    },
    template: `
      <ReadyapiModal
        :state="modalState"
        v-bind="args"
        title="Example modal">
        <div class="col gap-4 px-4">
          <div>You can put some nice content here, or even ask a nice question</div>
          <div class="col md:row gap-1">
            <ReadyapiButton variant="ghost" @click="modalState.hide()" fullWidth>Cancel</ReadyapiButton>
            <ReadyapiButton @click="modalState.hide()" fullWidth>Go ahead</ReadyapiButton>
          </div>
        </div>
      </ReadyapiModal>
      <ReadyapiButton @click="modalState.show()">Click me</ReadyapiButton>
    `,
  }),
}

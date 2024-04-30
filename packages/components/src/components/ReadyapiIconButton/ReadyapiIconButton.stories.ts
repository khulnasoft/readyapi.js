import type { Meta, StoryObj } from '@storybook/vue3'

import { ICONS } from '../ReadyapiIcon/icons/icons'
import ReadyapiIconButton from './ReadyapiIconButton.vue'

const meta = {
  component: ReadyapiIconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: ICONS },
    size: { control: 'select', options: ['xs', 'sm', 'md'] },
    label: { control: 'string' },
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'ghost', 'danger'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A helper wrapper around the icon only ReadyapiButton',
      },
    },
  },
} satisfies Meta<typeof ReadyapiIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: { icon: 'Logo', label: 'Logo button' },
}

export const Disabled: Story = {
  args: { icon: 'Logo', label: 'Logo button', disabled: true },
}

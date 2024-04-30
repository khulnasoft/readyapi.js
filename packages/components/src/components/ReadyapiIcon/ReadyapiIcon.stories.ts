import type { Meta, StoryObj } from '@storybook/vue3'

import IconGrid from './IconList.vue'
import ReadyapiIcon from './ReadyapiIcon.vue'
import { ICONS } from './icons/icons'

const meta = {
  component: ReadyapiIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: ICONS },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This component will expand to fit its parent so make sure to constrain it, you can see how its done with tailwind here in the show code block.',
      },
    },
  },
  render: (args) => ({
    components: { ReadyapiIcon },
    setup() {
      return { args }
    },
    template: `<ReadyapiIcon size="lg" v-bind="args"/>`,
  }),
} satisfies Meta<typeof ReadyapiIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: { icon: 'Logo' },
}

export const AllSizes: Story = {
  args: { icon: 'CodeFolder' },
  render: (args) => ({
    components: { ReadyapiIcon },
    setup() {
      return { args }
    },
    template: `
<div class="flex items-center gap-2 text-fore-2">
  <ReadyapiIcon size="xs" v-bind="args"/>
  <ReadyapiIcon size="sm" v-bind="args"/>
  <ReadyapiIcon size="md" v-bind="args"/>
  <ReadyapiIcon size="lg" v-bind="args"/>
  <ReadyapiIcon size="xl" v-bind="args"/>
  <ReadyapiIcon size="2xl" v-bind="args"/>
  <ReadyapiIcon size="3xl" v-bind="args"/>
</div>
    `,
  }),
}

export const AllIcons: StoryObj = {
  render: () => ({
    components: { IconGrid },
    setup() {
      return { icons: ICONS }
    },
    template: `<IconGrid :icons="icons" />`,
  }),
}

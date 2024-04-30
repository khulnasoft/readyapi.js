import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import ReadyapiTextField from './ReadyapiTextField.vue'

const meta = {
  component: ReadyapiTextField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'string', defaultValue: 'Readyapi Text Field' },
  },
  render: (args) => ({
    components: { ReadyapiTextField },
    setup() {
      const model = ref('')
      return { args, model }
    },
    template: `<ReadyapiTextField :modelValue="model" @update:modelValue="newValue => model = newValue" v-bind="args"/>`,
  }),
} satisfies Meta<typeof ReadyapiTextField>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    modelValue: '',
    label: 'Readyapi Text Field',
    placeholder: 'This is a place where you can type out anything',
  },
}

export const Error: Story = {
  args: {
    modelValue: '',
    label: 'Readyapi Text Field',
    placeholder: 'This is a place where you can type out anything',
    helperText: 'There was some sort of error with the field',
    error: true,
  },
}

export const MultiLine: Story = {
  args: {
    modelValue: '',
    placeholder: 'This is a place where you can type out anything',
    isMultiline: true,
    label: 'Readyapi Text Field',
  },
}

export const NoLabel: Story = {
  args: {
    modelValue: '',
    placeholder: 'This is a place where you can type out anything',
  },
}

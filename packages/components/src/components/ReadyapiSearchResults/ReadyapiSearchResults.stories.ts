import type { Meta, StoryObj } from '@storybook/vue3'

import ReadyapiSearchResultItem from './ReadyapiSearchResultItem.vue'
import ReadyapiSearchResultList from './ReadyapiSearchResultList.vue'

const meta = {
  component: ReadyapiSearchResultList,
  tags: ['autodocs'],
  argTypes: {},
  render: (args) => ({
    components: { ReadyapiSearchResultList, ReadyapiSearchResultItem },
    setup() {
      return { args }
    },
    template: `
<ReadyapiSearchResultList v-bind="args">
  <ReadyapiSearchResultItem icon="Search">
    Result 1
    <template #description>This is a description</template>
    <template #addon>Addon</template>
  </ReadyapiSearchResultItem>
  <ReadyapiSearchResultItem icon="Search">
    Result 2 - Extra long result title that might need to be truncated
    <template #description>This is a really long description that might need to be truncated</template>
    <template #addon>Addon</template>
  </ReadyapiSearchResultItem>
  <ReadyapiSearchResultItem icon="Search">
    Result 3
    <template #description>This is a description</template>
    <template #addon>Addon</template>
  </ReadyapiSearchResultItem>
</ReadyapiSearchResultList>`,
  }),
} satisfies Meta<typeof ReadyapiSearchResultList>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const NoResults: Story = {
  render: () => ({
    components: { ReadyapiSearchResultList },
    template: `
<ReadyapiSearchResultList noResults>
  <template #query>search query</template>
</ReadyapiSearchResultList>`,
  }),
}

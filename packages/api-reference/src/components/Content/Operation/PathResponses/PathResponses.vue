<script lang="ts" setup>
import { ReadyapiCodeBlock, ReadyapiIcon } from '@ready-api.khulnasoft.components'
import type { TransformedOperation } from '@readyapi/oas-utils'
import { computed, ref } from 'vue'

import { useClipboard } from '../../../../hooks'
import {
  Card,
  CardContent,
  CardFooter,
  CardTab,
  CardTabHeader,
} from '../../../Card'
import { MarkdownRenderer } from '../../../MarkdownRenderer'
import ExamplePicker from '../ExamplePicker.vue'
import ExampleResponse from './ExampleResponse.vue'

// import Headers from './Headers.vue'

/**
 * TODO: copyToClipboard isn’t using the right content if there are multiple examples
 */

const props = defineProps<{ operation: TransformedOperation }>()

const { copyToClipboard } = useClipboard()

const selectedExampleKey = ref<string>()

// Bring the status codes in the right order.
const orderedStatusCodes = computed(() => {
  return Object.keys(props?.operation?.information?.responses ?? {}).sort(
    (x) => {
      if (x === 'default') {
        return -1
      }

      return 0
    },
  )
})

const hasMultipleExamples = computed<boolean>(
  () => !!currentJsonResponse.value.examples,
)

// Keep track of the current selected tab
const selectedResponseIndex = ref<number>(0)

// Return the whole response object
const currentResponse = computed(() => {
  const currentStatusCode =
    orderedStatusCodes.value[selectedResponseIndex.value]

  return props.operation.information?.responses?.[currentStatusCode]
})

const currentJsonResponse = computed(
  () =>
    // OpenAPI 3.x
    currentResponse.value?.content?.['application/json'] ??
    currentResponse.value?.content?.['application/json; charset=utf-8'] ??
    currentResponse.value?.content?.['application/problem+json'] ??
    currentResponse.value?.content?.['application/vnd.api+json'] ??
    // Swagger 2.0
    currentResponse.value,
)
const currentResponseWithExample = computed(() => ({
  ...currentJsonResponse.value,
  example:
    hasMultipleExamples.value && selectedExampleKey.value
      ? currentJsonResponse.value.examples[selectedExampleKey.value].value ??
        currentJsonResponse.value.examples[selectedExampleKey.value]
      : currentJsonResponse.value.example,
}))

const changeTab = (index: number) => {
  selectedResponseIndex.value = index
}

const showSchema = ref(false)
</script>
<template>
  <Card v-if="orderedStatusCodes.length">
    <CardTabHeader
      muted
      x="as"
      @change="changeTab">
      <CardTab
        v-for="statusCode in orderedStatusCodes"
        :key="statusCode">
        {{ statusCode }}
      </CardTab>

      <template #actions>
        <button
          v-if="currentJsonResponse?.example"
          class="code-copy"
          type="button"
          @click="() => copyToClipboard(currentJsonResponse?.example)">
          <ReadyapiIcon
            icon="Clipboard"
            width="10px"
            x="asd" />
        </button>
        <label
          v-if="currentJsonResponse?.schema"
          class="readyapi-card-checkbox">
          Show Schema
          <input
            v-model="showSchema"
            class="readyapi-card-checkbox-input"
            type="checkbox" />
          <span class="readyapi-card-checkbox-checkmark"></span>
        </label>
      </template>
    </CardTabHeader>
    <div class="readyapi-card-container custom-scroll">
      <!-- Commenting out until we re-organize cause of height issues -->
      <!-- <CardContent
        v-if="currentResponse.headers"
        muted>
        <Headers :headers="currentResponse.headers" />
      </CardContent> -->
      <CardContent muted>
        <template v-if="currentJsonResponse?.schema">
          <ReadyapiCodeBlock
            v-if="showSchema && currentResponseWithExample"
            :content="currentResponseWithExample"
            lang="json" />
          <ExampleResponse
            v-else
            :response="currentResponseWithExample" />
        </template>
        <!-- Without Schema: Don’t show tabs -->
        <ExampleResponse
          v-else
          :response="currentResponseWithExample" />
      </CardContent>
    </div>
    <CardFooter
      v-if="currentResponse?.description || hasMultipleExamples"
      class="response-card-footer"
      muted>
      <ExamplePicker
        v-if="hasMultipleExamples"
        class="response-example-selector"
        :examples="currentJsonResponse?.examples"
        @update:modelValue="(value) => (selectedExampleKey = value)" />
      <div
        v-else-if="currentResponse?.description"
        class="response-description">
        <MarkdownRenderer
          class="markdown"
          :value="currentResponse.description" />
      </div>
    </CardFooter>
  </Card>
</template>

<style scoped>
.markdown :deep(*) {
  margin: 0;
}
.code-copy {
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: var(--readyapi-color-3);
  border: none;
  padding: 0;
  margin-right: 12px;
}
.code-copy:hover {
  color: var(--readyapi-color-1);
}
.code-copy svg {
  width: 13px;
  height: 13px;
}
.response-card-footer {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 10px 12px;
  gap: 8px;
  border-top: 1px solid var(--readyapi-border-color);
}
.response-example-selector {
  align-self: start;
  margin: -4px;
}
.response-description {
  font-weight: var(--readyapi-semibold);
  font-size: var(--readyapi-micro);
  color: var(--readyapi-color--1);

  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.schema-type {
  font-size: var(--readyapi-micro);
  color: var(--readyapi-color-2);
  font-weight: var(--readyapi-semibold);
  background: var(--readyapi-background-3);
  padding: 2px 4px;
  border-radius: 4px;
  margin-right: 4px;
}
.schema-example {
  font-size: var(--readyapi-micro);
  color: var(--readyapi-color-2);
  font-weight: var(--readyapi-semibold);
}

.example-response-tab {
  display: block;
  margin: 6px;
}
.readyapi-card-container {
  flex: 1;
  background: var(--readyapi-background-2);
}
.readyapi-card-container :deep(.cm-scroller) {
  overflow-y: hidden;
}

.readyapi-card-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 17px;
  cursor: pointer;
  user-select: none;
  font-weight: var(--readyapi-semibold);
  font-size: var(--readyapi-mini);
  color: var(--readyapi-color-2);
  width: fit-content;
  white-space: nowrap;
  margin-right: 9px;
  gap: 6px;
}
.readyapi-card-checkbox:hover {
  color: var(--readyapi-color--1);
}
.readyapi-card-checkbox .readyapi-card-checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.readyapi-card-checkbox-checkmark {
  height: 17px;
  width: 17px;
  border-radius: var(--readyapi-radius);
  background-color: transparent;
  background-color: var(--readyapi-background-3);
  box-shadow: inset 0 0 0 1px var(--readyapi-border-color);
}
.readyapi-card-checkbox:has(.readyapi-card-checkbox-input:checked) {
  color: var(--readyapi-color-1);
}

.readyapi-card-checkbox
  .readyapi-card-checkbox-input:checked
  ~ .readyapi-card-checkbox-checkmark {
  background-color: var(--readyapi-button-1);
  box-shadow: none;
}

.readyapi-card-checkbox-checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.readyapi-card-checkbox
  .readyapi-card-checkbox-input:checked
  ~ .readyapi-card-checkbox-checkmark:after {
  display: block;
}

.readyapi-card-checkbox .readyapi-card-checkbox-checkmark:after {
  right: 6px;
  top: 36.5%;
  width: 5px;
  height: 9px;
  border: solid 1px var(--readyapi-button-1-color);
  border-width: 0 1.5px 1.5px 0;
  transform: rotate(45deg);
}
</style>

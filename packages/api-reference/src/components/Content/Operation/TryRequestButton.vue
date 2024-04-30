<script setup lang="ts">
import { HttpMethod } from '@readyapi/api-client'
import { ReadyapiIcon } from '@readyapi/components'
import { type TransformedOperation } from '@readyapi/oas-utils'
import { inject } from 'vue'

import { GLOBAL_SECURITY_SYMBOL, openClientFor } from '../../../helpers'

defineProps<{
  operation: TransformedOperation
}>()

const getGlobalSecurity = inject(GLOBAL_SECURITY_SYMBOL)
</script>
<template>
  <HttpMethod
    as="button"
    class="show-api-client-button"
    :method="operation.httpVerb"
    type="button"
    @click.stop="openClientFor(operation, getGlobalSecurity?.())">
    <ReadyapiIcon icon="PaperAirplane" />
    <span>Test Request</span>
  </HttpMethod>
</template>
<style scoped>
.show-api-client-button {
  appearance: none;
  outline: none;
  border: none;
  padding: 4px 6px;
  white-space: nowrap;
  border-radius: var(--readyapi-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: var(--readyapi-semibold);
  font-size: var(--readyapi-mini);
  color: var(--readyapi-background-2);
  font-family: var(--readyapi-font);
  background: var(--readyapi-button-1);
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
.show-api-client-button span,
.show-api-client-button svg {
  color: var(--readyapi-button-1-color);
  z-index: 1;
}
.show-api-client-button:hover {
  background: var(--readyapi-button-1-hover);
}
.show-api-client-button svg {
  height: 12px;
  width: auto;
  margin-right: 9px;
}
</style>

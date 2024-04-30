<script setup lang="ts">
import type { Parameters } from '@readyapi/oas-utils'

import { SchemaProperty } from '../Schema'

withDefaults(defineProps<{ parameter: Parameters; showChildren?: boolean }>(), {
  showChildren: false,
})
</script>
<template>
  <li class="parameter-item">
    <div class="parameter-item-container">
      <SchemaProperty
        compact
        :description="parameter.description"
        :level="0"
        :name="parameter.name"
        :noncollapsible="showChildren"
        :required="parameter.required"
        :value="parameter.schema" />
    </div>
  </li>
</template>

<style scoped>
.parameter-item {
  border-top: 1px solid var(--readyapi-border-color);
}
.parameter-item:last-of-type .parameter-schema {
  padding-bottom: 0;
}
.parameter-item-container {
  padding: 0;
}

.parameter-item-name {
  font-weight: 500;
  margin-right: 6px;
  font-family: var(--readyapi-font-code);
  font-size: var(--readyapi-mini);
  color: var(--readyapi-color-1);
}

.parameter-item-type,
.parameter-item-required-optional {
  color: var(--readyapi-color-3);
  font-weight: var(--readyapi-semibold);
  margin-right: 6px;
  position: relative;
}

.parameter-item--required {
  text-transform: uppercase;
  font-size: var(--readyapi-micro);
  font-weight: var(--readyapi-semibold);
  color: var(--readyapi-color-orange);
}

.parameter-item-description {
  margin-top: 3px !important;
  font-size: var(--readyapi-small);
  color: var(--readyapi-color-2);
  line-height: 1.4;
}

.parameter-item-description :deep(p) {
  margin-top: 4px;
  font-size: var(--readyapi-small);
  color: var(--readyapi-color-2);
  line-height: 1.4;
}

.parameter-schema {
  padding-bottom: 9px;
  margin-top: 3px;
}
</style>

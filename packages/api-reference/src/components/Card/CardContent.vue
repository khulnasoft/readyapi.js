<script setup lang="ts">
import { type CardContentProps } from './types'

defineProps<CardContentProps>()
</script>
<template>
  <div
    class="readyapi-card-content"
    :class="{
      'readyapi-card--muted': muted,
      'readyapi-card--contrast': contrast,
      'readyapi-card--frameless': frameless,
      'readyapi-card--transparent': transparent,
      'readyapi-card--borderless': borderless,
    }">
    <slot />
  </div>
</template>
<style scoped>
.readyapi-card-content {
  overflow: auto;
  border-bottom: 1px solid var(--readyapi-border-color);
}
.readyapi-card-content :deep(.simple-table .simple-header) {
  display: none;
}
.readyapi-card-content:last-of-type,
.readyapi-card-content.readyapi-card--borderless {
  border-bottom: none;
}
.readyapi-card--muted {
  background: var(--readyapi-background-2);
}
.readyapi-card--contrast {
  background: var(--readyapi-background-3);
}
.readyapi-card--frameless {
  padding: 0;
}
.readyapi-card--transparent {
  background: var(--readyapi-background-1);
}
</style>

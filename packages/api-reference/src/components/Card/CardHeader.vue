<script lang="ts" setup>
import CardContent from './CardContent.vue'
import { type CardContentProps } from './types'

// eslint-disable-next-line vue/no-unused-properties
const props = defineProps<CardContentProps>()
</script>
<template>
  <CardContent
    v-bind="props"
    class="readyapi-card-header">
    <div class="readyapi-card-header-slots">
      <div class="readyapi-card-header-slot readyapi-card-header-title">
        <slot />
      </div>
      <div class="readyapi-card-header-slot readyapi-card-header-actions">
        <slot name="actions" />
      </div>
    </div>
  </CardContent>
</template>
<style scoped>
.readyapi-card-header {
  font-weight: var(--readyapi-semibold);
  font-size: var(--readyapi-mini);
  color: var(--readyapi-color-3);
  padding: 9px 0 9px 12px;
  flex-shrink: 0;
}
.readyapi-card-header.readyapi-card--borderless
  + :deep(.readyapi-card-content) {
  margin-top: -9px;
}
.readyapi-card-header-slots {
  display: flex;
  justify-content: space-between;
  line-height: 1.35;
}

.readyapi-card-header-title {
  text-transform: uppercase;
  flex: 1;
  min-width: 0;
  text-overflow: ellipsis;
  overflow: hidden;
}

.readyapi-card-header-actions {
  display: flex;
}
</style>

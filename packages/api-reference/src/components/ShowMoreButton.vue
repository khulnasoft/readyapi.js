<script setup lang="ts">
import { ReadyapiIcon } from '@ready-api.khulnasoft.components'

import { useSidebar } from '../hooks'

defineProps<{
  id: string
}>()

const { setCollapsedSidebarItem } = useSidebar()
</script>

<template>
  <button
    class="show-more"
    type="button"
    @click="setCollapsedSidebarItem(id, true)">
    Show More
    <ReadyapiIcon
      class="show-more-icon"
      icon="ChevronDown" />
  </button>
</template>

<style scoped>
.show-more {
  background: var(--readyapi-background-1);
  appearance: none;
  border: none;
  border: 1px solid var(--readyapi-border-color);
  margin: auto;
  padding: 8px 12px;
  border-radius: 30px;
  color: var(--readyapi-color-1);
  font-weight: var(--readyapi-semibold);
  font-size: var(--readyapi-small);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -48px;
  margin-bottom: 48px;
  position: relative;
}
.show-more:hover {
  color: var(--readyapi-color-2);
  cursor: pointer;
}
.show-more-icon {
  width: 14px;
  height: 14px;
  margin-left: 3px;
}
.show-more:active {
  box-shadow: 0 0 0 1px var(--readyapi-border-color);
}
@container narrow-references-container (max-width: 900px) {
  .show-more {
    margin-top: -25px;
    margin-bottom: 25px;
  }
}
@media (max-width: 1165px) {
  .show-more {
    margin-top: -24px;
    margin-bottom: 24px;
  }
}
</style>

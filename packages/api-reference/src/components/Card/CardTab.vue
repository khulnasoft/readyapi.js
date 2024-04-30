<script lang="ts" setup>
import { Tab } from '@headlessui/vue'
</script>
<template>
  <Tab
    v-slot="{ selected }"
    as="template">
    <button
      :class="{ 'tab': true, 'tab-selected': selected }"
      type="button">
      <span>
        <slot />
      </span>
    </button>
  </Tab>
</template>
<style scoped>
.tab {
  background: none;
  border: none;
  font-size: var(--readyapi-mini);
  font-family: var(--readyapi-font);
  color: var(--readyapi-color-2);
  font-weight: var(--readyapi-semibold);
  line-height: calc(var(--readyapi-mini) + 2px);
  white-space: nowrap;
  cursor: pointer;
  padding: 0;
  margin-right: 3px;
  text-transform: uppercase;
  position: relative;
  line-height: 1.35;
}
.tab:before {
  content: '';
  position: absolute;
  z-index: 0;
  left: -6px;
  top: -6px;
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  border-radius: var(--readyapi-radius);
  background: var(--readyapi-background-3);
  opacity: 0;
}
.tab:hover:before {
  opacity: 1;
}
.tab span {
  z-index: 1;
  position: relative;
}
.tab-selected {
  color: var(--readyapi-color-1);
  text-decoration: underline;
  text-underline-offset: var(--readyapi-micro);
}
</style>

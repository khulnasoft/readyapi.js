<script setup lang="ts">
import { ref } from 'vue'

const el = ref<HTMLButtonElement>()

defineExpose({ el })
</script>
<template>
  <button
    ref="el"
    class="card-form-button"
    type="button">
    <slot />
  </button>
</template>
<style scoped>
.card-form-button {
  display: flex;
  align-items: center;
  position: relative;
  background: transparent;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-color: inherit;
  padding: 9px;
  outline: none;
  white-space: nowrap;
  font-family: var(--readyapi-font);
  font-size: var(--readyapi-micro);
  font-weight: var(--readyapi-semibold);
  color: var(--readyapi-color-1);
}
.card-form-button:hover {
  background: var(--readyapi-background-2);
  border-color: var(--readyapi-border-color);
}
</style>

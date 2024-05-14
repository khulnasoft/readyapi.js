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
  padding: 9px;
  outline: none;
  white-space: nowrap;
  font-family: var(--readyapi-font);
  font-size: var(--readyapi-micro);
  font-weight: var(--readyapi-semibold);
  color: var(--readyapi-color-2);
}
.card-form-button:hover {
  color: var(--readyapi-color-1);
}
</style>

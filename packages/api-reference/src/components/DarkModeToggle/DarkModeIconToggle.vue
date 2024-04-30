<script lang="ts" setup>
import { ReadyapiIcon } from '@readyapi/components'

import ScreenReader from '../ScreenReader.vue'

defineProps<{
  isDarkMode: boolean
}>()

defineEmits<{
  (e: 'toggleDarkMode'): void
}>()
</script>
<template>
  <button
    class="darklight"
    type="button"
    @click="$emit('toggleDarkMode')">
    <ReadyapiIcon :icon="isDarkMode ? 'DarkMode' : 'LightMode'" />
    <ScreenReader>
      Switch to {{ isDarkMode ? 'Light' : 'Dark' }} Mode
    </ScreenReader>
  </button>
</template>
<style scoped>
.darklight {
  color: var(--readyapi-sidebar-color-2, var(--readyapi-color-2));
  display: flex;
  align-items: center;

  height: 24px;
  width: 24px;

  padding: 4px;
}
.darklight:hover {
  cursor: pointer;
  color: var(--readyapi-sidebar-color-1, var(--readyapi-color-1));
}
</style>

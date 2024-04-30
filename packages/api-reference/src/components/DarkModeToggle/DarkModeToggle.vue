<script lang="ts" setup>
import { ReadyapiIcon } from '@ready-api.khulnasoft.components'

defineProps<{
  isDarkMode: boolean
}>()

defineEmits<{
  (e: 'toggleDarkMode'): void
}>()
</script>
<template>
  <div class="darklight-reference">
    <button
      class="darklight"
      type="button"
      @click="$emit('toggleDarkMode')">
      <ReadyapiIcon icon="LightDarkModeToggle" />
      <template v-if="isDarkMode">
        <span>Light Mode</span>
      </template>
      <template v-else>
        <span>Dark Mode</span>
      </template>
    </button>
    <a
      class="darklight-reference-promo"
      href="https://www.ready-api.khulnasoft.com"
      target="_blank">
      Powered by ready-api.khulnasoft.com
    </a>
  </div>
</template>
<style scoped>
.darklight {
  font-family: var(--readyapi-font);
  border: none;
  border-top: 1px solid
    var(--readyapi-sidebar-border-color, var(--readyapi-border-color));
  color: var(--readyapi-sidebar-color-2, var(--readyapi-color-2));

  font-size: var(--readyapi-mini);
  font-weight: var(--readyapi-semibold);
  appearance: none;
  background: transparent;
  outline: none;
  padding: 18px 24px 0;
  display: flex;

  align-items: center;
  text-indent: 9px;
  width: 100%;
}
.darklight-reference {
  width: 100%;
  margin-top: auto;
}
.darklight:hover {
  cursor: pointer;
  color: var(--readyapi-sidebar-color-1, var(--readyapi-color-1));
}

.darklight svg {
  stroke: currentColor;
  height: 12px;
  width: 12px;
}
.darklight-reference-promo {
  padding: 6px 24px 12px;
  display: flex;
  align-items: center;
  font-size: var(--readyapi-mini);
  text-decoration: none;
  color: var(--readyapi-sidebar-color-2, var(--readyapi-color-2));
}
.darklight-reference-promo:hover {
  text-decoration: underline;
}
</style>

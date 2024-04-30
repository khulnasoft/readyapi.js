<script lang="ts" setup>
defineProps<{ href: string }>()
</script>
<template>
  <a
    :href="href"
    rel="noopener noreferrer"
    target="_blank">
    <slot />
  </a>
</template>
<style scoped>
a {
  color: var(--readyapi-color-3);
  text-decoration: underline;
  text-decoration-color: var(--readyapi-border-color);
  text-underline-offset: 2px;
  cursor: help;
}
</style>

<script lang="ts" setup>
import SimpleCell from './SimpleCell.vue'
</script>
<template>
  <SimpleCell
    as="th"
    class="simple-header">
    <slot />
  </SimpleCell>
</template>
<style scoped>
.simple-header {
  color: var(--readyapi-color-3);
  font-weight: var(--readyapi-semibold);
  text-transform: uppercase;
}
</style>

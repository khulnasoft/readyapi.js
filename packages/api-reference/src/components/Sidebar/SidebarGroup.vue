<script setup lang="ts">
defineProps<{
  level: number
}>()
</script>
<template>
  <ul
    class="sidebar-group sidebar-indent-nested"
    :style="{ '--readyapi-sidebar-level': level }">
    <slot />
  </ul>
</template>
<style scoped>
.sidebar-group {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* We indent each level of nesting further */
.sidebar-indent-nested :deep(.sidebar-heading) {
  /* prettier-ignore */
  padding-left: calc((var(--readyapi-sidebar-level) * var(--readyapi-sidebar-indent-base)) + 12px) !important;
}

/* Collapse/expand icons must also be offset */
.sidebar-indent-nested :deep(.sidebar-heading .toggle-nested-icon) {
  /* prettier-ignore */
  left: calc((var(--readyapi-sidebar-level) * var(--readyapi-sidebar-indent-base)) + 2px) !important;
}

/* Change font colors and weights for nested items */
/* Needs :where to lower specificity */
:where(.sidebar-indent-nested) :deep(.sidebar-heading) {
  color: var(--readyapi-sidebar-color-1, var(--readyapi-color-1));
}
:where(.sidebar-indent-nested)
  :deep(:where(.sidebar-indent-nested) .sidebar-heading) {
  color: var(--readyapi-sidebar-color-2, var(--readyapi-color-2));
}
</style>

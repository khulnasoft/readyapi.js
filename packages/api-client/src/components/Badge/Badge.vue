<template>
  <div class="badge">
    <slot />
  </div>
</template>

<style scoped>
.badge {
  color: var(--readyapi-color-2);
  font-size: var(--readyapi-micro);
  background: var(--readyapi-background-2);
  padding: 2px 6px;
  border-radius: 12px;
  font-weight: var(--readyapi-semibold);
  display: inline-block;
  text-transform: uppercase;
}
</style>

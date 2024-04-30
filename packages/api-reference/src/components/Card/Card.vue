<template>
  <div class="readyapi-card">
    <slot />
  </div>
</template>
<style scoped>
.readyapi-card {
  all: unset;
  font-family: var(--readyapi-font);
  border-radius: var(--readyapi-radius-lg);
  overflow: hidden;
  border: 1px solid var(--readyapi-border-color);
  background: var(--readyapi-background-2);
  display: flex;
  flex-direction: column;
  max-height: calc(
    ((var(--full-height) - var(--refs-header-height)) - 60px) / 2
  );
  position: relative;
}

.readyapi-card-sticky {
  position: sticky;
  top: calc(var(--refs-header-height) + 24px);
}
</style>

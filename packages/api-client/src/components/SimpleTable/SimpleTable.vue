<template>
  <table class="simple-table">
    <slot />
  </table>
</template>

<style scoped>
.simple-table {
  all: unset;
  display: table;
  width: 100%;
  border-spacing: 0;
  box-shadow: 0 0 0 1px var(--readyapi-border-color);
  border-radius: var(--readyapi-radius);
}
</style>

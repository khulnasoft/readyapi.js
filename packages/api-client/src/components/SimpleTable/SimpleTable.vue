<template>
  <div class="simple-table-container">
    <table class="simple-table">
      <slot />
    </table>
  </div>
</template>

<style scoped>
.simple-table {
  all: unset;
  display: table;
  width: 100%;
}
.simple-table-container {
  border: 1px solid var(--readyapi-border-color);
  border-radius: 0 0 var(--readyapi-radius) var(--readyapi-radius);
  width: 100%;
  overflow: auto;
}
</style>

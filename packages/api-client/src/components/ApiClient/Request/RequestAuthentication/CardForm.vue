<template>
  <form class="card-form">
    <slot />
  </form>
</template>
<style scoped>
.card-form {
  color: var(--readyapi-color-1);
  width: 100%;
  border: 1px solid var(--readyapi-border-color);
  border-radius: var(--readyapi-radius);
}
</style>

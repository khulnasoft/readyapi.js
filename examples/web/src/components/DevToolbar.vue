<script setup lang="ts">
import { ResetStyles } from '@readyapi/themes'
import { ref, watch } from 'vue'

const docStyle = document.documentElement.style

// Toggle the toolbar visibility
const showToolbar = ref(true)
watch(
  showToolbar,
  (show) => {
    if (show) {
      docStyle.setProperty('--readyapi-header-height', '40px')
    } else {
      docStyle.removeProperty('--readyapi-header-height')
    }
  },
  { immediate: true },
)
</script>
<template>
  <ResetStyles v-slot="{ styles }">
    <header
      v-if="showToolbar"
      class="dev-header"
      :class="styles">
      <div class="dev-title">
        Dev Toolbar
        <a
          class="dev-home-link"
          href="/"
          title="Back to homepage">
          &larr; Go back
        </a>
      </div>
      <div class="dev-options">
        <slot />
        <button
          class="dev-hide-toolbar"
          type="button"
          @click="showToolbar = false">
          Hide
        </button>
      </div>
    </header>
    <button
      v-else
      class="dev-show-toolbar"
      type="button"
      @click="showToolbar = true">
      Dev Toolbar
    </button>
  </ResetStyles>
</template>
<style scoped>
.dev-header {
  display: flex;
  justify-content: space-between;
  color: var(--readyapi-color-1);

  width: 100%;
  height: var(--readyapi-header-height);

  background: var(--readyapi-background-1);
  border-bottom: 1px solid var(--readyapi-border-color);
}
.dev-title {
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0px 8px;

  min-width: 0;
  flex: 1;

  white-space: nowrap;
  overflow: hidden;
}
.dev-home-link {
  font-weight: medium;
  font-size: smaller;
  text-decoration: none;

  padding: 4px 6px;
  border: 1px solid var(--readyapi-border-color);
  color: var(--readyapi-color-1);
  background: var(--readyapi-background-2);
  border-radius: var(--readyapi-radius);
}
.dev-home-link:hover {
  background: var(--readyapi-background-3);
}

.dev-options {
  display: flex;
  font-size: var(--readyapi-small);
}

.dev-options > :deep(*) {
  padding: 0px 12px;
  border-left: 1px solid var(--readyapi-border-color);
  display: flex;
  align-items: center;
  gap: 4px;
}

.dev-show-toolbar {
  position: fixed;
  z-index: 1000;
  top: 8px;
  right: 8px;

  padding: 4px 8px;

  font-size: var(--readyapi-small);
  font-weight: 500;

  color: var(--readyapi-color-1);
  background: var(--readyapi-background-1);
  border: 1px solid var(--readyapi-border-color);
  border-radius: var(--readyapi-radius);
  box-shadow: var(--readyapi-shadow-1);
}

.dev-show-toolbar:hover,
.dev-hide-toolbar:hover {
  background: var(--readyapi-background-2);
}
</style>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    defaultOpen?: boolean
  }>(),
  {
    defaultOpen: true,
  },
)

const collapseButton = ref<typeof DisclosureButton | null>(null)
const disclosureButton = ref<typeof Disclosure | null>(null)

const openCopy = ref(props.defaultOpen)

watch(
  () => props.defaultOpen,
  (newValue, oldValue) => {
    if (newValue !== oldValue && newValue !== openCopy.value) {
      collapseButton.value?.el.click()
    }
  },
)
</script>

<template>
  <Disclosure
    ref="disclosureButton"
    v-slot="{ open }"
    :defaultOpen="defaultOpen">
    <div
      class="readyapi-api-client__item"
      :class="{ 'readyapi-api-client__item--open': open }">
      <DisclosureButton
        ref="collapseButton"
        class="readyapi-api-client__toggle"
        @click="openCopy = !openCopy">
        <svg
          class="readyapi-api-client__toggle__icon"
          height="10"
          viewBox="0 0 5 10"
          width="5"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 10l5-5-5-5z"
            fill="currentColor"
            fill-rule="nonzero" />
        </svg>
        <span class="readyapi-api-client__item__title">
          {{ title }}
        </span>
        <div
          v-if="$slots.options && open"
          class="readyapi-api-client__item__options">
          <slot name="options" />
        </div>
      </DisclosureButton>
      <DisclosurePanel>
        <div class="readyapi-api-client__item__content">
          <slot />
        </div>
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>

<style>
.readyapi-api-client__item {
  border-radius: var(--readyapi-radius);
  margin-bottom: 6px;
  position: relative;
}

.readyapi-api-client__item button {
  background-color: transparent;
  text-align: left;
}
.readyapi-api-client__item:hover {
  cursor: pointer;
}
.readyapi-api-client__toggle:after {
  content: '';
  position: absolute;
  bottom: -6.5px;
  width: 100%;
  height: 6px;
  left: 0;
}
.readyapi-api-client__item--open .readyapi-api-client__toggle:after {
  display: none;
}
.readyapi-api-client__item:hover,
.readyapi-api-client__item--open {
  background: var(--readyapi-background-2);
}

.readyapi-api-client__item--open .readyapi-api-client__item__content {
  display: flex;
}

.readyapi-api-client__item--open:hover {
  cursor: default;
}

.readyapi-api-client__item--open .readyapi-api-client__toggle__icon {
  transform: rotate(90deg);
}
.readyapi-api-client__toggle {
  padding: 6px;
  min-height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  appearance: none;
  outline: 0;
  border: none;
  font-family: var(--readyapi-font);
  cursor: pointer;
}

.readyapi-api-client__item .readyapi-api-client__item__title {
  color: var(--readyapi-color-1);
  font-size: var(--readyapi-small);
  font-weight: var(--readyapi-semibold);
  font-family: var(--readyapi-font);
  user-select: none;
  flex: 1;
  position: relative;
  z-index: 1;
}
.readyapi-api-client__item .readyapi-api-client__toggle__icon {
  width: 10px;
  margin-right: 6px;
  color: var(--readyapi-color-3);
  z-index: 1;
  position: relative;
}
.readyapi-api-client__toggle:hover .readyapi-api-client__toggle__icon {
  color: var(--readyapi-color-1);
}

.readyapi-api-client__item__options {
  position: relative;
  z-index: 1;
}

.readyapi-api-client__item__options span {
  background: transparent;
  padding: 2px 0;
  border-radius: 3px;
  font-size: var(--readyapi-small);
  pointer-events: none;
  color: var(--readyapi-color-2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.readyapi-api-client__item__options:hover span {
  color: var(--readyapi-color-1);
  border-color: currentColor;
}
.readyapi-api-client__item__options span svg {
  width: 15px;
  height: 15px;
  margin-left: 3px;
}

.readyapi-api-client__item__options select {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
.readyapi-api-client__item__content .readyapi-api-client__codemirror__wrapper {
  padding-top: 0;
}
</style>

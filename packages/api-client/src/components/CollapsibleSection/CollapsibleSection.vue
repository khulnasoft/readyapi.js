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
        <div class="readyapi-api-client__toggle-container">
          <span class="readyapi-api-client__item__title">
            {{ title }}
          </span>
          <div
            v-if="$slots.options && open"
            class="readyapi-api-client__item__options">
            <slot name="options" />
          </div>
        </div>
        <svg
          class="readyapi-api-client__toggle__icon"
          fill="none"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.2 4.1 6 7.9l3.8-3.8"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
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
.readyapi-api-client__toggle-container {
  display: flex;
  gap: 6px;
  align-items: center;
}
.readyapi-api-client__item--open .readyapi-api-client__toggle:after {
  display: none;
}
.readyapi-api-client__toggle:hover {
  background: var(--readyapi-background-2);
}

.readyapi-api-client__item--open .readyapi-api-client__item__content {
  display: flex;
}

.readyapi-api-client__item--open:hover {
  cursor: default;
}
.readyapi-api-client__toggle {
  padding: 0 6px 0 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: calc(100% - 9px);
  appearance: none;
  outline: 0;
  border: none;
  font-family: var(--readyapi-font);
  border-radius: var(--readyapi-radius);
  cursor: pointer;
  border: 1px solid transparent;
  border-bottom: none;
}
.readyapi-api-client__item--open .readyapi-api-client__toggle {
  border-radius: var(--readyapi-radius) var(--readyapi-radius) 0 0;
  border-color: var(--readyapi-background-1);
  background: var(--readyapi-background-2);
}
/* use this to match border colors between the toggle and it's sibling   */
.readyapi-api-client__item--open .readyapi-api-client__toggle:before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 1px);
  pointer-events: none;
  border: 1px solid var(--readyapi-border-color);
  border-bottom: none;
  border-radius: var(--readyapi-radius) var(--readyapi-radius) 0 0;
}
.readyapi-api-client__item .readyapi-api-client__item__title {
  color: var(--readyapi-color-1);
  font-size: var(--readyapi-mini);
  font-weight: var(--readyapi-semibold);
  font-family: var(--readyapi-font);
  user-select: none;
  position: relative;
  z-index: 1;
  padding: 6px 0;
}
.readyapi-api-client__item .readyapi-api-client__toggle__icon {
  width: 20px;
  padding: 3px;
  color: var(--readyapi-color-3);
  z-index: 1;
  position: relative;
  transform: rotate(-90deg);
  margin: 5px 0 5px -9px;
}
.readyapi-api-client__item--open .readyapi-api-client__toggle__icon {
  transform: rotate(0deg);
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
  color: var(--readyapi-color-3);
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

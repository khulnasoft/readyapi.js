<script setup lang="ts">
import { Card, CardContent, CardHeader } from '@readyapi/api-reference'
import { RouterLink } from 'vue-router'

defineProps<{
  to?: string
  href?: string
}>()
</script>
<template>
  <RouterLink
    v-if="to"
    :to="{ name: to }">
    <Card>
      <CardHeader>
        <slot name="title" />
      </CardHeader>
      <CardContent class="description">
        <slot name="description" />
      </CardContent>
    </Card>
  </RouterLink>
  <a
    v-else-if="href"
    :href="href">
    <Card>
      <CardHeader>
        <slot name="title" />
      </CardHeader>
      <CardContent class="description">
        <slot name="description" />
      </CardContent>
    </Card>
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--readyapi-color-2);
}

.description {
  padding: 10px;
  min-height: 75px;
  font-size: var(--readyapi-small);
  line-height: 1.5;
}
</style>

<script setup lang="ts">
import { ArrowDownToLine, ArrowRight } from '@lucide/vue'

withDefaults(
  defineProps<{
    href: string
    variant?: 'primary' | 'secondary'
    download?: boolean
  }>(),
  {
    variant: 'primary',
    download: false,
  },
)
</script>

<template>
  <a
    :class="[
      'button-base',
      variant === 'primary' ? 'button-primary' : 'button-secondary',
    ]"
    :download="download ? '' : undefined"
    :href="href"
  >
    <slot />
    <ArrowDownToLine v-if="download" aria-hidden="true" :size="18" :stroke-width="1.8" />
    <ArrowRight v-else aria-hidden="true" :size="18" :stroke-width="1.8" />
  </a>
</template>

<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

defineProps<{
  href: string
  label: string
}>()
</script>

<template>
  <a class="social-link" :href="href" target="_blank" rel="noreferrer">
    <slot name="icon" />
    <span>{{ label }}</span>
    <ArrowUpRight aria-hidden="true" :size="15" />
  </a>
</template>

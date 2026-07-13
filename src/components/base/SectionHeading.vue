<script setup lang="ts">
defineProps<{
  headingId?: string
  title: string
  description?: string
}>()
</script>

<template>
  <header>
    <h2 :id="headingId" class="section-title">{{ title }}</h2>
    <p v-if="description" class="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
      {{ description }}
    </p>
  </header>
</template>

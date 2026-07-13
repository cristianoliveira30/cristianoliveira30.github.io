<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
  }>(),
  { as: 'div' },
)
</script>

<template>
  <component :is="as" class="mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-16">
    <slot />
  </component>
</template>

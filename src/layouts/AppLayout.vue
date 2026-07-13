<script setup lang="ts">
import AppHeader from '@/components/base/AppHeader.vue'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <a class="skip-link" href="#main-content">
    {{ t('skip.content') }}
  </a>
  <AppHeader />
  <slot />
</template>

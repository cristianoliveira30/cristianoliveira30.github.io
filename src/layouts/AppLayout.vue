<script setup lang="ts">
import AppHeader from '@/components/base/AppHeader.vue'
import CvDownloadDialog from '@/components/base/CvDownloadDialog.vue'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <div class="scroll-progress" aria-hidden="true"></div>
  <a class="skip-link" href="#main-content">
    {{ t('skip.content') }}
  </a>
  <AppHeader />
  <slot />
  <CvDownloadDialog />
</template>

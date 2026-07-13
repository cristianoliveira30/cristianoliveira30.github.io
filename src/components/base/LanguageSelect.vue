<script setup lang="ts">
import { Languages } from '@lucide/vue'

import { useI18n } from '@/i18n'
import type { Locale } from '@/i18n/messages'

const { locale, setLocale, t } = useI18n()

function changeLanguage(event: Event) {
  setLocale((event.target as HTMLSelectElement).value as Locale)
}
</script>

<template>
  <label class="language-control">
    <Languages aria-hidden="true" :size="16" />
    <span class="sr-only">{{ t('language.select') }}</span>
    <select :value="locale" :aria-label="t('language.select')" @change="changeLanguage">
      <option value="pt">PT</option>
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  </label>
</template>

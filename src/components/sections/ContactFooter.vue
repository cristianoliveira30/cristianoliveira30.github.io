<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

import AppContainer from '@/components/base/AppContainer.vue'
import { profileLinks } from '@/data/navigation'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <footer id="contato" class="border-t border-border py-12 sm:py-16">
    <AppContainer>
      <div class="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
        <div>
          <p class="section-label">{{ t('contact.label') }}</p>
          <h2 class="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {{ t('contact.title') }}
          </h2>
        </div>
        <div class="flex gap-5">
          <a class="footer-link" :href="profileLinks.github" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" :size="16" />
          </a>
          <a class="footer-link" :href="profileLinks.linkedin" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight aria-hidden="true" :size="16" />
          </a>
        </div>
      </div>
      <p class="mt-12 border-t border-white/8 pt-6 text-xs text-zinc-600">
        {{ t('footer.text') }}
      </p>
    </AppContainer>

    <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
    </div>
  </footer>
</template>

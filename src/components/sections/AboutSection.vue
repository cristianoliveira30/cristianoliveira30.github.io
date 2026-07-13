<script setup lang="ts">
import { Braces, Gauge, ShieldCheck } from '@lucide/vue'

import AppContainer from '@/components/base/AppContainer.vue'
import { engineeringPrinciples } from '@/data/about'
import { useI18n } from '@/i18n'

const principleIcons = [Braces, Gauge, ShieldCheck]
const { t } = useI18n()
</script>

<template>
  <section id="sobre" class="section-shell scroll-mt-16" aria-labelledby="about-title">
    <AppContainer>
      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20" data-reveal>
        <div>
          <p class="section-label">{{ t('about.label') }}</p>
          <h2 id="about-title" class="section-statement mt-5">
            {{ t('about.title') }}
          </h2>
        </div>
        <div class="space-y-6 self-end text-base leading-8 text-muted sm:text-lg">
          <p>{{ t('about.body1') }}</p>
          <p>{{ t('about.body2') }}</p>
        </div>
      </div>

      <ul class="mt-16 grid border-y border-border lg:grid-cols-3" :aria-label="t('about.principles')" data-reveal>
        <li
          v-for="(principle, index) in engineeringPrinciples"
          :key="principle.titleKey"
          class="principle-item"
        >
          <component :is="principleIcons[index]" class="shrink-0 text-blue-400" aria-hidden="true" :size="28" :stroke-width="1.5" />
          <div>
            <h3 class="font-semibold text-white">{{ t(principle.titleKey) }}</h3>
            <p class="mt-2 text-sm leading-6 text-muted">{{ t(principle.descriptionKey) }}</p>
          </div>
        </li>
      </ul>
    </AppContainer>
  </section>
</template>

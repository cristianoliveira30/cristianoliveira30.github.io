<script setup lang="ts">
import { Check } from '@lucide/vue'

import AppContainer from '@/components/base/AppContainer.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import { education, experience } from '@/data/experience'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="experiencia" class="section-shell scroll-mt-16 border-t border-white/5" aria-labelledby="experience-title">
    <AppContainer>
      <SectionHeading
        heading-id="experience-title"
        :title="t('experience.title')"
        :description="t('experience.description')"
        data-reveal
      />

      <ol class="mt-14 border-y border-border">
        <li
          v-for="item in experience"
          :key="item.id"
          class="grid gap-4 border-b border-border py-8 last:border-b-0 lg:grid-cols-[15rem_1fr] lg:gap-10"
          data-reveal
        >
          <p class="font-mono text-xs text-blue-400 sm:text-sm">{{ t(item.periodKey) }}</p>
          <div>
            <h3 class="text-xl font-semibold text-white sm:text-2xl">
              {{ t(item.roleKey) }}
              <span v-if="item.org" class="block text-base font-normal text-muted sm:inline">· {{ item.org }}</span>
            </h3>
            <ul class="mt-4 space-y-2">
              <li v-for="bulletKey in item.bulletKeys" :key="bulletKey" class="flex gap-2 text-sm leading-6 text-zinc-300 sm:text-base">
                <Check class="mt-1 shrink-0 text-emerald-400" aria-hidden="true" :size="16" />
                {{ t(bulletKey) }}
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <h3 class="mt-14 text-xl font-semibold text-white sm:text-2xl" data-reveal>{{ t('experience.education') }}</h3>
      <ul class="mt-6 border-y border-border">
        <li
          v-for="item in education"
          :key="item.id"
          class="grid gap-2 border-b border-border py-6 last:border-b-0 lg:grid-cols-[15rem_1fr] lg:gap-10"
          data-reveal
        >
          <p class="font-mono text-xs text-blue-400 sm:text-sm">{{ t(item.periodKey) }}</p>
          <p class="text-base text-zinc-200">
            <span class="font-semibold text-white">{{ t(item.roleKey) }}</span>
            <span v-if="item.org" class="text-muted"> · {{ item.org }}</span>
          </p>
        </li>
      </ul>
    </AppContainer>
  </section>
</template>

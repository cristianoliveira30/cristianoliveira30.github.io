<script setup lang="ts">
import { ArrowDownToLine, MapPin } from '@lucide/vue'

import AppButton from '@/components/base/AppButton.vue'
import AppContainer from '@/components/base/AppContainer.vue'
import BrandIcon from '@/components/base/BrandIcon.vue'
import SocialLink from '@/components/base/SocialLink.vue'
import ProfileCodePanel from '@/components/sections/ProfileCodePanel.vue'
import { useCvDialog } from '@/composables/useCvDialog'
import { profileLinks } from '@/data/navigation'
import { useI18n } from '@/i18n'

const { t } = useI18n()
const { open: openCvDialog } = useCvDialog()
</script>

<template>
  <section id="inicio" class="hero-section scroll-mt-20" aria-labelledby="hero-title">
    <div class="hero-grid" aria-hidden="true"></div>
    <AppContainer class="relative grid min-h-[calc(100svh-4rem)] items-center gap-14 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pt-32">
      <div class="max-w-3xl">
        <p class="hero-rise text-2xl font-semibold tracking-tight text-white sm:text-3xl" style="--i: 0">Cristian Oliveira</p>
        <p class="hero-rise mt-2 text-lg text-muted sm:text-xl" style="--i: 1">{{ t('hero.role') }}</p>
        <h1 id="hero-title" class="hero-title hero-rise mt-10" style="--i: 2">
          {{ t('hero.title1') }}<br />
          {{ t('hero.title2') }}
        </h1>
        <p class="hero-rise mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg" style="--i: 3">
          {{ t('hero.description') }}
        </p>
        <p class="hero-rise mt-5 flex items-center gap-2 text-sm text-zinc-400" style="--i: 4">
          <MapPin class="shrink-0 text-blue-400" aria-hidden="true" :size="16" />
          {{ t('hero.location') }}
        </p>

        <div class="hero-rise mt-9 flex flex-col gap-3 sm:flex-row" style="--i: 5">
          <AppButton href="#projetos">{{ t('hero.projects') }}</AppButton>
          <button type="button" class="button-base button-secondary" @click="openCvDialog">
            {{ t('hero.cv') }}
            <ArrowDownToLine aria-hidden="true" :size="18" :stroke-width="1.8" />
          </button>
        </div>

        <div class="hero-rise mt-8 flex flex-wrap gap-6" style="--i: 6">
          <SocialLink :href="profileLinks.github" label="GitHub">
            <template #icon><BrandIcon name="github" /></template>
          </SocialLink>
          <SocialLink :href="profileLinks.linkedin" label="LinkedIn">
            <template #icon><BrandIcon name="linkedin" /></template>
          </SocialLink>
        </div>
      </div>

      <div class="hero-rise-side" style="--i: 4">
        <ProfileCodePanel />
      </div>
    </AppContainer>
  </section>
</template>

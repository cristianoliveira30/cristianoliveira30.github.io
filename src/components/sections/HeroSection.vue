<script setup lang="ts">
import AppButton from '@/components/base/AppButton.vue'
import AppContainer from '@/components/base/AppContainer.vue'
import BrandIcon from '@/components/base/BrandIcon.vue'
import SocialLink from '@/components/base/SocialLink.vue'
import ProfileCodePanel from '@/components/sections/ProfileCodePanel.vue'
import { profileLinks } from '@/data/navigation'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="inicio" class="hero-section scroll-mt-20" aria-labelledby="hero-title">
    <div class="hero-grid" aria-hidden="true"></div>
    <AppContainer class="relative grid min-h-[calc(100svh-4rem)] items-center gap-14 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pt-32">
      <div class="max-w-3xl" data-reveal>
        <p class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Cristian Oliveira</p>
        <p class="mt-2 text-lg text-muted sm:text-xl">{{ t('hero.role') }}</p>
        <h1 id="hero-title" class="hero-title mt-10">
          {{ t('hero.title1') }}<br />
          {{ t('hero.title2') }}
        </h1>
        <p class="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {{ t('hero.description') }}
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <AppButton href="#projetos">{{ t('hero.projects') }}</AppButton>
        </div>

        <div class="mt-8 flex flex-wrap gap-6">
          <SocialLink :href="profileLinks.github" label="GitHub">
            <template #icon><BrandIcon name="github" /></template>
          </SocialLink>
          <SocialLink :href="profileLinks.linkedin" label="LinkedIn">
            <template #icon><BrandIcon name="linkedin" /></template>
          </SocialLink>
        </div>
      </div>

      <div data-reveal>
        <ProfileCodePanel />
      </div>
    </AppContainer>
  </section>
</template>

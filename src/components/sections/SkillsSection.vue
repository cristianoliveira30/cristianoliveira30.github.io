<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

import AppContainer from '@/components/base/AppContainer.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import SkillRow from '@/components/sections/SkillRow.vue'
import { skillGroups } from '@/data/skills'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="skills" class="section-shell scroll-mt-16 border-t border-white/5" aria-labelledby="skills-title">
    <AppContainer>
      <SectionHeading
        heading-id="skills-title"
        :title="t('skills.title')"
        :description="t('skills.description')"
        data-reveal
      />

      <ul class="mt-14 border-y border-border">
        <SkillRow v-for="group in skillGroups" :key="group.titleKey" :group="group" data-reveal />
      </ul>

      <div class="mt-10 flex justify-end">
        <a class="inline-flex items-center gap-3 text-sm font-medium text-blue-400 transition hover:text-blue-300" href="#projetos">
          {{ t('skills.viewProjects') }}
          <ArrowRight aria-hidden="true" :size="18" />
        </a>
      </div>
    </AppContainer>
  </section>
</template>

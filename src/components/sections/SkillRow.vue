<script setup lang="ts">
import { BriefcaseBusiness, PanelsTopLeft, Server, Sparkles, SquareCode } from '@lucide/vue'
import type { Component } from 'vue'

import type { SkillGroup } from '@/types/portfolio'
import { useI18n } from '@/i18n'

const props = defineProps<{
  group: SkillGroup
}>()
const { t } = useI18n()

const icons: Record<SkillGroup['icon'], Component> = {
  server: Server,
  browser: SquareCode,
  desktop: PanelsTopLeft,
  tools: BriefcaseBusiness,
  ai: Sparkles,
}

const accentClasses: Record<SkillGroup['accent'], string> = {
  blue: 'text-blue-400 border-blue-500',
  purple: 'text-purple-400 border-purple-500',
  emerald: 'text-emerald-400 border-emerald-500',
}
</script>

<template>
  <li class="skill-row" :class="accentClasses[props.group.accent]">
    <div class="grid gap-5 lg:grid-cols-[2.7rem_22rem_1fr] lg:items-center lg:gap-7">
      <component :is="icons[props.group.icon]" aria-hidden="true" :size="34" :stroke-width="1.4" />
      <div>
        <h3 class="text-xl font-semibold text-white sm:text-2xl">
          {{ t(props.group.titleKey) }}
          <span v-if="props.group.statusKey" class="text-base font-normal text-muted">— {{ t(props.group.statusKey) }}</span>
        </h3>
        <p class="mt-2 max-w-sm text-sm leading-6 text-muted">{{ t(props.group.descriptionKey) }}</p>
      </div>
      <ul class="flex flex-wrap gap-x-4 gap-y-3 text-base text-zinc-200 sm:text-lg" :aria-label="t('skills.technologies', { name: t(props.group.titleKey) })">
        <li v-for="(skill, index) in props.group.skills" :key="skill" class="flex items-center gap-4">
          <span>{{ skill }}</span>
          <span v-if="index < props.group.skills.length - 1" class="select-none text-current" aria-hidden="true">/</span>
        </li>
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ArrowUpRight, Check, CodeXml, ExternalLink, Lock } from '@lucide/vue'

import type { Project } from '@/types/portfolio'
import ProjectMedia from '@/components/sections/ProjectMedia.vue'
import { useI18n } from '@/i18n'

defineProps<{
  project: Project
  index: number
}>()
const { t } = useI18n()
</script>

<template>
  <article class="project-row" :class="{ 'lg:[&_.project-media]:order-2': index % 2 === 1 }">
    <ProjectMedia :project="project" />

    <div class="self-center py-2 lg:px-4">
      <p class="font-mono text-xs text-blue-400">0{{ index + 1 }}</p>
      <h3 class="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {{ t(project.titleKey) }}
        <span v-if="project.statusKey" class="mt-1 block text-base font-normal text-muted sm:inline">— {{ t(project.statusKey) }}</span>
      </h3>
      <p class="mt-4 text-base leading-7 text-muted">{{ t(project.descriptionKey) }}</p>

      <ul class="mt-6 flex flex-wrap gap-x-3 gap-y-2" :aria-label="t('projects.technologies', { name: t(project.titleKey) })">
        <li v-for="technology in project.technologies" :key="technology" class="text-sm text-zinc-300">
          {{ technology }}
        </li>
      </ul>

      <ul class="mt-6 space-y-2" :aria-label="t('projects.highlights')">
        <li v-for="highlightKey in project.highlightKeys" :key="highlightKey" class="flex gap-2 text-sm text-zinc-300">
          <Check class="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" :size="16" />
          {{ t(highlightKey) }}
        </li>
      </ul>

      <div class="mt-7 flex flex-wrap gap-3">
        <a v-if="project.codeUrl" class="project-action" :href="project.codeUrl" target="_blank" rel="noreferrer">
          <CodeXml aria-hidden="true" :size="17" />
          {{ t('projects.code') }}
          <ArrowUpRight aria-hidden="true" :size="15" />
        </a>
        <a v-if="project.demoUrl" class="project-action" :href="project.demoUrl" target="_blank" rel="noreferrer">
          <ExternalLink aria-hidden="true" :size="16" />
          {{ t('projects.demo') }}
        </a>
        <span v-if="!project.codeUrl && !project.demoUrl && project.linkNoteKey" class="project-status">
          <Lock aria-hidden="true" :size="16" />
          {{ t(project.linkNoteKey) }}
        </span>
      </div>
    </div>
  </article>
</template>

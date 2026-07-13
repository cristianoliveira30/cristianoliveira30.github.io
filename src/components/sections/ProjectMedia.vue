<script setup lang="ts">
import { computed } from 'vue'

import { useI18n } from '@/i18n'
import type { Project } from '@/types/portfolio'

const props = defineProps<{ project: Project }>()
const { t } = useI18n()
const title = computed(() => t(props.project.titleKey))
</script>

<template>
  <component
    :is="project.demoUrl ? 'a' : 'div'"
    class="project-media"
    :class="{ 'project-media-composite': project.image.mobile, group: project.demoUrl }"
    :href="project.demoUrl"
    :target="project.demoUrl ? '_blank' : undefined"
    :rel="project.demoUrl ? 'noreferrer' : undefined"
    :aria-label="project.demoUrl ? t('projects.openDemo', { name: title }) : undefined"
  >
    <picture class="project-desktop-preview">
      <source :srcset="`${project.image.small} 768w, ${project.image.large} 1280w`" sizes="(min-width: 1024px) 56vw, 100vw" type="image/webp" />
      <img :src="project.image.large" :alt="t(project.image.altKey)" width="1280" height="800" loading="lazy" decoding="async" />
    </picture>
    <picture v-if="project.image.mobile" class="project-mobile-preview">
      <source :srcset="`${project.image.mobile.small} 320w, ${project.image.mobile.large} 384w`" sizes="(min-width: 640px) 180px, 28vw" type="image/webp" />
      <img :src="project.image.mobile.large" :alt="t(project.image.mobile.altKey)" width="384" height="744" loading="lazy" decoding="async" />
    </picture>
  </component>
</template>

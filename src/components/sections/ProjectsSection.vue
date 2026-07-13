<script setup lang="ts">
import AppContainer from '@/components/base/AppContainer.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import ProjectCard from '@/components/sections/ProjectCard.vue'
import { projects } from '@/data/projects'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="projetos" class="section-shell scroll-mt-16 border-t border-white/5" aria-labelledby="projects-title">
    <AppContainer>
      <SectionHeading
        heading-id="projects-title"
        :title="t('projects.title')"
        :description="t('projects.description')"
        data-reveal
      />

      <div class="mt-14 border-t border-border">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.slug"
          :project="project"
          :index="index"
          data-reveal
        />
      </div>
    </AppContainer>
  </section>
</template>

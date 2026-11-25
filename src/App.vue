<script setup lang="ts">
import { useTemplateRef } from 'vue'

import AboutSection from '@/components/sections/AboutSection.vue'
import ContactFooter from '@/components/sections/ContactFooter.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import { useInitialHashNavigation } from '@/composables/useInitialHashNavigation'
import { useRevealOnScroll } from '@/composables/useRevealOnScroll'
import AppLayout from '@/layouts/AppLayout.vue'

const mainElement = useTemplateRef<HTMLElement>('mainElement')

useRevealOnScroll(mainElement)
useInitialHashNavigation()
</script>

<template>
  <AppLayout>
    <main id="main-content" ref="mainElement">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
    <ContactFooter />
  </AppLayout>
</template>

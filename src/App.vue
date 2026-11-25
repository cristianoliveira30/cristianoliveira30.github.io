<script setup lang="ts">
import { shallowRef } from 'vue'

import AboutSection from '@/components/sections/AboutSection.vue'
import ContactFooter from '@/components/sections/ContactFooter.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import { useInitialHashNavigation } from '@/composables/useInitialHashNavigation'
import { useRevealOnScroll } from '@/composables/useRevealOnScroll'
import { useScrollEffects } from '@/composables/useScrollEffects'
import AppLayout from '@/layouts/AppLayout.vue'

// Observe the whole page so sections and the footer share the same reveal behaviour.
useRevealOnScroll(shallowRef<HTMLElement | null>(document.body))
useScrollEffects()
useInitialHashNavigation()
</script>

<template>
  <AppLayout>
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
    <ContactFooter />
  </AppLayout>
</template>

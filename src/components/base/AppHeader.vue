<script setup lang="ts">
import { ArrowUpRight, Menu } from '@lucide/vue'
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'

import AppContainer from '@/components/base/AppContainer.vue'
import LanguageSelect from '@/components/base/LanguageSelect.vue'
import { navigationItems } from '@/data/navigation'
import { useI18n } from '@/i18n'

const { t } = useI18n()
const menu = useTemplateRef<HTMLDetailsElement>('menu')

function closeMenu() {
  if (menu.value) menu.value.open = false
}

function onMenuClick(event: MouseEvent) {
  // Close after choosing a destination, but keep it open when using the language select.
  if ((event.target as HTMLElement).closest('a')) closeMenu()
}

function onDocumentPointer(event: Event) {
  if (menu.value?.open && !menu.value.contains(event.target as Node)) closeMenu()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('pointerdown', onDocumentPointer)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDocumentPointer)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="site-header fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-background/80 backdrop-blur-xl">
    <AppContainer class="flex h-16 items-center justify-between lg:h-20">
      <a class="brand-mark" href="#inicio" :aria-label="t('nav.home')">CO</a>

      <nav class="hidden items-center gap-8 md:flex" :aria-label="t('nav.main')">
        <a v-for="item in navigationItems" :key="item.href" class="nav-link" :href="item.href">
          {{ t(item.labelKey) }}
        </a>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <LanguageSelect />
        <a class="header-action" href="#contato">
          {{ t('nav.contact') }}
          <ArrowUpRight aria-hidden="true" :size="17" />
        </a>
      </div>

      <details ref="menu" class="mobile-menu relative md:hidden">
        <summary class="icon-button" :aria-label="t('nav.open')">
          <Menu aria-hidden="true" :size="22" />
        </summary>
        <nav class="mobile-nav absolute right-0 top-12 w-56 rounded-xl border border-border bg-surface p-2 shadow-2xl" :aria-label="t('nav.mobile')" @click="onMenuClick">
          <a v-for="item in navigationItems" :key="item.href" class="mobile-nav-link" :href="item.href">
            {{ t(item.labelKey) }}
          </a>
          <a class="mobile-nav-link text-white" href="#contato">{{ t('nav.contact') }}</a>
          <div class="border-t border-border p-2 pt-3"><LanguageSelect /></div>
        </nav>
      </details>
    </AppContainer>
  </header>
</template>

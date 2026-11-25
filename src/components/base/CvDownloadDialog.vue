<script setup lang="ts">
import { ArrowDownToLine, X } from '@lucide/vue'
import { computed, useTemplateRef, watch } from 'vue'

import { useCvDialog } from '@/composables/useCvDialog'
import { profileLinks } from '@/data/navigation'
import { useI18n } from '@/i18n'

const { t, locale } = useI18n()
const { isOpen, close } = useCvDialog()
const dialog = useTemplateRef<HTMLDialogElement>('dialog')

const fileName = (url: string) => url.split('/').pop() ?? 'cv.pdf'

// The option that matches the site language comes first and is suggested.
const options = computed(() => {
  const list = [
    { id: 'en', label: 'English', href: profileLinks.cvEn, file: fileName(profileLinks.cvEn) },
    { id: 'pt', label: 'Português (Brasil)', href: profileLinks.cvPt, file: fileName(profileLinks.cvPt) },
  ]
  return locale.value === 'pt' ? [list[1], list[0]] : list
})

watch(
  isOpen,
  (open) => {
    const element = dialog.value
    if (!element) return

    if (open && !element.open) {
      element.showModal()
      element.querySelector<HTMLAnchorElement>('.cv-option')?.focus()
    } else if (!open && element.open) {
      element.close()
    }
  },
  { flush: 'post' },
)

function onBackdropClick(event: MouseEvent) {
  if (event.target === dialog.value) close()
}

function onPick() {
  // Let the browser start the download before the dialog goes away.
  window.setTimeout(close, 250)
}
</script>

<template>
  <dialog ref="dialog" class="cv-dialog" aria-labelledby="cv-dialog-title" @close="close" @click="onBackdropClick">
    <div class="cv-dialog-panel">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h2 id="cv-dialog-title" class="text-xl font-semibold tracking-tight text-white sm:text-2xl">{{ t('cv.dialog.title') }}</h2>
          <p class="mt-2 text-sm leading-6 text-muted">{{ t('cv.dialog.description') }}</p>
        </div>
        <button type="button" class="icon-button shrink-0 text-zinc-300 transition hover:text-white" :aria-label="t('cv.dialog.close')" @click="close">
          <X aria-hidden="true" :size="20" />
        </button>
      </div>

      <ul class="mt-6 grid gap-3">
        <li v-for="(option, index) in options" :key="option.id">
          <a class="cv-option" :href="option.href" :download="option.file" @click="onPick">
            <span class="min-w-0">
              <span class="block font-semibold text-white">{{ option.label }}</span>
              <span class="mt-0.5 block truncate text-xs text-muted">PDF · {{ option.file }}</span>
              <span v-if="index === 0" class="mt-2 inline-block rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-medium text-blue-300">
                {{ t('cv.option.suggested') }}
              </span>
            </span>
            <ArrowDownToLine class="shrink-0 text-blue-400" aria-hidden="true" :size="20" :stroke-width="1.8" />
          </a>
        </li>
      </ul>
    </div>
  </dialog>
</template>

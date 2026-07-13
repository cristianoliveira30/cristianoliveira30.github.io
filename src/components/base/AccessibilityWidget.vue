<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'

declare global {
  interface Window {
    VLibras?: {
      Widget: new (applicationUrl: string) => unknown
    }
  }
}

const SCRIPT_URL = 'https://vlibras.gov.br/app/vlibras-plugin.js'
const APPLICATION_URL = 'https://vlibras.gov.br/app'
const widgetRoot = useTemplateRef<HTMLElement>('widgetRoot')

function initializeWidget() {
  if (!window.VLibras || !widgetRoot.value || widgetRoot.value.dataset.initialized) return

  new window.VLibras.Widget(APPLICATION_URL)
  widgetRoot.value.dataset.initialized = 'true'
}

onMounted(() => {
  const loadedScript = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_URL}"]`)

  if (loadedScript) {
    if (window.VLibras) initializeWidget()
    else loadedScript.addEventListener('load', initializeWidget, { once: true })
    return
  }

  const script = document.createElement('script')
  script.src = SCRIPT_URL
  script.async = true
  script.addEventListener('load', initializeWidget, { once: true })
  document.head.appendChild(script)
})
</script>

<template>
  <div ref="widgetRoot" vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
</template>

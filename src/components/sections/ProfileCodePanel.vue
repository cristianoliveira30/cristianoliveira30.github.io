<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()
const lines = [
  [
    { text: 'export const ', tone: 'blue' },
    { text: 'profile', tone: 'base' },
    { text: ' = {', tone: 'base' },
  ],
  [{ text: "  name: 'Cristian Oliveira',", tone: 'green' }],
  [{ text: "  role: 'Full Stack Developer',", tone: 'green' }],
  [{ text: '  focus: [', tone: 'base' }],
  [{ text: "    'cleanArchitecture',", tone: 'green' }],
  [{ text: "    'performance',", tone: 'green' }],
  [{ text: "    'accessibility',", tone: 'green' }],
  [{ text: '  ],', tone: 'base' }],
  [{ text: '  stack: {', tone: 'base' }],
  [{ text: "    backend: 'Laravel',", tone: 'green' }],
  [{ text: "    frontend: 'Vue 3',", tone: 'green' }],
  [{ text: "    mobile: 'Flutter',", tone: 'green' }],
  [{ text: "    database: 'PostgreSQL',", tone: 'green' }],
  [{ text: "    infrastructure: 'Docker',", tone: 'green' }],
  [{ text: "    ai: 'local-first',", tone: 'green' }],
  [{ text: '  },', tone: 'base' }],
  [{ text: '} as const', tone: 'blue' }],
] as const
</script>

<template>
  <div class="code-panel" :aria-label="t('code.aria')">
    <div class="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
      <div class="flex items-center gap-3">
        <span class="flex size-7 items-center justify-center rounded-md bg-blue-500 text-xs font-bold text-white">TS</span>
        <span class="font-mono text-xs text-muted sm:text-sm">engineering/profile.ts</span>
      </div>
      <span class="size-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
    </div>
    <ol class="overflow-x-auto px-4 py-5 font-mono text-[0.72rem] leading-6 sm:px-6 sm:text-sm sm:leading-7">
      <li v-for="(line, index) in lines" :key="index" class="flex min-w-max">
        <span class="mr-5 w-5 select-none text-right text-zinc-600" aria-hidden="true">{{ index + 1 }}</span>
        <code>
          <span
            v-for="(part, partIndex) in line"
            :key="partIndex"
            :class="part.tone === 'blue' ? 'text-blue-400' : part.tone === 'green' ? 'text-emerald-400' : 'text-zinc-300'"
          >{{ part.text }}</span>
        </code>
      </li>
    </ol>
  </div>
</template>

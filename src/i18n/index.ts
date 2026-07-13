import type { App, InjectionKey, Ref } from 'vue'
import { inject, readonly, ref, watch } from 'vue'

import { messages, type Locale, type MessageKey } from './messages'

const STORAGE_KEY = 'portfolio-locale'
const localeKey: InjectionKey<I18nContext> = Symbol('portfolio-i18n')

interface I18nContext {
  locale: Readonly<Ref<Locale>>
  setLocale: (locale: Locale) => void
  t: (key: MessageKey, values?: Record<string, string>) => string
}

function savedLocale(): Locale {
  const value = localStorage.getItem(STORAGE_KEY)
  return value === 'en' || value === 'de' || value === 'pt' ? value : 'pt'
}

export function createI18n() {
  const locale = ref<Locale>(savedLocale())
  const t = (key: MessageKey, values: Record<string, string> = {}) =>
    Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), messages[locale.value][key])

  watch(locale, (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    document.documentElement.lang = value === 'pt' ? 'pt-BR' : value
    document.title = messages[value]['meta.title']
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', messages[value]['meta.description'])
  }, { immediate: true })

  const context: I18nContext = {
    locale: readonly(locale),
    setLocale: (value) => { locale.value = value },
    t,
  }

  return { install: (app: App) => app.provide(localeKey, context) }
}

export function useI18n(): I18nContext {
  const context = inject(localeKey)
  if (!context) throw new Error('i18n não foi instalado na aplicação.')
  return context
}

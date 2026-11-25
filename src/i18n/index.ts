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

function detectLocale(): Locale {
  const [language = ''] = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase().split('-')
  return language === 'pt' || language === 'de' ? language : 'en'
}

function savedLocale(): Locale {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'en' || value === 'de' || value === 'pt') return value
  } catch {
    // storage can be unavailable (private mode); fall back to the browser language
  }
  return detectLocale()
}

function persistLocale(value: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // ignore: the preference is only a convenience
  }
}

export function createI18n() {
  const locale = ref<Locale>(savedLocale())
  const t = (key: MessageKey, values: Record<string, string> = {}) =>
    Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), messages[locale.value][key])

  watch(locale, (value) => {
    persistLocale(value)
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

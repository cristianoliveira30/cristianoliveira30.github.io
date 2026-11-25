import type { MessageKey } from '@/i18n/messages'

export interface NavigationItem {
  labelKey: MessageKey
  href: `#${string}`
}

export interface EngineeringPrinciple {
  titleKey: MessageKey
  descriptionKey: MessageKey
}

export interface SkillGroup {
  titleKey: MessageKey
  statusKey?: MessageKey
  descriptionKey: MessageKey
  skills: string[]
  icon: 'server' | 'browser' | 'desktop' | 'tools' | 'ai'
  accent: 'blue' | 'purple' | 'emerald'
}

export interface ProjectImage {
  small: string
  large: string
  altKey: MessageKey
  type?: string
  mobile?: ProjectImage
}

export interface Project {
  slug: string
  titleKey: MessageKey
  statusKey?: MessageKey
  descriptionKey: MessageKey
  technologies: string[]
  highlightKeys: MessageKey[]
  image: ProjectImage
  codeUrl?: string
  demoUrl?: string
  linkNoteKey?: MessageKey
}

export interface ExperienceItem {
  id: string
  roleKey: MessageKey
  org?: string
  periodKey: MessageKey
  bulletKeys: MessageKey[]
}

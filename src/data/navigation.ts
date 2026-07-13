import type { NavigationItem } from '@/types/portfolio'

export const navigationItems: NavigationItem[] = [
  { labelKey: 'nav.about', href: '#sobre' },
  { labelKey: 'nav.skills', href: '#skills' },
  { labelKey: 'nav.projects', href: '#projetos' },
]

export const profileLinks = {
  github: 'https://github.com/cristianoliveira30',
  linkedin: 'https://www.linkedin.com/in/cristian-oliveira-317b0b20b/',
} as const

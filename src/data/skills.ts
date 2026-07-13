import type { SkillGroup } from '@/types/portfolio'

export const skillGroups: SkillGroup[] = [
  {
    titleKey: 'skill.backend.title',
    descriptionKey: 'skill.backend.description',
    skills: ['Laravel', 'PHP', 'REST APIs', 'MySQL', 'PostgreSQL', 'Docker', 'Linux', 'Arquitetura'],
    icon: 'server',
    accent: 'blue',
  },
  {
    titleKey: 'skill.frontend.title',
    descriptionKey: 'skill.frontend.description',
    skills: ['Vue 3', 'Inertia.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
    icon: 'browser',
    accent: 'blue',
  },
  {
    titleKey: 'skill.desktop.title',
    statusKey: 'status.development',
    descriptionKey: 'skill.desktop.description',
    skills: ['C#', '.NET', 'WPF', 'MVVM'],
    icon: 'desktop',
    accent: 'purple',
  },
  {
    titleKey: 'skill.tools.title',
    descriptionKey: 'skill.tools.description',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Figma'],
    icon: 'tools',
    accent: 'emerald',
  },
]

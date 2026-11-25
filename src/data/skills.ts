import type { SkillGroup } from '@/types/portfolio'

export const skillGroups: SkillGroup[] = [
  {
    titleKey: 'skill.backend.title',
    descriptionKey: 'skill.backend.description',
    skills: ['Laravel', 'PHP', 'NestJS', 'Node.js', 'Python / FastAPI', 'REST APIs', 'PostgreSQL', 'MySQL', 'Queues & workers'],
    icon: 'server',
    accent: 'blue',
  },
  {
    titleKey: 'skill.frontend.title',
    descriptionKey: 'skill.frontend.description',
    skills: ['Vue 3', 'TypeScript', 'Inertia.js', 'Nuxt', 'Tailwind CSS', 'JavaScript'],
    icon: 'browser',
    accent: 'blue',
  },
  {
    titleKey: 'skill.desktop.title',
    descriptionKey: 'skill.desktop.description',
    skills: ['Flutter', 'Dart', 'Drift / SQLite', 'C#', '.NET', 'WPF', 'MVVM'],
    icon: 'desktop',
    accent: 'purple',
  },
  {
    titleKey: 'skill.ai.title',
    descriptionKey: 'skill.ai.description',
    skills: ['Ollama', 'Whisper', 'Qdrant', 'MCP', 'RAG basics', 'DeepSeek'],
    icon: 'ai',
    accent: 'purple',
  },
  {
    titleKey: 'skill.tools.title',
    descriptionKey: 'skill.tools.description',
    skills: ['Docker', 'GitHub Actions', 'GitLab CI', 'Nginx', 'Caddy', 'Terraform', 'Linux', 'Git', 'Pest', 'Vitest'],
    icon: 'tools',
    accent: 'emerald',
  },
]

import apexFinanceLarge from '@/assets/images/projects/apex-finance-1280.webp'
import apexFinanceSmall from '@/assets/images/projects/apex-finance-768.webp'
import apexFinanceMobileLarge from '@/assets/images/projects/apex-finance-mobile-384.webp'
import apexFinanceMobileSmall from '@/assets/images/projects/apex-finance-mobile-320.webp'
import ecommerceLarge from '@/assets/images/projects/ecomerce-1280.webp'
import ecommerceSmall from '@/assets/images/projects/ecomerce-768.webp'
import microempresasLarge from '@/assets/images/projects/microempresas-1280.webp'
import microempresasSmall from '@/assets/images/projects/microempresas-768.webp'
import parishFlow from '@/assets/images/projects/parish-flow.svg'
import pereArchitecture from '@/assets/images/projects/pere-architecture.svg'
import platformArchitecture from '@/assets/images/projects/platform-architecture.svg'
import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    slug: 'pere',
    titleKey: 'project.pere.title',
    descriptionKey: 'project.pere.description',
    technologies: ['Python', 'FastAPI', 'Ollama', 'Whisper', 'Qdrant', 'Flutter', 'Terraform'],
    highlightKeys: ['project.pere.highlight1', 'project.pere.highlight2'],
    image: {
      small: pereArchitecture,
      large: pereArchitecture,
      type: 'image/svg+xml',
      altKey: 'project.pere.alt',
    },
    linkNoteKey: 'projects.private',
  },
  {
    slug: 'dashboard-platform',
    titleKey: 'project.platform.title',
    descriptionKey: 'project.platform.description',
    technologies: ['Laravel', 'PostgreSQL', 'JavaScript', 'Node.js', 'Playwright', 'Reverb', 'Docker', 'GitHub Actions'],
    highlightKeys: ['project.platform.highlight1', 'project.platform.highlight2'],
    image: {
      small: platformArchitecture,
      large: platformArchitecture,
      type: 'image/svg+xml',
      altKey: 'project.platform.alt',
    },
    linkNoteKey: 'projects.client',
  },
  {
    slug: 'apex-finance',
    titleKey: 'project.finance.title',
    descriptionKey: 'project.finance.description',
    technologies: ['Laravel', 'Vue 3', 'TypeScript', 'MySQL', 'FastAPI', 'Flutter', 'Docker', 'GitHub Actions'],
    highlightKeys: ['project.finance.highlight1', 'project.finance.highlight2'],
    image: {
      small: apexFinanceSmall,
      large: apexFinanceLarge,
      altKey: 'project.finance.desktopAlt',
      mobile: {
        small: apexFinanceMobileSmall,
        large: apexFinanceMobileLarge,
        altKey: 'project.finance.mobileAlt',
      },
    },
    linkNoteKey: 'projects.private',
  },
  {
    slug: 'parish-portal',
    titleKey: 'project.parish.title',
    descriptionKey: 'project.parish.description',
    technologies: ['Laravel 12', 'Tailwind CSS', 'MySQL', 'Reverb', 'Web Push', 'Pest', 'Docker'],
    highlightKeys: ['project.parish.highlight1', 'project.parish.highlight2'],
    image: {
      small: parishFlow,
      large: parishFlow,
      type: 'image/svg+xml',
      altKey: 'project.parish.alt',
    },
    codeUrl: 'https://github.com/cristianoliveira30/ProjJuventudeParoquial',
  },
  {
    slug: 'financas-pessoais',
    titleKey: 'project.micro.title',
    descriptionKey: 'project.micro.description',
    technologies: ['JetStream', 'Laravel', 'Vue.js', 'Tailwind', 'AgGrid.js + AgChart.js'],
    highlightKeys: ['project.micro.highlight1', 'project.micro.highlight2'],
    image: {
      small: microempresasSmall,
      large: microempresasLarge,
      altKey: 'project.micro.alt',
    },
    codeUrl: 'https://github.com/cristianoliveira30/Microempresas',
  },
  {
    slug: 'ecommerce-dropbrasil',
    titleKey: 'project.ecommerce.title',
    descriptionKey: 'project.ecommerce.description',
    technologies: ['PHP', 'MVC', 'MySQL', 'PDO', 'Bootstrap'],
    highlightKeys: ['project.ecommerce.highlight1', 'project.ecommerce.highlight2'],
    image: {
      small: ecommerceSmall,
      large: ecommerceLarge,
      altKey: 'project.ecommerce.alt',
    },
    codeUrl: 'https://github.com/cristianoliveira30/ecomerce',
  },
]

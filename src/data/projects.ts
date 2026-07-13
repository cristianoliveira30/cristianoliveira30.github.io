import apexFinanceLarge from '@/assets/images/projects/apex-finance-1280.webp'
import apexFinanceSmall from '@/assets/images/projects/apex-finance-768.webp'
import apexFinanceMobileLarge from '@/assets/images/projects/apex-finance-mobile-384.webp'
import apexFinanceMobileSmall from '@/assets/images/projects/apex-finance-mobile-320.webp'
import ecommerceLarge from '@/assets/images/projects/ecomerce-1280.webp'
import ecommerceSmall from '@/assets/images/projects/ecomerce-768.webp'
import microempresasLarge from '@/assets/images/projects/microempresas-1280.webp'
import microempresasSmall from '@/assets/images/projects/microempresas-768.webp'
import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
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
    technologies: ['PHP', 'Tailwind CSS', 'MySQL', 'REST API'],
    highlightKeys: ['project.ecommerce.highlight1', 'project.ecommerce.highlight2'],
    image: {
      small: ecommerceSmall,
      large: ecommerceLarge,
      altKey: 'project.ecommerce.alt',
    },
    codeUrl: 'https://github.com/cristianoliveira30/ecomerce',
  },
  {
    slug: 'desktop-finance',
    titleKey: 'project.finance.title',
    statusKey: 'status.development',
    descriptionKey: 'project.finance.description',
    technologies: ['C#', '.NET', 'WPFUI', 'MVVM', 'Dart', 'Flutter', 'LaravelAPI', 'SQLite', 'Docker', 'Kubernetes'],
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
  },
]

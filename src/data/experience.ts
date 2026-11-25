import type { ExperienceItem } from '@/types/portfolio'

export const experience: ExperienceItem[] = [
  {
    id: 'tudo',
    roleKey: 'exp.tudo.role',
    org: 'Tudo Inteligência',
    periodKey: 'exp.tudo.period',
    bulletKeys: ['exp.tudo.b1', 'exp.tudo.b2', 'exp.tudo.b3'],
  },
  {
    id: 'prime',
    roleKey: 'exp.prime.role',
    org: 'Primetech',
    periodKey: 'exp.prime.period',
    bulletKeys: ['exp.prime.b1', 'exp.prime.b2', 'exp.prime.b3'],
  },
  {
    id: 'freelance',
    roleKey: 'exp.freelance.role',
    periodKey: 'exp.freelance.period',
    bulletKeys: ['exp.freelance.b1'],
  },
  {
    id: 'apprentice',
    roleKey: 'exp.apprentice.role',
    org: 'Tudo Conveniência',
    periodKey: 'exp.apprentice.period',
    bulletKeys: ['exp.apprentice.b1'],
  },
]

export const education: ExperienceItem[] = [
  {
    id: 'unama',
    roleKey: 'edu.unama.degree',
    org: 'UNAMA, Belém',
    periodKey: 'edu.unama.period',
    bulletKeys: [],
  },
  {
    id: 'eetepa',
    roleKey: 'edu.eetepa.degree',
    org: 'EETEPA Dr. Celso Malcher, Belém',
    periodKey: 'edu.eetepa.period',
    bulletKeys: [],
  },
]

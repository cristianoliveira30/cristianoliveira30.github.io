# Portfolio — Cristian Oliveira

Portfólio estático desenvolvido com Vue 3, TypeScript, Vite e Tailwind CSS.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm 10+

## Desenvolvimento

```bash
npm install
npm run dev
```

O Vite exibirá a URL local, normalmente `http://localhost:5173`.

## Verificações

```bash
npm run type-check
npm run build
npm run preview
```

O conteúdo de `dist/` é formado apenas por arquivos estáticos e pode ser publicado no GitHub Pages.

## Publicação

O workflow em `.github/workflows/deploy.yml` compila o projeto com Node 22 e publica somente `dist/` no GitHub Pages quando a branch `main` recebe um push.

## Estrutura

```text
src/
├── assets/       # Imagens e ícones locais
├── components/
│   ├── base/     # Primitivos reutilizáveis do Design System
│   └── sections/ # Seções do portfólio
├── composables/  # Comportamentos reutilizáveis
├── constants/    # Configurações e valores imutáveis
├── data/         # Conteúdo tipado do portfólio
├── layouts/      # Estruturas de página
├── styles/       # CSS global e tokens
├── types/        # Tipos compartilhados
├── App.vue       # Composição da página
└── main.ts       # Ponto de entrada
```

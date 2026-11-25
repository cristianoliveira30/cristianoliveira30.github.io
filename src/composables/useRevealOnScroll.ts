import { onBeforeUnmount, onMounted, type Ref } from 'vue'

const REVEAL_SELECTOR = '[data-reveal]'
const STAGGER_MS = 110
const MAX_STAGGER_STEPS = 5

function reveal(element: HTMLElement, order: number): void {
  element.style.setProperty('--reveal-delay', `${Math.min(order, MAX_STAGGER_STEPS) * STAGGER_MS}ms`)
  element.classList.add('is-revealed')
}

export function useRevealOnScroll(root: Readonly<Ref<HTMLElement | null>>): void {
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const elements = root.value?.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)

    if (!elements?.length) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        // Elements entering together are staggered from top to bottom.
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        entering.forEach((entry, order) => {
          reveal(entry.target as HTMLElement, order)
          observer?.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    )

    let initialOrder = 0

    elements.forEach((element) => {
      const { top, bottom } = element.getBoundingClientRect()
      const isInitiallyVisible = top < window.innerHeight && bottom > 0

      if (isInitiallyVisible) {
        reveal(element, initialOrder++)
        return
      }

      observer?.observe(element)
    })
  })

  onBeforeUnmount(() => observer?.disconnect())
}

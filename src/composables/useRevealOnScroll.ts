import { onBeforeUnmount, onMounted, type Ref } from 'vue'

const REVEAL_SELECTOR = '[data-reveal]'

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
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.remove('is-reveal-pending')
          entry.target.classList.add('is-revealed')
          observer?.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.08,
      },
    )

    elements.forEach((element) => {
      const { top, bottom } = element.getBoundingClientRect()
      const isInitiallyVisible = top < window.innerHeight && bottom > 0

      if (isInitiallyVisible) {
        element.classList.add('is-revealed')
        return
      }

      element.classList.add('is-reveal-pending')
      observer?.observe(element)
    })
  })

  onBeforeUnmount(() => observer?.disconnect())
}

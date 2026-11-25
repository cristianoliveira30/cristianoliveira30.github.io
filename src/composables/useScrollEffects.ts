import { onBeforeUnmount, onMounted } from 'vue'

const PARALLAX_FACTOR = 0.12
const PARALLAX_LIMIT = 900
const SCROLLED_AFTER = 24

// Publishes scroll progress, a small parallax offset and a "scrolled" flag as CSS hooks.
export function useScrollEffects(): void {
  let frame = 0

  const update = () => {
    frame = 0
    const root = document.documentElement
    const max = root.scrollHeight - window.innerHeight
    const y = window.scrollY

    root.style.setProperty('--scroll-progress', max > 0 ? Math.min(1, y / max).toFixed(4) : '0')
    root.style.setProperty('--parallax', (Math.min(y, PARALLAX_LIMIT) * PARALLAX_FACTOR).toFixed(2))
    root.toggleAttribute('data-scrolled', y > SCROLLED_AFTER)
  }

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    if (frame) cancelAnimationFrame(frame)
  })
}

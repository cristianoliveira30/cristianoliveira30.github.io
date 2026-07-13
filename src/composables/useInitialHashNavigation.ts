import { onMounted } from 'vue'

export function useInitialHashNavigation(): void {
  onMounted(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1))

    if (!targetId) return

    requestAnimationFrame(() => {
      const target = document.getElementById(targetId)

      if (!target) return

      document.documentElement.classList.add('scroll-immediate')
      target.scrollIntoView()
      target.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
        element.classList.remove('is-reveal-pending')
        element.classList.add('is-revealed')
      })

      requestAnimationFrame(() => {
        document.documentElement.classList.remove('scroll-immediate')
      })
    })
  })
}

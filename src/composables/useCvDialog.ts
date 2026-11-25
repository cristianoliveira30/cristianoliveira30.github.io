import { ref } from 'vue'

// Shared state so any button on the page can open the single CV dialog.
const isOpen = ref(false)

export function useCvDialog() {
  return {
    isOpen,
    open: () => { isOpen.value = true },
    close: () => { isOpen.value = false },
  }
}

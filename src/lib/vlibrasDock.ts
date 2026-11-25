// Makes the floating VLibras button movable. Dropping it anywhere snaps it to the nearest screen
// edge and remembers the spot; a plain tap still opens VLibras.
// Ported from the Apex Students front end (lib/vlibrasDock.ts + lib/dragDock.ts).

declare global {
  interface Window {
    /** The plugin exposes its floating button (inside a shadow DOM) once it starts. */
    VLibrasWidget?: { access?: HTMLElement; initBtn?: HTMLElement }
  }
}

const DOCK_KEY = 'portfolio-vlibras-dock'
const DOCK_SIZE = 40
const DOCK_MARGIN = 10
const DRAG_THRESHOLD = 6
const NARROW_SCREEN = 640

interface DockPosition {
  side: 'left' | 'right'
  /** Top of the button from 0 (top) to 1 (bottom), already respecting the margins. */
  top: number
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

function dockRange(viewportHeight: number): number {
  return Math.max(1, viewportHeight - DOCK_SIZE - DOCK_MARGIN * 2)
}

/** `x` and `y` are the button centre at drop time. */
function dockPosition(x: number, y: number, viewport: { width: number; height: number }): DockPosition {
  const top = clamp((y - DOCK_SIZE / 2 - DOCK_MARGIN) / dockRange(viewport.height), 0, 1)
  return { side: x < viewport.width / 2 ? 'left' : 'right', top }
}

function dockTopPx(top: number, viewportHeight: number): number {
  return Math.round(DOCK_MARGIN + clamp(top, 0, 1) * dockRange(viewportHeight))
}

function parseDock(raw: string | null): DockPosition | null {
  try {
    const value = JSON.parse(raw ?? 'null') as Partial<DockPosition> | null
    if (value && (value.side === 'left' || value.side === 'right') && typeof value.top === 'number' && Number.isFinite(value.top)) {
      return { side: value.side, top: clamp(value.top, 0, 1) }
    }
  } catch {
    // corrupted value: fall back to the default spot
  }
  return null
}

function readDock(): DockPosition | null {
  try {
    return parseDock(localStorage.getItem(DOCK_KEY))
  } catch {
    return null
  }
}

/** On small screens the plugin's default spot covers text, so start near the bottom edge. */
function initialDock(): DockPosition | null {
  return readDock() ?? (window.innerWidth < NARROW_SCREEN ? { side: 'right', top: 0.96 } : null)
}

/** Inline styles win over the plugin's CSS without touching it. */
function applyDock(access: HTMLElement, button: HTMLElement | undefined, dock: DockPosition): void {
  const left = dock.side === 'left'
  access.style.top = `${dockTopPx(dock.top, window.innerHeight)}px`
  access.style.left = left ? '10px' : 'auto'
  access.style.right = left ? 'auto' : '10px'
  access.style.flexDirection = left ? 'row-reverse' : 'row'
  if (button) {
    button.style.left = left ? '0' : 'auto'
    button.style.right = left ? 'auto' : '0'
  }
}

export function makeDraggable(access: HTMLElement, button: HTMLElement | undefined): () => void {
  let dock = initialDock()
  if (dock) applyDock(access, button, dock)
  access.style.touchAction = 'none'

  let start: { x: number; y: number; dx: number; dy: number } | null = null
  let dragging = false

  const onDown = (event: PointerEvent): void => {
    if (event.button > 0) return
    const rect = access.getBoundingClientRect()
    start = { x: event.clientX, y: event.clientY, dx: event.clientX - rect.left, dy: event.clientY - rect.top }
    dragging = false
  }

  const onMove = (event: PointerEvent): void => {
    if (!start) return
    if (!dragging && Math.hypot(event.clientX - start.x, event.clientY - start.y) < DRAG_THRESHOLD) return
    dragging = true
    // Fixed width while dragging: the plugin's :hover would otherwise widen the button.
    access.style.width = `${DOCK_SIZE}px`
    access.style.right = 'auto'
    access.style.left = `${event.clientX - start.dx}px`
    access.style.top = `${event.clientY - start.dy}px`
  }

  const onUp = (event: PointerEvent): void => {
    if (!start) return
    if (dragging) {
      dock = dockPosition(event.clientX - start.dx + DOCK_SIZE / 2, event.clientY - start.dy + DOCK_SIZE / 2, {
        width: window.innerWidth,
        height: window.innerHeight,
      })
      access.style.width = ''
      applyDock(access, button, dock)
      try {
        localStorage.setItem(DOCK_KEY, JSON.stringify(dock))
      } catch {
        // no storage: the position only lasts for this visit
      }
    }
    start = null
    // Releasing outside the button produces no click: do not swallow the next real tap.
    if (dragging) window.setTimeout(() => (dragging = false), 100)
  }

  // A drag must not open VLibras on release: swallow the click that follows.
  const onClick = (event: Event): void => {
    if (dragging) {
      event.stopPropagation()
      event.preventDefault()
      dragging = false
    }
  }

  const onResize = (): void => {
    if (dock) applyDock(access, button, dock)
  }

  access.addEventListener('pointerdown', onDown)
  access.addEventListener('click', onClick, true)
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', onUp)
  window.addEventListener('resize', onResize)

  return () => {
    access.removeEventListener('pointerdown', onDown)
    access.removeEventListener('click', onClick, true)
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerup', onUp)
    window.removeEventListener('resize', onResize)
  }
}

/** The plugin builds the button a moment after it starts: wait for it to appear. */
export function whenButtonReady(attempt = 0): void {
  const widget = window.VLibrasWidget

  if (widget?.access) {
    makeDraggable(widget.access, widget.initBtn)
    return
  }

  if (attempt < 30) window.setTimeout(() => whenButtonReady(attempt + 1), 100)
}

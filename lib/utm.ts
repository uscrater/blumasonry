// UTM / ad-click capture.
// Captures campaign params on the landing page and persists them in
// sessionStorage so they survive navigation, then attaches them to the
// lead payload on form submit (email + CRM webhook).

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
] as const

const STORAGE_KEY = 'blu_utms'

type Utms = Partial<Record<(typeof UTM_KEYS)[number], string>>

function readFromUrl(): Utms {
  const params = new URLSearchParams(window.location.search)
  const found: Utms = {}
  UTM_KEYS.forEach((k) => {
    const v = params.get(k)
    if (v) found[k] = v
  })
  return found
}

/**
 * Call once on landing. If the URL carries UTM/click params, persist them.
 * First-touch: does not overwrite params already captured this session.
 */
export function captureUtms() {
  if (typeof window === 'undefined') return
  const found = readFromUrl()
  if (Object.keys(found).length === 0) return
  try {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found))
    }
  } catch {
    // sessionStorage unavailable (private mode) — ignore
  }
}

/** Returns the captured UTMs (falls back to the current URL). */
export function getUtms(): Utms {
  if (typeof window === 'undefined') return {}
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored) as Utms
  } catch {
    // ignore
  }
  return readFromUrl()
}

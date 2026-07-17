/**
 * Server-side spam heuristics and field validation for the contact form.
 *
 * These run before the lead reaches the CRM webhook. They are deliberately
 * conservative: a rejected real customer costs far more than an accepted spam
 * lead, so every rule here targets patterns a human effectively never produces.
 */

/** Minimum seconds between form render and submit. Humans take longer. */
const MIN_FILL_SECONDS = 3

/** Upper bound guards against a stale tab replaying an old timestamp. */
const MAX_FILL_SECONDS = 60 * 60 * 6

export interface LeadFields {
  name?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
}

export type GuardResult = { ok: true } | { ok: false; reason: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

/**
 * Detects machine-generated names like "UizXjGlnokSdAozgTIhKO".
 *
 * Real names carry at most one or two internal capitals (McDonald, DeAngelo)
 * and never long consonant runs, so both rules stay clear of legitimate input.
 */
export function looksGenerated(name: string): boolean {
  const trimmed = name.trim()
  if (!trimmed) return true

  for (const token of trimmed.split(/[\s'-]+/)) {
    if (token.length < 6) continue

    // Case flips inside a single token: "xJ", "kS", "gT" …
    let internalCaps = 0
    for (let i = 1; i < token.length; i++) {
      if (/[a-z]/.test(token[i - 1]) && /[A-Z]/.test(token[i])) internalCaps++
    }
    if (internalCaps >= 3) return true

    if (!/[aeiouy]/i.test(token)) return true
    if (/[^aeiouy\W\d]{6,}/i.test(token)) return true
  }

  return false
}

/**
 * Structural NANP check. Does not verify the area code is actually assigned —
 * that needs a maintained registry, and guessing it would reject real leads.
 */
export function isPlausiblePhone(phone: string): boolean {
  let digits = phone.replace(/\D/g, '')
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1)
  if (digits.length !== 10) return false

  // All-same digits: 0000000000, 1111111111 …
  if (/^(\d)\1{9}$/.test(digits)) return false

  const area = digits.slice(0, 3)
  const exchange = digits.slice(3, 6)

  // Area and exchange codes start 2-9; neither may be an N11 service code.
  if (!/^[2-9]/.test(area) || !/^[2-9]/.test(exchange)) return false
  if (area[1] === '1' && area[2] === '1') return false
  if (exchange[1] === '1' && exchange[2] === '1') return false

  return true
}

/** Link-stuffed messages are the classic SEO/backlink spam payload. */
export function hasSpammyMessage(message: string): boolean {
  const links = message.match(/https?:\/\/|www\.|\[url|\[link/gi)
  return (links?.length ?? 0) >= 2
}

/**
 * Rejects a submission that a browser session could not plausibly produce.
 * `honeypot` is a hidden field; `renderedAt` is an epoch-ms stamp from the client.
 */
export function checkBotSignals(honeypot: unknown, renderedAt: unknown): GuardResult {
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    return { ok: false, reason: 'honeypot' }
  }

  const stamp = Number(renderedAt)
  if (!Number.isFinite(stamp) || stamp <= 0) {
    return { ok: false, reason: 'missing-timestamp' }
  }

  const elapsed = (Date.now() - stamp) / 1000
  if (elapsed < MIN_FILL_SECONDS) return { ok: false, reason: 'too-fast' }
  if (elapsed > MAX_FILL_SECONDS) return { ok: false, reason: 'stale-form' }

  return { ok: true }
}

/** Validates the lead fields themselves. Mirrors what the client requires. */
export function validateLead(fields: LeadFields): GuardResult {
  const { name, email, phone, message } = fields

  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
    return { ok: false, reason: 'invalid-name' }
  }
  if (looksGenerated(name)) return { ok: false, reason: 'generated-name' }

  if (typeof phone !== 'string' || !isPlausiblePhone(phone)) {
    return { ok: false, reason: 'invalid-phone' }
  }

  if (email !== undefined && email !== '') {
    if (typeof email !== 'string' || email.length > 200 || !EMAIL_RE.test(email)) {
      return { ok: false, reason: 'invalid-email' }
    }
  }

  if (message !== undefined && message !== '') {
    if (typeof message !== 'string' || message.length > 2000) {
      return { ok: false, reason: 'invalid-message' }
    }
    if (hasSpammyMessage(message)) return { ok: false, reason: 'spammy-message' }
  }

  return { ok: true }
}

/**
 * Same-origin check. Browsers always send Origin on a POST, so a missing or
 * foreign Origin means the request did not come from our own form.
 */
export function isSameOrigin(origin: string | null, host: string | null): boolean {
  if (!origin || !host) return false
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

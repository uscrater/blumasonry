/**
 * Cloudflare Turnstile server-side verification.
 * https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export type TurnstileResult =
  | { ok: true; skipped?: boolean }
  | { ok: false; reason: string }

/**
 * Verifies a Turnstile token.
 *
 * When TURNSTILE_SECRET_KEY is unset the check is skipped so local development
 * and preview builds keep working without Cloudflare credentials. Production
 * must have the key set — the other guards still apply either way.
 */
export async function verifyTurnstile(
  token: unknown,
  ip?: string
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.warn('TURNSTILE_SECRET_KEY not set — skipping captcha verification')
    return { ok: true, skipped: true }
  }

  if (typeof token !== 'string' || !token) {
    // Fail open on a missing token: for a real visitor this usually means the
    // widget failed to load (ad blocker, flaky network), and silently dropping
    // a genuine lead is worse than letting it through. The honeypot, time-trap,
    // origin and field-validation layers still apply — a bot that simply omits
    // the token faces all of them. We only hard-block a token that Cloudflare
    // actively reports as invalid (below).
    console.warn('Turnstile token missing — deferring to other guards')
    return { ok: true, skipped: true }
  }

  const body = new URLSearchParams({ secret, response: token })
  if (ip && ip !== 'unknown') body.set('remoteip', ip)

  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })

    if (!res.ok) {
      console.error('Turnstile verify HTTP error:', res.status)
      return { ok: false, reason: 'verify-unavailable' }
    }

    const data = (await res.json()) as {
      success: boolean
      'error-codes'?: string[]
    }

    if (!data.success) {
      return { ok: false, reason: (data['error-codes'] ?? ['rejected']).join(',') }
    }

    return { ok: true }
  } catch (err) {
    console.error('Turnstile verify error:', err)
    return { ok: false, reason: 'verify-unavailable' }
  }
}

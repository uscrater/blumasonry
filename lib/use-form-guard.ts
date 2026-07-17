'use client'

import { useCallback, useRef, useState } from 'react'

/**
 * Client half of the anti-spam guards, shared by every contact form.
 *
 * Provides the render timestamp (time-trap), the honeypot field binding, and
 * the Turnstile token. Spread `guardPayload()` into the request body.
 */
export function useFormGuard() {
  const renderedAtRef = useRef(Date.now())
  const [honeypot, setHoneypot] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')

  const guardPayload = useCallback(
    () => ({
      // Field name is innocuous on purpose — bots fill what looks real.
      company_website: honeypot,
      renderedAt: renderedAtRef.current,
      turnstileToken,
    }),
    [honeypot, turnstileToken]
  )

  /** Call after a successful submit so a resubmit gets a fresh time window. */
  const resetGuard = useCallback(() => {
    renderedAtRef.current = Date.now()
    setTurnstileToken('')
  }, [])

  return {
    honeypot,
    setHoneypot,
    setTurnstileToken,
    guardPayload,
    resetGuard,
  }
}

/** Props for the hidden honeypot input. Hidden from humans and screen readers. */
export const honeypotFieldProps = {
  type: 'text' as const,
  name: 'company_website',
  tabIndex: -1,
  autoComplete: 'off',
  'aria-hidden': true,
  style: {
    position: 'absolute' as const,
    left: '-9999px',
    width: '1px',
    height: '1px',
    opacity: 0,
    pointerEvents: 'none' as const,
  },
}

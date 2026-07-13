// Analytics helpers — push events into the GTM dataLayer.
// The actual pixels (Meta, GA4, Google Ads) are configured inside the
// GTM container (GTM-TTG2VX7P) and triggered by these custom events,
// so pixel IDs live in GTM, not in this codebase.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

interface LeadPayload {
  /** Which form / page produced the lead, e.g. "Homepage — Contact Section" */
  source: string
  /** Selected service, when available */
  service?: string
}

/**
 * Fires a lead-conversion event. GTM listens for `generate_lead` and fans it
 * out to Meta Pixel (Lead), GA4 (generate_lead) and Google Ads conversion.
 */
export function trackLead({ source, service }: LeadPayload) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'generate_lead',
    lead_source: source,
    lead_service: service || 'not_specified',
  })
}

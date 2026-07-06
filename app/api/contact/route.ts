import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { rateLimit } from '../../../lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key')

/**
 * Sanitize user input to prevent XSS in the email HTML template.
 * Escapes HTML special characters.
 */
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  try {
    // Rate limiting: 5 requests per minute per IP
    const headersList = headers()
    const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || headersList.get('x-real-ip') 
      || 'unknown'

    const { success, remaining } = rateLimit(ip, { maxRequests: 5, windowMs: 60_000 })

    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before trying again.' },
        { 
          status: 429,
          headers: { 'Retry-After': '60' }
        }
      )
    }

    const body = await req.json()
    const { name, email, phone, street, number, zip, city, state, service, message, source } = body

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required.' },
        { status: 400 }
      )
    }

    // Sanitize all user inputs before interpolating into HTML
    const safeName = sanitizeHtml(String(name).slice(0, 100))
    const safeEmail = email ? sanitizeHtml(String(email).slice(0, 200)) : ''
    const safePhone = sanitizeHtml(String(phone).slice(0, 30))
    const safeCity = city ? sanitizeHtml(String(city).slice(0, 100)) : ''
    const safeState = state ? sanitizeHtml(String(state).slice(0, 30)) : ''
    const safeStreet = street ? sanitizeHtml(String(street).slice(0, 200)) : ''
    const safeNumber = number ? sanitizeHtml(String(number).slice(0, 50)) : ''
    const safeZip = zip ? sanitizeHtml(String(zip).slice(0, 30)) : ''
    const safeService = service ? sanitizeHtml(String(service).slice(0, 100)) : ''
    const safeMessage = message ? sanitizeHtml(String(message).slice(0, 2000)) : ''
    const safeSource = source ? sanitizeHtml(String(source).slice(0, 100)) : 'Website'

    const serviceLabel = safeService || 'Not specified'
    const sourceLabel = safeSource || 'Website'
    const contactEmail = process.env.CONTACT_EMAIL || 'sales@blumasonry.com'

    const { data, error } = await resend.emails.send({
      from: 'Blu Masonry Website <noreply@blumasonry.com>',
      to: [contactEmail],
      replyTo: safeEmail || undefined,
      subject: `🔔 New Lead — ${safeName} | ${serviceLabel}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #060D1C; border-radius: 16px; overflow: hidden; border: 1px solid rgba(228,185,115,0.3);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #E4B973, #DBA143); padding: 32px 40px; text-align: center;">
            <h1 style="color: #060D1C; font-size: 22px; font-weight: 800; margin: 0; text-transform: uppercase; letter-spacing: 0.1em;">
              New Project Inquiry
            </h1>
            <p style="color: rgba(6,13,28,0.7); font-size: 13px; margin: 8px 0 0; font-weight: 600;">
              Submitted from ${sourceLabel}
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 40px;">
            
            <!-- Contact Info -->
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <span style="color: #E4B973; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; display: block; margin-bottom: 6px;">Contact Name</span>
                  <span style="color: #ffffff; font-size: 18px; font-weight: 700;">${safeName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <span style="color: #E4B973; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; display: block; margin-bottom: 6px;">Phone</span>
                  <a href="tel:${safePhone}" style="color: #ffffff; font-size: 18px; font-weight: 700; text-decoration: none;">${safePhone}</a>
                </td>
              </tr>
              ${safeEmail ? `
              <tr>
                <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <span style="color: #E4B973; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; display: block; margin-bottom: 6px;">Email</span>
                  <a href="mailto:${safeEmail}" style="color: #ffffff; font-size: 18px; font-weight: 700; text-decoration: none;">${safeEmail}</a>
                </td>
              </tr>
              ` : ''}
              ${safeStreet || safeCity || safeState ? `
              <tr>
                <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <span style="color: #E4B973; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; display: block; margin-bottom: 6px;">Address</span>
                  <span style="color: #ffffff; font-size: 16px; font-weight: 600;">
                    ${safeStreet}${safeNumber ? ' ' + safeNumber : ''}<br/>
                    ${[safeCity, safeState, safeZip].filter(Boolean).join(', ')}
                  </span>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <span style="color: #E4B973; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; display: block; margin-bottom: 6px;">Service Requested</span>
                  <span style="color: #ffffff; font-size: 16px; font-weight: 600;">${serviceLabel}</span>
                </td>
              </tr>
              ${safeMessage ? `
              <tr>
                <td style="padding: 16px 0;">
                  <span style="color: #E4B973; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; display: block; margin-bottom: 6px;">Project Details</span>
                  <p style="color: rgba(255,255,255,0.8); font-size: 15px; line-height: 1.7; margin: 0;">${safeMessage}</p>
                </td>
              </tr>
              ` : ''}
            </table>


            <!-- Quick Action -->
            <div style="margin-top: 32px; text-align: center;">
              <a href="tel:${safePhone}" style="display: inline-block; background: #E4B973; color: #060D1C; padding: 14px 40px; border-radius: 8px; font-weight: 800; text-decoration: none; text-transform: uppercase; letter-spacing: 0.15em; font-size: 13px;">
                📞 Call ${safeName} Now
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: rgba(255,255,255,0.03); padding: 20px 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
            <p style="color: rgba(255,255,255,0.3); font-size: 11px; margin: 0;">
              Blu Masonry Inc. • 43 Lupine Rd, Andover MA 01810 • blumasonry.com
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { headers: { 'X-RateLimit-Remaining': String(remaining) } }
    )
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}

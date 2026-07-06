/**
 * Simple in-memory rate limiter for API routes.
 * Limits requests per IP within a time window.
 * 
 * Note: In serverless (Vercel), each function instance has its own memory,
 * so this provides per-instance limiting. For stricter limits, use
 * Vercel KV or Upstash Redis.
 */

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}, 5 * 60 * 1000)

interface RateLimitOptions {
  /** Max number of requests allowed in the window */
  maxRequests?: number
  /** Time window in milliseconds */
  windowMs?: number
}

export function rateLimit(
  ip: string,
  options: RateLimitOptions = {}
): { success: boolean; remaining: number } {
  const { maxRequests = 5, windowMs = 60 * 1000 } = options // 5 requests per minute default
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return { success: true, remaining: maxRequests - 1 }
  }

  if (record.count >= maxRequests) {
    return { success: false, remaining: 0 }
  }

  record.count++
  return { success: true, remaining: maxRequests - record.count }
}

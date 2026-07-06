'use client'

import React, { useState, useEffect, useRef } from 'react'

interface LazySectionProps {
  children: React.ReactNode
  height?: string
}

export default function LazySection({ children, height = '100px' }: LazySectionProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Avoid running on server side (just in case)
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' } // Preload when the section is within 300px of the viewport
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ minHeight: isIntersecting ? 'auto' : height }}>
      {isIntersecting ? children : null}
    </div>
  )
}

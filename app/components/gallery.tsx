'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const galleryImages = [


  '/images/gallery/01.webp',
  '/images/gallery/02.webp',
  '/images/gallery/03.webp',
  '/images/gallery/04.webp',
  '/images/gallery/05.webp',
  '/images/gallery/06.webp',
  '/images/gallery/07.webp',
  '/images/gallery/08.webp',
  '/images/gallery/09.webp',
  '/images/gallery/10.webp',
  '/images/gallery/11.webp',
  '/images/gallery/12.webp',
  '/images/gallery/13.webp',
  '/images/gallery/14.webp',
  '/images/gallery/15.webp',
  '/images/gallery/16.webp',


]

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isClient, setIsClient] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => { setIsClient(true) }, [])

  const row1 = galleryImages.slice(0, 14)
  const row2 = galleryImages.slice(14)

  return (
    <LazyMotion features={domAnimation}>
    <section ref={ref} className="bg-dark-navy py-16 overflow-hidden">
      {isClient && (
        <>
          {/* Row 1 - scrolls left */}
          <div className="relative w-full overflow-hidden mb-4">
            <div className="flex gap-4 animate-scroll-left" style={{ width: 'max-content' }}>
              {[...row1, ...row1].map((src: string, i: number) => (
                <m.div
                  key={`r1-${i}`}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: Math.min(i * 0.02, 0.5) }}
                  className="relative flex-shrink-0 w-[250px] h-[180px] md:w-[300px] md:h-[220px] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setLightbox(i % row1.length)}
                >
                  <Image src={src} alt={`Blu Masonry project ${(i % row1.length) + 1}`} fill className="object-cover" sizes="(max-width: 768px) 250px, 300px" />
                </m.div>
              ))}
            </div>
          </div>
          {/* Row 2 - scrolls left (different speed via duplicated content) */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex gap-4"
              style={{
                width: 'max-content',
                animation: 'scroll-left 80s linear infinite',
              }}
            >
              {[...row2, ...row2, ...row2].map((src: string, i: number) => (
                <div
                  key={`r2-${i}`}
                  className="relative flex-shrink-0 w-[250px] h-[180px] md:w-[300px] md:h-[220px] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setLightbox((i % row2.length) + 14)}
                >
                  <Image src={src} alt={`Blu Masonry project ${(i % row2.length) + 15}`} fill className="object-cover" sizes="(max-width: 768px) 250px, 300px" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-4xl h-[90vh]">
            <Image
              src={galleryImages[lightbox] ?? ''}
              alt="Blu Masonry project full view"
              fill
              className="object-contain rounded-lg"
              sizes="100vw"
              priority
            />
          </div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white text-2xl font-bold bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20"
            aria-label="Close lightbox"
          >
            ×
          </button>
        </div>
      )}
    </section>
    </LazyMotion>
  )
}

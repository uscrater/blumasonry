'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeftRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

// Array centralizado para o cliente adicionar novas fotos facilmente
const sliderData = [
  {
    id: 1,
    beforeSrc: "/images/before-after/before-1.jpg",
    afterSrc: "/images/before-after/after-1.jpg",
    beforeAlt: "Before renovation - original stairs",
    afterAlt: "After renovation - new stone stairs by Blu Masonry",
  },
  {
    id: 2,
    beforeSrc: "/images/before-after/before-2.png",
    afterSrc: "/images/before-after/after-2.png",
    beforeAlt: "Before renovation - original masonry",
    afterAlt: "After renovation - premium masonry by Blu Masonry",
  },
  {
    id: 3,
    beforeSrc: "/images/before-after/before - 1.jpeg",
    afterSrc: "/images/before-after/After - 1.jpeg",
    beforeAlt: "Before renovation - original stairs",
    afterAlt: "After renovation - new stone stairs by Blu Masonry",
  },
]

function Slider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: { beforeSrc: string; afterSrc: string; beforeAlt: string; afterAlt: string }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef?.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const handleMouseDown = useCallback(() => { isDragging.current = true }, [])
  const handleMouseUp = useCallback(() => { isDragging.current = false }, [])
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX)
  }, [updatePosition])
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches?.[0]
    if (touch) updatePosition(touch.clientX)
  }, [updatePosition])

  return (
    <div
      ref={containerRef}
      // swiper-no-swiping PREVENTS the before/after drag from triggering a carousel slide!
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none bg-dark-navy swiper-no-swiping border border-[#E4B973]/20 shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After (full bg) */}
      <Image 
        src={afterSrc} 
        alt={afterAlt} 
        fill 
        className="object-cover" 
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      {/* Before (clipped) */}
      <div className="absolute inset-0 z-10" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image 
          src={beforeSrc} 
          alt={beforeAlt} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      
      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-[4px] bg-[#E4B973] z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#E4B973] rounded-full flex items-center justify-center shadow-xl border-4 border-white">
          <ArrowLeftRight size={18} className="text-dark-navy" strokeWidth={3} />
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/swiper-custom.css'
    document.head.appendChild(link)
    return () => {
      const el = document.querySelector(`link[href="/swiper-custom.css"]`)
      if (el && el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <section id="before-after" ref={ref} className="bg-dark-navy pt-4 pb-8 lg:pt-6 lg:pb-10 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-4 lg:mb-16"
          >
            <h2 className="font-roboto text-[28px] md:text-[36px] font-bold text-white tracking-wide">
              EXPLORE THE <span className="text-[#E4B973]">TRANSFORMATION</span>
            </h2>
            <p className="font-poppins text-white/70 mt-3 text-[14px] md:text-[16px]">
              Drag the slider arrows to see the <span className="text-red-500 font-medium">before</span> and <span className="text-[#E4B973] font-medium">after</span>.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 } // Shows 2 side-by-side on Tablets and Desktop
              }}
              navigation={{
                nextEl: '.ba-next',
                prevEl: '.ba-prev',
              }}
              className="pt-0 pb-4 lg:py-4"
            >
              {sliderData.map((item) => (
                <SwiperSlide key={item.id}>
                  <Slider
                    beforeSrc={item.beforeSrc}
                    afterSrc={item.afterSrc}
                    beforeAlt={item.beforeAlt}
                    afterAlt={item.afterAlt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows Below Grid */}
            <div className="flex justify-center items-center gap-6 mt-12">
              <button className="ba-prev w-14 h-14 rounded-full border-2 border-[#E4B973]/30 flex items-center justify-center text-[#E4B973] hover:bg-[#E4B973] hover:text-dark-navy hover:shadow-[0_0_20px_rgba(228,185,115,0.4)] transition-all z-10">
                <ChevronLeft size={28} strokeWidth={2.5} />
              </button>
              <button className="ba-next w-14 h-14 rounded-full border-2 border-[#E4B973]/30 flex items-center justify-center text-[#E4B973] hover:bg-[#E4B973] hover:text-dark-navy hover:shadow-[0_0_20px_rgba(228,185,115,0.4)] transition-all z-10">
                <ChevronRight size={28} strokeWidth={2.5} />
              </button>
            </div>

          </m.div>
        </div>
      </section>
    </LazyMotion>
  )
}

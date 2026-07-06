'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Instagram, ArrowRight } from 'lucide-react'

// Using some of your WordPress assets as post placeholders
const instaPosts1 = [
  '/INSTAGRAM/FD 27.png',
  '/INSTAGRAM/FD 33.png',
  '/INSTAGRAM/FD 20.png',
  '/INSTAGRAM/FD 16.png',
  '/INSTAGRAM/FD 11.png',
  '/INSTAGRAM/06capa.jpg',
]

const instaPosts2 = [
  '/INSTAGRAM/Blumasonry - 16_01 (Feed).jpg',
  '/INSTAGRAM/Blumasonry - 11_01 (Feed).jpg',
  '/INSTAGRAM/Blumasonry - 09_01 (Feed).jpg',
  '/INSTAGRAM/Blumasonry - 04_01 (Feed).jpg',
  '/INSTAGRAM/FD 09.png',
  '/INSTAGRAM/FD 04.png',
]

export default function InstagramFeed() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  
  // Duplicated enough to cover the screen width for smooth marquee
  const duplicatedPosts1 = [...instaPosts1, ...instaPosts1, ...instaPosts1]
  const duplicatedPosts2 = [...instaPosts2, ...instaPosts2, ...instaPosts2]

  return (
    <LazyMotion features={domAnimation}>
      <section ref={ref} id="instagram" className="bg-[#060D1C] pt-12 pb-16 relative overflow-hidden">
        
        {/* Background Ornaments (Subtle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E4B973]/3 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* HEADER: Editorial Centered Style */}
        <div className="max-w-[1400px] mx-auto px-6 text-center mb-16 relative z-10">
          
          {/* Live Indicator Badge */}
          <m.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={inView ? { opacity: 1, scale: 1 } : {}}
             className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#EA4335] animate-pulse" />
            <span className="font-poppins text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase">
               Live From The Field
            </span>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center px-4 py-1.5 border border-[#E4B973]/20 rounded-full bg-[#E4B973]/5 backdrop-blur-sm mx-auto"
          >
            <span className="font-poppins text-[#E4B973] text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
              Stay Connected
            </span>
          </m.div>

          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-roboto text-[32px] md:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Behind the <span className="text-[#E4B973] italic font-light whitespace-nowrap">Scenes</span>
          </m.h2>
          
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-poppins text-white/40 text-[15px] md:text-[18px] mb-10 leading-relaxed max-w-[650px] mx-auto"
          >
            Follow our daily project updates as we transform New England properties with quality craftsmanship and care.
          </m.p>

          <m.a 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            href="https://instagram.com/blumasonry" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-transparent border border-[#E4B973]/50 text-[#E4B973] font-bold text-[13px] md:text-[14px] tracking-widest uppercase rounded-full hover:bg-[#E4B973] hover:text-dark-navy transition-all duration-300"
          >
            @blumasonry
            <ArrowRight size={18} />
          </m.a>
        </div>

        {/* DOUBLE ROW MARQUEE */}
        <div className="relative w-full flex flex-col gap-4 pb-8 overflow-visible">
          {/* ROW 1: Scrolls Left */}
          <div className="flex gap-4 animate-scroll-left" style={{ width: 'max-content' }}>
            {duplicatedPosts1.map((src, i) => (
              <a 
                key={`r1-${i}`} 
                href="https://instagram.com/blumasonry"
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] rounded-2xl overflow-hidden border border-white/5 bg-[#0a1224]/50 backdrop-blur-sm relative group cursor-pointer shadow-2xl transition-all duration-500 hover:border-white/20"
              >
                <Image 
                  src={src} 
                  alt={`Instagram Post ${i}`} 
                  width={260}
                  height={260}
                  sizes="(max-width: 768px) 200px, 260px"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-60" 
                />
                {/* Card Overlay on Hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none p-6">
                  <Instagram size={24} className="text-[#E4B973] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="text-white font-bold text-[11px] tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    @blumasonry
                  </span>
                </div>
                {/* Subtle top light bar */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </a>
            ))}
          </div>

          {/* ROW 2: Scrolls Right */}
          <div className="flex gap-4 animate-scroll-right" style={{ width: 'max-content', marginLeft: '-50vw' }}>
            {duplicatedPosts2.map((src, i) => (
              <a 
                key={`r2-${i}`} 
                href="https://instagram.com/blumasonry"
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] rounded-2xl overflow-hidden border border-white/5 bg-[#0a1224]/50 backdrop-blur-sm relative group cursor-pointer shadow-2xl transition-all duration-500 hover:border-white/20"
              >
                <Image 
                  src={src} 
                  alt={`Beautiful stonework and hardscaping updates by Blu Masonry - instagram feed ${i + 1}`} 
                  width={260}
                  height={260}
                  sizes="(max-width: 768px) 200px, 260px"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-60" 
                />
                {/* Card Overlay on Hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none p-6">
                  <Instagram size={24} className="text-[#E4B973] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="text-white font-bold text-[11px] tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    @blumasonry
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </a>
            ))}
          </div>

          {/* VIGNETTE GRADIENTS FOR SEAMLESS FADING */}
          <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#060D1C] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#060D1C] to-transparent z-10 pointer-events-none" />
        </div>

      </section>
    </LazyMotion>
  )
}

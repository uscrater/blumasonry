'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Phone, Calendar, Shield, Star } from 'lucide-react'

export default function FinalCta() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative overflow-hidden"
        style={{ minHeight: '600px' }}
      >
        {/* FLAG — Optimized background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/flag-bg.webp"
            alt="American Flag background"
            fill
            quality={30}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Eagle — Restored to original style */}
        <div className="absolute inset-0 z-[1] w-full lg:w-[52%] h-full">
          <Image 
            src="/eagle-bg.webp"
            alt="Eagle branding watermark"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
        </div>

        {/* Dark overlay — dims the flag for readability on right side */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          {/* Mobile Gradient (Bottom to Top) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1C] via-[#060D1C]/90 to-[#060D1C]/30 lg:hidden" />
          
          {/* Desktop Gradient (Left to Right) */}
          <div 
            className="absolute inset-0 hidden lg:block"
            style={{
              background: 'linear-gradient(to right, rgba(6,13,28,0.3) 0%, rgba(6,13,28,0.5) 35%, rgba(6,13,28,0.85) 55%, rgba(6,13,28,0.95) 100%)',
            }}
          />
        </div>

        {/* Top seamless gradient — eliminates the seam with service-area */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#060D1C] via-[#060D1C]/80 to-transparent z-20 pointer-events-none" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 py-28 flex flex-col lg:flex-row items-center justify-end">

          {/* CTA BLOCK — slightly wider so it overlaps eagle beak area */}
          <div className="w-full lg:w-[58%] text-center lg:text-left">

            {/* Trust Badges */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-10"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-full">
                <Shield size={13} className="text-[#E4B973]" />
                <span className="font-poppins text-white/90 text-xs font-medium tracking-wide">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-full">
                <Star size={13} className="text-[#E4B973] fill-[#E4B973]" />
                <span className="font-poppins text-white/90 text-xs font-medium tracking-wide">5.0 Google Rating</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-full">
                <span className="font-poppins text-white/90 text-xs font-medium tracking-wide">🇺🇸 Proudly American</span>
              </div>
            </m.div>

            {/* Main Headline */}
            <m.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-roboto text-[38px] md:text-[56px] font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-2xl"
            >
              Built Once.<br />
              Built Right.<br />
              <span className="text-[#E4B973]">Built To Last.</span>
            </m.h2>

            {/* Subheadline */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-poppins text-[16px] md:text-[18px] text-white/70 mb-10 max-w-[460px] leading-relaxed drop-shadow-lg"
            >
              Book your <span className="text-white font-semibold">Free Inspection</span> today — limited slots available. Our team is ready to transform your property.
            </m.p>

            {/* CTA Buttons */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#Contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E4B973] text-[#060D1C] font-roboto font-extrabold text-[14px] tracking-widest uppercase rounded-md shadow-[0_0_30px_rgba(228,185,115,0.5)] hover:shadow-[0_0_50px_rgba(228,185,115,0.7)] hover:-translate-y-1 transition-all duration-300"
              >
                <Calendar size={18} />
                Schedule Free Inspection
              </a>

              <a
                href="tel:7816276932"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black/30 backdrop-blur-sm text-white font-roboto font-bold text-[14px] tracking-widest uppercase rounded-md border border-white/25 hover:border-white/60 hover:bg-black/50 hover:-translate-y-1 transition-all duration-300"
              >
                <Phone size={18} className="text-[#E4B973]" />
                781-627-6932
              </a>
            </m.div>

            {/* Tagline */}
            <m.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-10 font-roboto text-[13px] text-white/25 tracking-[0.3em] uppercase drop-shadow"
            >
              Blu Masonry · Building Dreams
            </m.p>

          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

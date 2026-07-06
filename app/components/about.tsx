'use client'

import { useState, useRef, useEffect } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Volume2, VolumeX } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [isMuted, setIsMuted] = useState(true)
  const videoRefMobile = useRef<HTMLVideoElement>(null)
  const videoRefDesktop = useRef<HTMLVideoElement>(null)

  // Only play video when section is visible
  useEffect(() => {
    if (inView) {
      const isDesktop = window.innerWidth >= 1024
      
      if (videoRefMobile.current) {
        if (!isDesktop) videoRefMobile.current.play().catch(() => {})
        else videoRefMobile.current.pause()
      }
      
      if (videoRefDesktop.current) {
        if (isDesktop) videoRefDesktop.current.play().catch(() => {})
        else videoRefDesktop.current.pause()
      }
    } else {
      if (videoRefMobile.current) videoRefMobile.current.pause()
      if (videoRefDesktop.current) videoRefDesktop.current.pause()
    }
  }, [inView])

  // Sync mute state and ensure only the visible one plays audio to avoid echo
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024 // Matches tailwind 'lg' breakpoint

    if (videoRefMobile.current) {
      videoRefMobile.current.muted = isMuted || isDesktop
    }
    if (videoRefDesktop.current) {
      videoRefDesktop.current.muted = isMuted || !isDesktop
    }
  }, [isMuted])

  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="AboutUs"
        ref={ref}
        className="pt-8 pb-6 md:pb-20 relative"
      >
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Section Label */}
          <m.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="shimmer-text font-poppins text-[14px] md:text-[16px] font-semibold tracking-wider uppercase mb-8"
          >
            About Blu Masonry Inc.
          </m.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
            {/* Left Column on Desktop / Main Flow on Mobile */}
            <div className="flex flex-col">
              <m.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="font-roboto text-[24px] md:text-[30px] font-semibold text-gold leading-snug mb-6">
                  A family legacy transformed into a high-performance construction company.
                </h2>
              </m.div>

              {/* Video Block - Visible ONLY on Mobile/Tablet, Hidden on Desktop (lg) */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative mb-10 lg:hidden"
              >
                <div className="rounded-lg overflow-hidden shadow-2xl relative border border-white/10 w-full aspect-[9/16]">
                  <video
                    ref={videoRefMobile}
                    src="/about2.mp4"
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Mute/Unmute Toggle */}
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-gold hover:text-dark-navy transition-all duration-300 group shadow-xl"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX size={20} className="group-hover:scale-110 transition-transform" />
                    ) : (
                      <Volume2 size={20} className="group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                </div>
              </m.div>

              {/* Rest of the Text Content */}
              <m.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <ul className="space-y-2 mb-8">
                  {['Engineering-level expertise', 'Clear communication, no shortcuts', 'A premium experience from start to finish'].map((item: string, i: number) => (
                    <li key={i} className="font-roboto text-[16px] md:text-[18px] font-light text-muted-white flex items-start gap-2">
                      <span className="text-gold mt-1">—</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="space-y-5 font-roboto text-[18px] md:text-[20px] font-normal text-white leading-7 mb-10">
                  <p>
                    We are authorized installers for Techo-Bloc and Unilock, delivering high-end masonry, hardscape, and structural solutions. Every installation uses premium-grade components sourced from our trusted partners, advanced systems, and in-depth technical planning — always fully compliant with U.S. building codes.
                  </p>
                  <p>
                    At Blu Masonry, every project is fully customized, carefully engineered, and executed with precision, transparency, and complete respect for your home and investment.
                  </p>
                  <p>
                    We don&apos;t just build structures. We deliver peace of mind. We protect your home.
                  </p>
                </div>

                {/* Call To Action Button */}
                <m.a
                  href="#Contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gold text-dark-navy font-semibold text-[14px] md:text-[16px] tracking-widest uppercase rounded-sm shadow-xl hover:shadow-gold/20 transition-all w-fit"
                >
                  Request a Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </m.a>
              </m.div>
            </div>

            {/* Video Block - Visible ONLY on Desktop (lg) */}
            <m.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative lg:pl-4 hidden lg:flex flex-col h-full"
            >
              <div className="rounded-lg overflow-hidden shadow-2xl relative border border-white/10 w-full flex-1 min-h-[350px]">
                <video
                  ref={videoRefDesktop}
                  src="/about2.mp4"
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Mute/Unmute Toggle */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-6 right-6 z-20 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-gold hover:text-dark-navy transition-all duration-300 group shadow-xl"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX size={24} className="group-hover:scale-110 transition-transform" />
                  ) : (
                    <Volume2 size={24} className="group-hover:scale-110 transition-transform" />
                  )}
                </button>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

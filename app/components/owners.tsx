'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export default function Owners() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="pb-6 md:pb-10 pt-6 md:pt-16 relative"
      >
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Section Header */}
          <div className="w-full mb-10 text-center">
            <p className="font-sora text-[12px] md:text-[14px] font-semibold text-gold tracking-widest uppercase mb-4">
              Blu Masonry Inc.
            </p>
            <h2 className="shimmer-text font-roboto text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-tight">
              The Leadership Behind The Craft.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Side: Editorial Portraits - Order 2 on mobile, Column 1 on desktop */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full flex flex-col items-center lg:items-start order-1"
            >

              <div className="w-full max-w-[500px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/5 relative">
                <Image
                  src="/THAYNARAEVICTOR.png"
                  alt="Thaynara and Victor - Owners"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </m.div>

            {/* Side: Editorial Text - Order 3 on mobile, Column 2 on desktop */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 lg:pl-16 flex flex-col justify-center order-2"
            >

              <div className="space-y-12">
                {/* Thaynara Bio */}
                <div>
                  <h3 className="font-roboto text-[24px] md:text-[28px] font-semibold text-white mb-2">
                    Thaynara 
                    <span className="inline-block text-gold font-light tracking-[0.2em] text-[13px] md:text-[15px] align-middle ml-4">
                      — CFO
                    </span>
                  </h3>
                  <p className="font-roboto text-[16px] md:text-[18px] text-white/70 leading-[1.8] font-light max-w-[90%]">
                    Responsible for the company&apos;s financial management, Thaynara oversees administrative operations, contracts, payments, and cost control. Her strict attention to detail ensures organizational transparency and security across every building process.
                  </p>
                </div>

                {/* Minimalist Divider */}
                <div className="w-16 h-[2px] bg-gold/50 rounded-full"></div>

                {/* Victor Bio */}
                <div>
                  <h3 className="font-roboto text-[24px] md:text-[28px] font-semibold text-white mb-2">
                    Victor
                    <span className="inline-block text-gold font-light tracking-[0.2em] text-[13px] md:text-[15px] align-middle ml-4">
                      — CEO
                    </span>
                  </h3>
                  <p className="font-roboto text-[16px] md:text-[18px] text-white/70 leading-[1.8] font-light max-w-[90%]">
                    The driving force behind job site execution. Victor directly manages high-end projects, teams, and field operations, personally overseeing each stage of construction to guarantee absolute quality, on-time delivery, and clear client communication.
                  </p>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { CalendarDays, FileText, Settings, Hammer, Award, ArrowRight } from 'lucide-react'

const steps = [
  { 
    icon: CalendarDays, 
    title: 'Schedule a Free Inspection', 
    desc: 'Expert site assessment and technical analysis to identify structural needs and design possibilities.'
  },
  { 
    icon: FileText, 
    title: 'Receive a Detailed, Transparent Quote', 
    desc: 'Clear, itemized engineering plan with transparent pricing and defined project phases.'
  },
  { 
    icon: Settings, 
    title: 'We Coordinate Everything', 
    desc: 'Strategic management of permits, sourcing from trusted suppliers, and full operational logistics.'
  },
  { 
    icon: Hammer, 
    title: 'Execution With Precision', 
    desc: 'Custom construction by specialized crews adhering to professional masonry and structural standards.'
  },
  { 
    icon: Award, 
    title: 'Final Walkthrough + Warranty', 
    desc: 'Final rigorous walkthrough, site sanitation, and activation of your workmanship warranty.'
  },
]

export default function ProcessSteps() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <LazyMotion features={domAnimation}>
      <section id="Process" ref={ref} className="bg-[#060D1C] pt-8 md:pt-12 pb-12 md:pb-16 relative overflow-hidden">
        
        {/* Editorial Background Elements - Optimized */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image 
            src="/blueprint-bg.webp"
            alt="Blueprint background pattern"
            fill
            className="object-cover object-center opacity-[0.04] md:opacity-[0.07] mix-blend-screen"
            sizes="100vw"
          />
          {/* Gradients to fade the edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#060D1C] via-transparent to-[#060D1C]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1C] via-transparent to-[#060D1C]" />
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E4B973]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E4B973]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          
          {/* HEADER: Centered Editorial Style */}
          <div className="flex flex-col items-center justify-center text-center mb-20 gap-6">
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center px-4 py-1.5 border border-[#E4B973]/20 rounded-full bg-[#E4B973]/5 backdrop-blur-sm"
            >
              <span className="font-poppins text-[#E4B973] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
                Our Process
              </span>
            </m.div>
            
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-roboto text-[32px] md:text-[48px] lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight max-w-3xl"
            >
              A Controlled Process. <br/>
              <span className="text-[#E4B973] italic font-light">Superior Results.</span>
            </m.h2>

            <m.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-poppins text-white/40 text-[14px] md:text-[16px] max-w-[500px] leading-relaxed"
            >
              Predictability brings peace of mind. We manage every variable so you can focus on the result.
            </m.p>
          </div>

          {/* STEPS GRID */}
          <m.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 lg:gap-6"
          >
            {steps.map((step, i) => {
              const IconComp = step.icon
              return (
                <m.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="group relative"
                >
                  {/* Step Card: Slightly Smaller Padding */}
                  <div className="h-full bg-[#0a1224]/40 backdrop-blur-sm border border-white/5 border-t-white/10 hover:border-t-[#E4B973]/50 p-6 pt-10 rounded-2xl transition-all duration-500 relative flex flex-col items-center text-center overflow-hidden shadow-2xl hover:-translate-y-2">
                    
                    {/* Watermark Number */}
                    <div 
                      className="absolute -top-4 -right-2 text-[70px] font-bold opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 font-roboto select-none"
                      style={{ WebkitTextStroke: '2px #E4B973' }}
                    >
                      0{i + 1}
                    </div>

                    {/* Icon Area: Slightly Smaller */}
                    <div className="w-11 h-11 rounded-xl bg-[#E4B973]/10 flex items-center justify-center mb-6 border border-[#E4B973]/20 group-hover:bg-[#E4B973] transition-all duration-500 shadow-[0_0_20px_rgba(228,185,115,0.1)]">
                      <IconComp size={20} className="text-[#E4B973] group-hover:text-dark-navy transition-colors duration-500" strokeWidth={2} />
                    </div>

                    {/* Content: Slightly Smaller Typography */}
                    <h3 className="font-roboto text-[17px] md:text-[19px] font-bold text-white mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="font-poppins text-[13px] text-white/50 leading-relaxed font-light mb-6 flex-grow">
                      {step.desc}
                    </p>

                    {/* Decorative Indicator */}
                    <div className="flex flex-col items-center gap-2 text-[#E4B973]/40 group-hover:text-[#E4B973] transition-colors duration-300">
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all duration-500">
                        Step 0{i+1}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-current" />
                    </div>

                    {/* Bottom Glow bar on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E4B973]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                </m.div>
              )
            })}
          </m.div>

          {/* BOTTOM CTA: More Compact Padding & Space */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#E4B973]/30 to-transparent" />
            <a
              href="#Contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-dark-navy font-bold text-[13px] md:text-[14px] tracking-[0.2em] uppercase rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 shadow-xl"
            >
              <span className="relative z-10">REQUEST YOUR FREE QUOTE</span>
              <div className="absolute inset-0 bg-[#E4B973] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <p className="font-poppins text-white/30 text-[11px] tracking-widest uppercase font-medium">
               Limited Availability for Summer 2026
            </p>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  )
}

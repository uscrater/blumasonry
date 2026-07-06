'use client'

import { useState } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Pickaxe, ShieldCheck, Ruler, Droplets, FileCheck, Sparkles, Award, Star, ChevronDown } from 'lucide-react'

const standards = [
  {
    icon: Pickaxe,
    title: 'We Fix The Root Causes, Not Just The Surface',
    content: `Most failures come from what you don't see:\n\n• Poor base preparation\n• Wrong drainage slope\n• No structural reinforcement\n• Incorrect load distribution\n• Cheap waterproofing shortcuts\n\nWe engineer every installation from the ground up — literally.`,
  },
  {
    icon: ShieldCheck,
    title: 'We Are Not Handymen, We Are Licensed Specialists',
    content: `Many crews offer masonry "as an add-on."\nFor us, masonry and hardscape is the core expertise.\n\nYou get:\n• Licensed professionals\n• Specialized crews\n• Technical execution standards\n• Structural knowledge — not guesswork`,
  },
  {
    icon: Ruler,
    title: 'Engineering-Driven Installations',
    content: `We build using technical criteria — not improvisation.\n\nEvery project includes:\n• Proper base depth & compaction\n• Drainage planning\n• Reinforcement when required\n• Load and movement control\n• Product compatibility verification\n\nBecause beauty without structure becomes a repair bill.`,
  },
  {
    icon: Droplets,
    title: 'Built To Resist Water, Weather & Time',
    content: `Water is the #1 cause of failure in hardscape work.\n\nWe design for:\n• Water flow\n• Freeze-thaw cycles\n• Moisture barriers\n• Proper sealing systems\n\nWe don't just build it to look good on delivery day — we build it to perform for years.`,
  },
  {
    icon: FileCheck,
    title: 'No Vague Estimates. No Surprise Costs.',
    content: `You will receive:\n• Detailed description of the project scope\n• Product specifications and installation details\n• Clear execution steps\n• Transparent project pricing\n\nNo gray areas. No hidden additional costs later.\nWe accept financing.`,
  },
  {
    icon: Sparkles,
    title: 'High-End Finish Standards',
    content: `Details separate average work from premium work.\n\nWe deliver:\n• Tight joints\n• Perfect alignment\n• Clean edges\n• Level transitions\n• Precision cuts\n\nCraftsmanship you can see and measure.`,
  },
  {
    icon: Award,
    title: 'Written Warranty, Real Accountability',
    content: `We stand behind our work with a written workmanship warranty. If a contractor won't guarantee the job — that's a red flag.`,
  },
  {
    icon: Star,
    title: 'Proven Local Reputation',
    content: `We grow through:\n• Repeat clients\n• Referrals\n• Verified reviews\n• Long-term relationships\n\nBecause when built correctly, clients come back — not complaints.`,
  },
]

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <LazyMotion features={domAnimation}>
      <section id="standards" ref={ref} className="bg-[#060D1C] pt-10 pb-8 lg:pt-12 relative overflow-hidden">
        
        {/* Soft Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#060D1C] to-transparent pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="inline-block font-poppins text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase text-[#E4B973] border border-[#E4B973]/20 rounded-full px-6 py-2 mb-6 bg-gradient-to-r from-transparent via-[#E4B973]/5 to-transparent">
              The BluMasonry Standard
            </span>
            <h2 className="font-roboto text-[32px] md:text-[44px] lg:text-[52px] font-bold text-white tracking-tight leading-tight">
              How We Protect <br className="hidden md:block"/> <span className="text-[#E4B973] font-light italic">Your Investment</span>
            </h2>
          </m.div>

          {/* ACCORDION & VIDEO LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* LADO ESQUERDO: The Fixed Sticky Video Box (Height adjusted to match list) */}
            <div className="lg:sticky lg:top-32 w-full h-[450px] md:h-[550px] lg:h-[680px] rounded-3xl overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group">
              {/* Background Video */}
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              >
                <source src="/ABOUTVIDEO.mp4" type="video/mp4" />
              </video>
              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1224] via-[#0a1224]/50 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#060D1C] via-transparent to-[#E4B973]/10 pointer-events-none mix-blend-overlay" />
              
              {/* Badge overlay inside the image */}
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="w-16 h-16 bg-[#0a1224]/80 backdrop-blur-md rounded-full flex items-center justify-center border border-[#E4B973]/30 mb-6 shadow-[0_0_20px_rgba(228,185,115,0.2)]">
                    <ShieldCheck size={32} className="text-[#E4B973]" />
                 </div>
                 <h3 className="font-roboto text-[24px] md:text-[32px] font-bold text-white leading-tight">
                   Clear Standards. <br/>Zero Shortcuts.
                 </h3>
                 <p className="font-poppins text-white/50 mt-4 text-[14px] md:text-[16px] max-w-sm font-light">
                   Peace of mind comes from knowing it was built right the first time.
                 </p>
              </div>
            </div>

            {/* LADO DIREITO: The Accordion List (Optimized Density) */}
            <div className="flex flex-col">
              {standards.map((item, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="border-b border-white/10 last:border-0"
                >
                  <button
                    onClick={() => toggleOpen(i)}
                    className="w-full py-4 md:py-5 flex items-center justify-between text-left group"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                  >
                    <div className="flex items-center gap-6 pr-4">
                      <span className="font-roboto text-[14px] md:text-[16px] text-white/20 font-bold w-6 transition-colors group-hover:text-[#E4B973]/50">
                        0{i + 1}
                      </span>
                      <h3 className={`font-roboto text-[16px] md:text-[19px] font-bold transition-all duration-300 ${openIndex === i ? 'text-[#E4B973]' : 'text-white group-hover:text-white/80'}`}>
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'border-[#E4B973] bg-[#E4B973]/10 shadow-[0_0_15px_rgba(228,185,115,0.3)]' : 'border-white/10 group-hover:border-white/30'}`}>
                      <ChevronDown 
                        size={18} 
                        className={`transition-all duration-300 ${openIndex === i ? 'text-[#E4B973] rotate-180' : 'text-white/40'}`} 
                      />
                    </div>
                  </button>
                  
                  {/* Accordion Content */}
                  <AnimatePresence>
                    {openIndex === i && (
                      <m.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pl-14 pb-5 md:pl-16 md:pb-6 pr-4">
                          <div className="bg-[#0a1224]/60 border border-white/5 rounded-2xl p-5 md:p-6 backdrop-blur-sm relative overflow-hidden group/card shadow-inner">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#E4B973]/40 to-transparent" />
                            <item.icon size={22} className="text-[#E4B973] mb-4 opacity-90" strokeWidth={1.5} />
                            <p className="font-poppins text-[13px] md:text-[14px] text-white/60 leading-relaxed whitespace-pre-line font-light">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </m.div>
              ))}
            </div>

          </div>

          {/* BOTTOM CTA */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 md:mt-16 flex flex-col items-center justify-center w-full text-center"
          >
            <p className="font-roboto text-[26px] md:text-[36px] font-bold text-[#E4B973] mb-6 lg:max-w-2xl">
              Complete Peace of Mind.
            </p>
            <a
              href="#Contact"
              className="inline-flex items-center justify-center px-12 py-4 bg-[#E4B973] text-dark-navy font-bold text-[13px] md:text-[14px] tracking-widest uppercase rounded-lg shadow-[0_0_20px_rgba(228,185,115,0.3)] hover:shadow-[#E4B973]/60 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              GET A FREE ESTIMATE
            </a>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  )
}

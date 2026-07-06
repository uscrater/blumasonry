'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { XOctagon, ShieldCheck, AlertTriangle } from 'lucide-react'

export default function Problems() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      ref={ref}
      className="pt-8 pb-10 lg:pt-10 lg:pb-12 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundColor: '#060D1C' }}
    >
      <style>{`
        @keyframes creep {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.05); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.2; }
        }
        .animate-creep {
          animation: creep 10s infinite ease-in-out;
        }
      `}</style>
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-10 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="border border-[#E4B973]/20 rounded-full px-6 py-2 mb-6 bg-gradient-to-r from-transparent via-[#E4B973]/5 to-transparent inline-block"
          >
            <p className="font-poppins text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase text-[#E4B973]">
              The Blumasonry Difference
            </p>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-roboto text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] max-w-[800px] mx-auto tracking-tight"
          >
            Why Most Outdoor Projects <span className="text-white/40 italic font-light border-b border-white/20">Fail</span>,<br className="hidden md:block" /> And How We <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dfb163] via-[#F3D799] to-[#dfb163]">Prevent It.</span>
          </motion.h2>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mt-8 lg:mt-12">
          
          {/* CARD 1: THE CORE PROBLEM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a1224] shadow-2xl flex flex-col justify-center p-10 lg:p-14 min-h-[400px]"
          >
            {/* Cracked Masonry Background - Optimized via Next.js Image */}
            <Image 
              src="/damaged_masonry.webp"
              alt="Background pattern of cracked masonry"
              fill
              className="object-cover opacity-25 mix-blend-luminosity grayscale group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1224]/90 via-[#0a1224]/80 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 backdrop-blur-md transition-colors duration-500 group-hover:bg-white/10">
                 <AlertTriangle size={24} className="text-white/40 group-hover:text-white/70 transition-colors" />
              </div>
              <h3 className="font-roboto text-[28px] md:text-[36px] font-bold text-white mb-6 leading-tight">
                The True Cost of <br className="hidden lg:block" /><span className="text-white/40 font-light">Generalists</span>
              </h3>
              <div className="h-[1px] w-12 bg-[#E4B973]/50 mb-6" />
              <div className="font-poppins text-[16px] md:text-[18px] text-white/50 leading-relaxed font-light max-w-2xl">
                <p>Most outdoor construction problems don't show up on day one. They show up months later. When the job is done by handymen rather than true specialists, you end up paying twice.</p>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: THE SYMPTOMS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-3xl border border-white/5 bg-[#0a1224]/80 backdrop-blur-md p-10 lg:p-14 flex flex-col justify-center shadow-2xl hover:bg-[#0a1224] transition-colors duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E4B973]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#E4B973]/10 transition-all duration-500" />
            
            <h3 className="font-roboto text-[22px] md:text-[26px] font-bold text-white mb-8 leading-tight relative z-10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#E4B973]" />
              Failed Symptoms
            </h3>
            
            <ul className="space-y-4 font-poppins text-[14px] lg:text-[15px] text-white/50 font-light relative z-10">
              <li className="flex items-start gap-4 border-b border-white/5 pb-4"><span className="text-[#E4B973] font-bold">01</span> Cracks & foundational separation</li>
              <li className="flex items-start gap-4 border-b border-white/5 pb-4"><span className="text-[#E4B973] font-bold">02</span> Uneven sinking of pavers</li>
              <li className="flex items-start gap-4 border-b border-white/5 pb-4"><span className="text-[#E4B973] font-bold">03</span> Severe water damage & pooling</li>
              <li className="flex items-start gap-4"><span className="text-[#E4B973] font-bold">04</span> Failed drainage systems</li>
            </ul>
          </motion.div>

          {/* SEPARATOR LINE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:col-span-2 py-1 md:py-3 w-full"
          >
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E4B973]/50 to-transparent" />
          </motion.div>

          {/* BOTTOM ROW: THE SOLUTION (Split Layout) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2 items-stretch"
          >
            {/* The Text Card */}
            <div className="border border-[#E4B973]/40 rounded-3xl p-10 lg:p-14 relative overflow-hidden group shadow-[0_0_40px_rgba(228,185,115,0.08)] hover:shadow-[0_0_60px_rgba(228,185,115,0.15)] bg-[#0a1224] transition-shadow duration-500 flex flex-col justify-center">
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1224] via-[#0a1224]/90 to-[#E4B973]/10" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#E4B973]/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#E4B973]/25 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#E4B973]/10 rounded-full flex items-center justify-center mb-6 border border-[#E4B973]/30 shadow-[0_0_15px_rgba(228,185,115,0.2)]">
                   <ShieldCheck size={32} className="text-[#E4B973]" />
                </div>
                <h3 className="font-roboto text-[26px] md:text-[32px] font-bold text-white mb-4 leading-tight">
                  The Gold Standard
                </h3>
                <div className="font-poppins font-medium text-[16px] md:text-[18px] text-white/80 leading-relaxed">
                  <p>We are not general contractors.</p>
                  <p className="text-[#E4B973] text-[20px] md:text-[24px] font-bold mt-2 mb-8">
                    We are masonry & hardscape experts — and that changes everything.
                  </p>
                  <a
                    href="#Contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-[#E4B973] text-dark-navy font-bold text-[13px] tracking-widest uppercase rounded-lg shadow-[0_0_20px_rgba(228,185,115,0.3)] hover:shadow-[#E4B973]/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                  >
                    HIRE THE EXPERTS
                  </a>
                </div>
              </div>
            </div>

            {/* The Video Box */}
            <div className="border border-[#E4B973]/30 rounded-3xl overflow-hidden relative shadow-[0_0_30px_rgba(0,0,0,0.5)] min-h-[350px] lg:min-h-full group flex items-center justify-center bg-[#060D1C] hover:border-[#E4B973]/50 transition-colors duration-500">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                style={{ backgroundImage: "url('/hero-poster.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1C]/80 via-[#0a1224]/30 to-transparent pointer-events-none" />
              
              {/* Image Seal for Branding */}
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 w-28 h-28 md:w-36 md:h-36 group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_15px_rgba(228,185,115,0.3)]">
                 <Image 
                   src="/selo1.png" 
                   alt="Expert Team Seal" 
                   width={144}
                   height={144}
                   className="w-full h-full object-contain"
                 />
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

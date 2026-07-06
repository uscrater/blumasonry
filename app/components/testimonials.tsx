'use client'

import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Star, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

const reviews = [
  { 
    name: 'Kathy Mullen', 
    title: '"Awesome work at our home"',
    text: `Victor and his coworkers did awesome work at our home. Replacing/repairing our brick stairs, repointing the bricks on the side of the house and creating a patio in the back yard. Very professional and dependable. Highly recommend!`,
    image: '/images/testimonials/review-1.jpg'
  },
  { 
    name: 'Kevin Wheeler', 
    title: '"Communication was awesome"',
    text: `From start to finish communication was awesome from Victor. He would respond to texts even at times I didn't expect him to, and showed up on time. The work came out amazing and they went above and beyond to help solve my drainage issue.`,
    image: '/images/testimonials/review-2.webp'
  },
  { 
    name: 'Deborah Durnam', 
    title: '"Applied the stone beautifully"',
    text: `Blu Masonry did a wonderful job on our large fireplace renovation. They applied the stone veneer beautifully and in a timely manner. Always professional and friendly during the process. Overall, it was a great experience.`,
    image: '/images/testimonials/review-3.jpg'
  },
  { 
    name: 'Adam Young', 
    title: '"Historical society approval"',
    text: `We had a tricky project that went well beyond basic masonry. We needed to expand our driveway. Victor and the team made it happen, managing the permits, engineering, historical society approval, and only then did the stone work.`,
    image: '/images/testimonials/review-4.jpg'
  },
  { 
    name: 'Joel Stanton', 
    title: '"On time and on budget"',
    text: `Blu Masonry did a fantastic job replacing our old front stairs with a beautiful new set of stone stairs. They quoted us a fair price, then delivered exactly as promised, on time and on budget, and they were great to work with.`,
    image: '/images/testimonials/review-5.jpg'
  },
  { 
    name: 'Dave', 
    title: '"Simply amazing!"',
    text: `Blu Masonry was simply amazing! Victor and his crew were professional, creative, timely, hard working and flexible! They went above and beyond to make sure the project was done right. They waterproofed the basement!`,
    image: '/images/testimonials/review-6.jpg'
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)

  // Step carousel every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
    }, 10000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <section ref={ref} id="testimonials" className="bg-[#060D1C] pt-8 md:pt-12 pb-24 relative overflow-hidden">
        
        {/* Background Ornaments (Subtle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#E4B973]/3 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/[0.02] blur-[100px] rounded-full pointer-events-none" />

        {/* HEADER DIV: Centered Editorial Style */}
        <div className="max-w-[1400px] mx-auto px-6 mb-20 flex flex-col items-center text-center relative z-10">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center px-4 py-1.5 border border-[#E4B973]/20 rounded-full bg-[#E4B973]/5 backdrop-blur-sm self-center"
          >
            <span className="font-poppins text-[#E4B973] text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
              Wall of Excellence
            </span>
          </m.div>
          
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-roboto text-[32px] md:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1] max-w-4xl"
          >
            Testimonials from <span className="text-[#E4B973] italic font-light">Satisfied Customers</span>
          </m.h2>
          
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-poppins text-[15px] md:text-[18px] text-white/40 max-w-[700px] leading-relaxed mx-auto"
          >
            Don’t just take our word for it hear what our clients have to say about working with Blu Masonry Inc.
          </m.p>
        </div>

        {/* MAIN CONTAINER */}
        <div className="max-w-[1400px] w-full mx-auto flex flex-col xl:flex-row items-stretch gap-8 px-6 relative z-10">
          
          {/* 1. LEFT SIDE: "DIAMOND" GOOGLE SUMMARY CARD */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group flex-shrink-0 w-full xl:w-[440px] bg-gradient-to-br from-[#0a1224] to-[#040812] border border-white/5 border-t-white/10 rounded-2xl p-10 lg:p-12 flex flex-col shadow-2xl relative overflow-hidden"
          >
            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E4B973]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            {/* Watermark 5.0 */}
            <div className="absolute -bottom-10 -right-6 text-[180px] font-bold text-white/[0.02] select-none pointer-events-none">
              5.0
            </div>

            <div className="flex flex-col mb-10">
              <div className="flex items-end gap-3 mb-4">
                <span className="font-roboto text-[64px] lg:text-[72px] font-black text-white leading-none tracking-tighter">5.0</span>
                <div className="flex flex-col pb-2">
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={16} className="text-[#E4B973] fill-[#E4B973]" />
                    ))}
                  </div>
                  <span className="font-poppins text-[#E4B973] text-[12px] font-bold tracking-widest uppercase">Perfect Rating</span>
                </div>
              </div>
              <p className="font-poppins text-[16px] text-white/50 leading-relaxed max-w-[300px]">
                Recognized as a regional leader in elite masonry and structural engineering.
              </p>
            </div>

            <div className="mt-auto space-y-8">
              {/* Avatars & Stats */}
              <div className="flex items-center justify-between py-6 border-y border-white/5">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#040812] bg-[#1a2538] flex items-center justify-center text-white/40 text-[10px] font-bold">
                      {String.fromCharCode(64+i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#040812] bg-[#E4B973] flex items-center justify-center text-dark-navy font-black text-[11px]">
                    +80
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-[18px]">100%</div>
                  <div className="text-white/30 text-[11px] uppercase tracking-widest font-bold">Recommended</div>
                </div>
              </div>

              {/* Google Identity */}
              <div className="flex items-center gap-3 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                 <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
                   <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.16 5.4-7.84 5.4-4.88 0-8.84-4.04-8.84-9 0-4.96 3.96-9 8.84-9 2.8 0 4.68 1.16 5.76 2.2l2.56-2.48C19.04 1.92 16.04 0 12.48 0 5.8 0 0 5.36 0 12s5.8 12 12.48 12c6.96 0 11.56-4.88 11.56-11.76 0-.8-.08-1.4-.24-2.04h-11.32z"/>
                 </svg>
                 <span className="font-roboto font-bold text-[20px] text-white tracking-tight">Reviews</span>
              </div>

              <a 
                href="https://share.google/0MKB5CU147nwvwpkI"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 px-8 py-5 bg-white text-dark-navy font-bold text-[13px] tracking-widest uppercase rounded-lg hover:bg-[#E4B973] transition-colors duration-500 shadow-xl"
              >
                Verify Our 5-Star Reputation
                <ExternalLink size={14} strokeWidth={3} />
              </a>
            </div>
          </m.div>

          {/* 2. RIGHT SIDE: THE GALLERY SLIDER */}
          <div className="flex-1 w-full overflow-hidden relative border border-white/5 bg-[#0a1224]/30 backdrop-blur-sm rounded-2xl flex items-stretch shadow-2xl lg:h-[600px]">
            
            <AnimatePresence mode="wait">
              <m.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col lg:flex-row"
              >
                {/* TEXT HALF */}
                <div className="w-full lg:w-[50%] p-10 lg:p-14 flex flex-col z-10 relative order-2 lg:order-1 h-full">
                  <div className="w-12 h-1 bg-[#E4B973]/20 mb-10 rounded-full" />
                  
                  <h3 className="font-roboto text-[24px] lg:text-[30px] font-bold text-white mb-8 leading-tight tracking-tight italic">
                    {reviews[currentIndex].title}
                  </h3>

                  <div className="overflow-visible lg:overflow-y-auto custom-scrollbar flex-grow mb-12 pr-2">
                    <p className="font-poppins text-[16px] lg:text-[18px] text-white/60 leading-relaxed font-light italic">
                      "{reviews[currentIndex].text}"
                    </p>
                  </div>

                  {/* Verified Footer */}
                  <div className="flex items-center gap-5 mt-auto pt-8 border-t border-white/5">
                    <div className="w-14 h-14 rounded-full border border-[#E4B973]/30 p-1">
                      <div className="w-full h-full bg-[#E4B973]/10 rounded-full flex items-center justify-center text-[#E4B973] font-bold text-[18px]">
                        {reviews[currentIndex].name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-roboto text-[18px] font-bold text-white">
                        {reviews[currentIndex].name}
                      </span>
                      <div className="flex items-center gap-2 text-[#1ABC9C] text-[11px] font-bold tracking-[0.2em] uppercase mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1ABC9C] animate-pulse" />
                        Client Verified
                      </div>
                    </div>
                  </div>
                </div>

                {/* IMAGE HALF: Modern Frame */}
                <div className="w-full lg:w-[50%] h-[300px] lg:h-full relative overflow-hidden order-1 lg:order-2 shrink-0 group">
                  <Image 
                    src={reviews[currentIndex].image} 
                    alt="Portfolio Piece" 
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* BLACK GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent opacity-60" />

                  {/* VERIFIED SEAL (Floating Badge) */}
                  <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 z-20">
                    <m.div
                      initial={{ rotate: -15, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      className="w-24 h-24 lg:w-32 lg:h-32 relative flex items-center justify-center"
                    >
                      {/* SVG Gold Seal Wrapper */}
                      <div className="absolute inset-0 opacity-20 animate-spin-slow">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-[#E4B973] fill-current">
                           <path d="M50 0L54 39L94 17L67 46L100 67L61 68L80 100L49 71L18 97L35 64L0 61L31 43L7 11L44 35L50 0Z" />
                        </svg>
                      </div>
                      
                      <div className="relative flex flex-col items-center text-center">
                         <span className="text-[9px] font-black tracking-widest text-[#E4B973] uppercase mb-1">BluMasonry</span>
                         <span className="text-[14px] lg:text-[18px] font-black text-white uppercase leading-none tracking-tighter">Verified</span>
                         <div className="w-8 h-[2px] bg-[#E4B973] mt-2 shadow-[0_0_10px_#E4B973]" />
                      </div>
                    </m.div>
                  </div>
                </div>

              </m.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="absolute bottom-8 left-10 lg:left-14 flex items-center gap-4 z-30">
              {reviews.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="group relative w-3 h-3 flex items-center justify-center"
                >
                  <div className={`w-full h-full rounded-full transition-all duration-500 scale-75 ${idx === currentIndex ? 'bg-[#E4B973] scale-100 shadow-[0_0_12px_rgba(228,185,115,0.8)]' : 'bg-white/20 group-hover:bg-white/40 group-hover:scale-100'}`} />
                </button>
              ))}
            </div>

          </div>

        </div>
        
      </section>
    </LazyMotion>
  )
}

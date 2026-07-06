'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const tabs = [
  {
    label: 'Masonry Services',
    slug: 'masonry-services',
    items: ['Chimney Repointing','Veneers Installation','Stonework','Concrete Work','Stairs','Stamped Concrete','Bulkhead Installation','Fireplaces','Sono Tubes','Footings'],
    images: [
      '/images/services/masonry-1.webp',
      '/images/services/masonry-2.jpg',
      '/images/services/masonry-3.jpg',
    ],
  },
  {
    label: 'Hardscaping',
    slug: 'hardscaping',
    items: ['Retaining Walls','Patios & Pavers','Pergolas','Firepits','Decks','Outdoor Kitchens','Bath Tubs & Sauna (package only)'],
    images: [
      '/images/services/hardscape-1.webp',
      '/images/services/hardscape-2.webp',
      '/images/services/hardscape-3.jpg',
    ],
  },
  {
    label: 'Tile Installation',
    slug: 'tile-installation',
    items: ['Kitchen Backsplash','Bathroom Showers','Bathroom Floors'],
    images: [
      '/images/services/tile-1.jpg',
      '/images/services/tile-2.jpg',
      '/images/services/tile-3.webp',
    ],
  },
  {
    label: 'Basement Waterproofing',
    slug: 'basement-waterproofing',
    items: ['Sump Pump','Perimeter Drain','French Drain','Crawlspace Encapsulation','Fieldstone Repointing','Full Waterproofing'],
    images: [
      '/images/services/waterproof-1.jpg',
      '/images/services/waterproof-2.jpg',
      '/images/services/waterproof-3.jpg',
    ],
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)
  const [imgIdx, setImgIdx] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  const currentTab = tabs[activeTab] ?? tabs[0]

  const nextImg = () => {
    setImgIdx((prev) => (prev + 1) % currentTab.images.length)
  }

  const prevImg = () => {
    setImgIdx((prev) => (prev - 1 + currentTab.images.length) % currentTab.images.length)
  }

  return (
    <LazyMotion features={domAnimation}>
      <section id="Service" ref={ref} className="pt-6 pb-10 lg:pt-10 lg:pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          
          {/* CENTERED HEADER */}
          <div className="flex flex-col items-center text-center mb-16">
            <m.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="shimmer-text inline-block border border-[#dfb163]/40 rounded-full px-5 py-1.5 font-poppins text-[12px] md:text-[14px] font-semibold tracking-widest uppercase mb-4"
            >
              What We Do
            </m.p>
            
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="shimmer-text font-roboto text-[32px] md:text-[42px] font-bold mb-6 tracking-wide"
            >
              OUR SERVICES.
            </m.h2>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-roboto text-[16px] md:text-[22px] text-white mb-3 flex items-center justify-center gap-2 md:gap-3 flex-wrap leading-relaxed"
            >
              <span>Everything You Need.</span>
              <span className="text-white/40">|</span>
              <span>One Expert Team.</span>
              <span className="text-white/40">|</span>
              <span>Zero Headaches.</span>
            </m.p>
            <m.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="relative inline-block group cursor-default"
            >
              <p className="font-roboto text-[17px] md:text-[19px] text-white/80 pb-1">
                We accept financing
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
            </m.div>
          </div>

          {/* TAB NAVIGATION PILLS */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-6 mb-6 lg:mb-12">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => { setActiveTab(i); setImgIdx(0); }}
                className={`font-poppins text-[13px] md:text-[14px] font-medium px-8 py-3 rounded-full transition-all duration-300 border ${
                  activeTab === i 
                    ? 'bg-[#E4B973] text-dark-navy border-[#E4B973] shadow-[0_0_15px_rgba(228,185,115,0.4)]' 
                    : 'bg-transparent text-white border-white/20 hover:border-[#E4B973]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="w-full relative">
            <AnimatePresence mode="popLayout">
              <m.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="border border-[#E4B973]/40 rounded-[20px] flex flex-col-reverse lg:flex-row overflow-hidden bg-transparent min-h-[450px]"
              >
                
                {/* Left Column (Text List) - On mobile, this will be at the bottom due to flex-col-reverse */}
                <div className="w-full lg:w-[32%] pl-6 pr-4 py-8 lg:pl-12 lg:pr-4 lg:py-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-r border-[#E4B973]/20">
                  <h3 className="font-roboto text-[26px] md:text-[32px] font-semibold text-[#E4B973] mb-4 leading-[1.1]">
                    {currentTab.label.split(' ').map((word, idx) => (
                      <span key={idx} className="block">{word}</span>
                    ))}
                  </h3>
                  
                  {/* Horizontal Separator Line */}
                  <div className="w-[80%] h-[1px] bg-white/10 mb-6" />
                  
                  <m.ul
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                    className="space-y-2"
                  >
                    {currentTab.items.map((item) => (
                      <m.li
                        key={item}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="font-poppins text-[13px] md:text-[14px] text-white flex items-center gap-4"
                      >
                        <div className="w-1 h-1 rounded-full bg-white shrink-0" />
                        {item}
                      </m.li>
                    ))}
                  </m.ul>

                  <Link
                    href={`/services/${currentTab.slug}`}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#E4B973]/40 px-5 py-2.5 font-poppins text-[12px] font-semibold uppercase tracking-[0.15em] text-[#E4B973] transition-all duration-300 hover:bg-[#E4B973] hover:text-dark-navy"
                  >
                    Explore {currentTab.label}
                  </Link>
                </div>

                {/* Right Column (Image Gallery) */}
                <div className="w-full lg:w-[68%] relative h-[400px] lg:h-auto overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <m.div
                      key={`${activeTab}-${imgIdx}`}
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(10px)' }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={currentTab.images[imgIdx] ?? currentTab.images[0]}
                        alt={`${currentTab.label} project by Blu Masonry Inc.`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 70vw"
                      />
                    </m.div>
                  </AnimatePresence>

                  {/* Arrow Overlays */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={prevImg}
                      aria-label="Previous photo"
                      className="w-8 h-8 rounded bg-black/40 text-white/70 flex items-center justify-center hover:bg-[#E4B973] hover:text-dark-navy transition-colors pointer-events-auto backdrop-blur-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button 
                      onClick={nextImg}
                      aria-label="Next photo"
                      className="w-8 h-8 rounded bg-black/40 text-white/70 flex items-center justify-center hover:bg-[#E4B973] hover:text-dark-navy transition-colors pointer-events-auto backdrop-blur-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                </div>

              </m.div>
            </AnimatePresence>
          </div>

        </div>
      </section>
    </LazyMotion>
  )
}

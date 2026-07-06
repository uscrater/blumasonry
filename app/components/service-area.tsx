'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, ArrowRight, X } from 'lucide-react'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Load Leaflet only client-side (no SSR) to avoid window errors
const MapComponent = dynamic(() => import('./map-component'), {
  ssr: false,
  loading: () => <MapPlaceholder />,
})

const regions = [
  {
    name: 'Greater Boston',
    state: 'MA',
    fullName: 'Massachusetts',
    description: "Premium masonry and architectural stonework across Boston's most historic and prestigious neighborhoods.",
    cities: ['Boston', 'Cambridge', 'Somerville', 'Medford', 'Chelsea', 'Newton', 'Brookline', 'Waltham', 'Quincy', 'Braintree', 'Milton', 'Dedham'],
  },
  {
    name: 'North Shore & Coastal',
    state: 'MA',
    fullName: 'Massachusetts',
    description: 'Delivering high-end coastal masonry aesthetics and durable waterfront structures along the North Shore.',
    cities: ['Salem', 'Peabody', 'Beverly', 'Marblehead', 'Swampscott', 'Nahant', 'Danvers', 'Saugus', 'Lynnfield', 'Gloucester', 'Rockport', 'Manchester-by-the-Sea', 'Ipswich', 'Hamilton', 'Wenham', 'Topsfield'],
  },
  {
    name: 'Merrimack Valley',
    state: 'MA',
    fullName: 'Massachusetts',
    description: 'Our main service hub (Base: Andover) providing premium hardscaping and structural stonework across the valley.',
    cities: ['Andover', 'North Andover', 'Lawrence', 'Lowell', 'Haverhill', 'Methuen', 'Amesbury', 'Newburyport', 'Groton', 'Boxford', 'Winchester', 'Lexington', 'Middleton', 'Reading', 'Wilmington', 'Carlisle', 'West Newbury', 'North Reading'],
  },
  {
    name: 'Southern New Hampshire',
    state: 'NH',
    fullName: 'New Hampshire',
    description: 'Expert craftsmanship for high-end outdoor living spaces and masonry restorations throughout Southern NH.',
    cities: ['Salem', 'Windham', 'Bedford', 'Londonderry', 'Pelham', 'Portsmouth', 'Rye', 'North Hampton', 'Hollis', 'Hampstead', 'Derry', 'Hudson', 'Merrimack', 'Atkinson'],
  },
]

function MapPlaceholder() {
  return (
    <div className="w-full h-full bg-[#040812] rounded-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden ring-1 ring-white/5">
      {/* Abstract Map Grid Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#E4B973 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      {/* Pulsing Pin Icon */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <MapPin size={48} className="text-[#E4B973]" />
      </motion.div>
      
      <div className="mt-6 text-center relative z-10">
        <p className="text-[#E4B973] font-roboto font-bold tracking-[0.2em] uppercase text-[12px] mb-2">Initializing Coverage Map</p>
        <p className="text-white/40 font-poppins text-[13px] max-w-[200px] leading-relaxed">Loading premium interactive service area data...</p>
      </div>

      {/* Progress Bar Shimmer */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#E4B973]/30 to-transparent w-full">
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="h-full w-1/2 bg-[#E4B973]/50 blur-sm"
        />
      </div>
    </div>
  )
}

export default function ServiceArea() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hoveredName, setHoveredName] = useState<string | null>(null)
  const [selectedName, setSelectedName] = useState<string | null>(null)
  
  // Hover takes priority for quick preview, otherwise show selected
  const activeRegionName = hoveredName || selectedName
  const activeRegion = regions.find(r => r.name === activeRegionName) ?? null

  const handleRegionClick = (name: string | null) => {
    // Optional: Toggle off if clicking the same one, or just set it
    setSelectedName(prev => prev === name ? null : name)
  }

  return (
    <section id="ServiceArea" ref={ref} className="bg-[#060D1C] pt-6 pb-0 relative overflow-hidden">

      {/* Flag bleeds in from bottom — flows into Final CTA */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none z-0"
        style={{
          backgroundImage: "url('/flag-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.12,
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,1) 100%)',
        }}
      />

      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto px-6 text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="shimmer-text font-sora text-[14px] md:text-[16px] font-semibold tracking-wider uppercase mb-3"
        >
          Coverage
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-roboto text-[36px] md:text-[46px] font-bold text-white tracking-widest uppercase mb-6"
        >
          Our Service Area
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-poppins text-[15px] text-white/60 max-w-[600px] mx-auto leading-relaxed lg:hidden"
        >
          We proudly serve communities across Massachusetts and the southern New Hampshire border. Hover over a <span className="text-[#E4B973] font-medium">golden pin</span> on the map to explore each region.
        </motion.p>

        {/* Hidden SEO Text - Ensures Crawler Visibility for all cities */}
        <div className="sr-only">
          <h2>Areas Served by Blu Masonry Inc.</h2>
          {regions.map((region) => (
            <div key={region.name}>
              <h3>{region.name}</h3>
              <p>{region.description}</p>
              <ul>
                {region.cities.map((city) => {
                  const slug = `${city.toLowerCase().replace(/ /g, '-').replace(/\./g, '')}-${region.state.toLowerCase()}`
                  return (
                    <li key={city}>
                      <Link href={`/service-area/${slug}`}>{city}, {region.fullName}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* SPLIT LAYOUT */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-8 items-stretch h-auto lg:h-[560px]">

        {/* MAP (LEFT) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[60%] h-[420px] lg:h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-10"
        >
          <MapComponent 
            onRegionHover={setHoveredName} 
            onRegionClick={handleRegionClick}
          />
        </motion.div>

        {/* INFO PANEL (RIGHT - Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex w-[40%] h-full bg-[#0a1224]/50 border border-white/5 rounded-2xl p-12 flex-col overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {activeRegion ? (
              <motion.div
                key={activeRegion.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#E4B973]/10 flex items-center justify-center border border-[#E4B973]/30">
                    <MapPin size={18} className="text-[#E4B973]" />
                  </div>
                  <h3 className="font-roboto text-[22px] lg:text-[26px] font-bold text-white leading-tight">
                    {activeRegion.name}
                  </h3>
                </div>

                <p className="font-poppins text-[15px] text-white/60 leading-relaxed mb-8 pb-8 border-b border-white/10">
                  {activeRegion.description}
                </p>

                <span className="font-roboto font-bold text-white/60 text-[13px] uppercase tracking-widest mb-5 block">
                  Cities We Serve
                </span>

                <div className="flex flex-wrap gap-2">
                  {activeRegion.cities.map((city, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-white/5 border border-white/5 hover:border-[#E4B973]/30 transition-all rounded-full font-poppins text-[13px] text-white/80"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col h-full justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#E4B973]/10 border border-[#E4B973]/20 flex items-center justify-center mb-8">
                  <MapPin size={24} className="text-[#E4B973]" />
                </div>
                <h3 className="font-roboto text-[24px] font-bold text-white mb-4">
                  Massachusetts &<br />Southern NH
                </h3>
                <p className="font-poppins text-[15px] text-white/60 leading-relaxed mb-8">
                  We proudly serve communities across Massachusetts and the southern New Hampshire border. Hover over a <span className="text-[#E4B973] font-semibold">golden pin</span> on the map to explore each region.
                </p>
                <div className="flex flex-wrap gap-2">
                  {regions.map((r, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full font-poppins text-[13px] text-white/50">
                      {r.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto pt-8 border-t border-white/5">
            <Link href="#Contact" className="inline-flex items-center gap-2 font-roboto font-bold text-[#E4B973] hover:text-white transition-colors uppercase tracking-widest text-[13px]">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

      </div>

      {/* MOBILE REGION INFO (Bottom Sheet) */}
      <AnimatePresence>
        {selectedName && activeRegion && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-x-0 bottom-0 z-[100] bg-[#0a1224] border-t border-[#E4B973]/30 rounded-t-[32px] p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] max-h-[85vh] overflow-y-auto"
          >
            {/* Handle Bar */}
            <div 
              className="w-12 h-1.5 bg-white/10 rounded-full mx-auto mb-8" 
              onClick={() => setSelectedName(null)}
            />
            
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E4B973]/10 flex items-center justify-center border border-[#E4B973]/30">
                  <MapPin size={22} className="text-[#E4B973]" />
                </div>
                <div>
                  <h3 className="font-roboto text-[22px] font-bold text-white uppercase tracking-tight">
                    {activeRegion.name}
                  </h3>
                  <p className="font-poppins text-[12px] text-white/40 uppercase tracking-widest font-bold">
                    {activeRegion.state === 'MA' ? 'Massachusetts' : 'New Hampshire'}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedName(null)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <p className="font-poppins text-[15px] text-white/60 leading-relaxed mb-8 pb-8 border-b border-white/10">
              {activeRegion.description}
            </p>

            <span className="font-roboto font-bold text-[#E4B973] text-[12px] uppercase tracking-[0.2em] mb-6 block">
              Cities We Serve
            </span>

            <div className="flex flex-wrap gap-2 mb-10">
              {activeRegion.cities.map((city, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-white/5 border border-white/5 rounded-full font-poppins text-[13px] text-white/80"
                >
                  {city}
                </span>
              ))}
            </div>

            <Link 
              href="#Contact" 
              onClick={() => setSelectedName(null)}
              className="w-full bg-[#E4B973] text-[#0A101D] font-roboto font-bold py-4 rounded-xl flex items-center justify-center gap-3 uppercase tracking-widest text-[14px]"
            >
              Request a Free Quote <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for Mobile Sheet */}
      <AnimatePresence>
        {selectedName && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedName(null)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          />
        )}
      </AnimatePresence>

    </section>
  )
}

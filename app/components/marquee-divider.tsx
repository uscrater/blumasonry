'use client'

import Image from 'next/image'

const images = [
  '/images/services/masonry-1.webp',
  '/images/services/hardscape-1.webp',
  '/images/services/tile-1.jpg',
  '/images/services/masonry-2.jpg',
  '/images/services/waterproof-1.jpg',
  '/images/services/hardscape-2.webp',
  '/images/services/tile-2.jpg',
  '/images/services/masonry-3.jpg',
]

export default function MarqueeDivider() {
  // We repeat the array a few times to make sure there are enough images to scroll across large screens infinitely
  const content = Array(6).fill(images).flat()

  return (
    <div className="w-full flex flex-col items-center bg-dark-navy">
      <div className="w-full overflow-hidden bg-dark-navy border-y border-[#dfb163]/20 py-4 relative z-10 flex">
      {/* CSS Animation */}
      <style>{`
        @keyframes scrollFrames {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-frames {
          animation: scrollFrames 90s linear infinite;
        }
      `}</style>
      
      {/* Edge Gradients for Smooth In/Out Fades */}
      <div className="absolute inset-y-0 left-0 w-10 md:w-32 bg-gradient-to-r from-dark-navy to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-10 md:w-32 bg-gradient-to-l from-dark-navy to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-frames w-max">
        {/* Block 1 */}
        <div className="flex items-center gap-3 md:gap-4 px-2">
          {content.map((src, i) => (
            <div key={i} className="w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden shrink-0 border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
              <Image src={src} alt="Project Gallery Tile" width={300} height={400} sizes="(max-width: 768px) 50vw, 200px" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Block 2 (Exact Duplicate to ensure seamless looping at 50% width) */}
        <div className="flex items-center gap-3 md:gap-4 px-2 pl-3 md:pl-4">
          {content.map((src, i) => (
            <div key={`dup-${i}`} className="w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden shrink-0 border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
              <Image src={src} alt="Project Gallery Tile" width={300} height={400} sizes="(max-width: 768px) 50vw, 200px" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* CTA Button Moved Here */}
      <div className="text-center py-8 lg:py-10 w-full px-6 flex justify-center">
        <a
          href="/projects"
          className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 md:px-10 md:py-4 bg-[#E4B973] text-dark-navy font-bold text-[13px] md:text-[14px] tracking-[0.2em] uppercase rounded-lg shadow-[0_0_20px_rgba(228,185,115,0.3)] hover:shadow-[0_0_35px_rgba(228,185,115,0.5)] hover:-translate-y-1.5 transition-all duration-300 w-full sm:w-auto"
        >
          <span>VIEW 400+ REAL PROJECTS</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

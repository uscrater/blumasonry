'use client'

import Image from 'next/image'

export default function FlagWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden" style={{ background: '#060D1C' }}>
      {/* American flag stars — optimized watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image 
          src="/flag-bg.webp"
          alt="American flag stars watermark"
          fill
          quality={30}
          className="object-cover opacity-[0.025] saturate-[0.3] brightness-[1.5]"
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 80%, transparent 100%)'
          }}
          sizes="100vw"
        />
      </div>
      {children}
    </div>
  )
}

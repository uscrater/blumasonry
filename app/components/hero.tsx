'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-end items-center pb-24 md:pb-32 overflow-hidden">
        {/* This Image MUST be in the initial server HTML */}
        <Image
          src="/images/hero-poster.webp"
          alt="Premium Masonry and Stonework Craftsmanship in Massachusetts by Blu Masonry Inc."
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover z-0"
        />

        {/* Video Background - Loaded after poster */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        >
          <source src="/HEROSITE_yrmpoy (1).mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-dark-navy/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 w-full max-w-[1400px]">
          <h1 className="font-roboto text-[16px] md:text-[22px] xl:text-[25px] font-semibold uppercase tracking-wider leading-tight mb-5">
            <span className="shimmer-text">MASSACHUSETTS MASONRY CONTRACTOR | BUILDING STRENGTH | CRAFTING BEAUTY.</span>
          </h1>
          <p className="font-roboto text-[16px] md:text-[20.5px] xl:text-[21.5px] font-normal text-white leading-7">
            Premium hardscaping, waterproofing, and custom stonework for homeowners across Massachusetts.
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <m.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-20 bg-transparent border-none"
          aria-label="Scroll down to content"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            })
          }}
        >
          <span className="text-white/60 text-[10px] md:text-[12px] font-poppins uppercase tracking-[0.2em] mb-2 font-light">
            Scroll
          </span>
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="text-[#dfb163]" size={32} />
          </m.div>
        </m.button>
      </section>
    </LazyMotion>
  )
}

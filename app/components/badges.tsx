'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export default function Badges() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const badges = [
    { src: '/images/badges/hfs-badge.png', alt: 'HFS Home Improvement Loans — financing available for Blu Masonry service projects' },
    { src: '/images/badges/techo-pro-badge.png', alt: 'Techo Pro certified pre-screened landscape contractor badge' },
    { src: '/images/badges/unilock-badge.png', alt: 'Unilock Authorized Contractor badge' },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <LazyMotion features={domAnimation}>
      <section ref={ref} className="bg-dark-navy pt-16 pb-2">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <div className="w-12 h-[2px] bg-gold mx-auto mb-4" />
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-roboto text-[18px] text-white/80 mb-8"
          >
            Authorized Contractor
          </m.p>
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-16"
          >
            {badges.map((badge: any, i: number) => (
              <m.div
                key={i}
                variants={itemVariants}
                className="transition-transform hover:scale-105 shrink-0"
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={150}
                  height={150}
                  className="w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] object-contain"
                />
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  )
}

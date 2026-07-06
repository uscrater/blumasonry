'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface BuiltCtaProps {
  onOpenModal: () => void
}

export default function BuiltCta({ onOpenModal }: BuiltCtaProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="bg-dark-navy py-16">
      <div className="max-w-[1140px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-roboto text-[28px] md:text-[36px] font-bold text-white mb-2"
        >
          Built Once. Built Right.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-roboto text-[28px] md:text-[36px] font-bold text-gold mb-10"
        >
          Built To Last.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={onOpenModal}
            className="glow-border font-roboto text-[14px] font-extrabold text-white px-8 py-4 rounded-[10px] hover:text-gold transition-colors"
          >
            SCHEDULE A FREE INSPECTION
          </button>
        </motion.div>
      </div>
    </section>
  )
}

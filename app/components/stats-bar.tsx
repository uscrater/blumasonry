'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="w-full relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#E4B973] to-[#DBA143]"
      >


        <div className="max-w-[1140px] mx-auto px-6 py-4 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
            {/* Years of Experience */}
            <m.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center relative z-10 flex flex-col items-center gap-1"
            >
              <div className="font-roboto text-[56px] md:text-[64px] font-bold text-dark-navy leading-none drop-shadow-md flex items-center justify-center">
                <CountUp 
                  start={0}
                  end={12} 
                  duration={2.5}
                  startOnMount={false}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                >
                  {({ countUpRef }) => <span ref={countUpRef}>12</span>}
                </CountUp>
                <span className="text-white ml-2">+</span>
              </div>
              <p className="font-roboto text-[15px] md:text-[18px] font-bold text-white uppercase tracking-widest drop-shadow-sm">
                Years of Experience
              </p>
              <p className="font-roboto text-[14px] md:text-[16px] font-medium text-dark-navy/90">
                Family-Owned & Trusted
              </p>
            </m.div>

            {/* Projects Completed */}
            <m.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center relative z-10 flex flex-col items-center gap-1"
            >
              <div className="font-roboto text-[56px] md:text-[64px] font-bold text-dark-navy leading-none drop-shadow-md flex items-center justify-center">
                <CountUp 
                  start={0}
                  end={400} 
                  duration={3}
                  startOnMount={false}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                >
                  {({ countUpRef }) => <span ref={countUpRef}>400</span>}
                </CountUp>
                <span className="text-white ml-2">+</span>
              </div>
              <p className="font-roboto text-[15px] md:text-[18px] font-bold text-white uppercase tracking-widest drop-shadow-sm">
                Projects Completed
              </p>
              <p className="font-roboto text-[14px] md:text-[16px] font-medium text-dark-navy/90">
                Engineering-Level Precision
              </p>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

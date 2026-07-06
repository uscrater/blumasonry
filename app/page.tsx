import Navbar from './components/navbar'
import Hero from './components/hero'
import StatsBar from './components/stats-bar'
import Badges from './components/badges'
import About from './components/about'
import Owners from './components/owners'
import Services from './components/services'
import FinalCta from './components/final-cta'
import Footer from './components/footer'
import FloatingMessage from './components/floating-message'
import FlagWrapper from './components/flag-wrapper'
import MarqueeDivider from './components/marquee-divider'
import dynamic from 'next/dynamic'

// SSR-enabled: Content-heavy components that Google needs to index
import Problems from './components/problems'
import FAQ from './components/faq'
import ProcessSteps from './components/process-steps'
import Testimonials from './components/testimonials'
import ContactSection from './components/contact-section'

// Client-only: Components that rely on browser APIs (slider, maps, feeds)
const BeforeAfter = dynamic(() => import('./components/before-after'), {
  ssr: false,
})
const InstagramFeed = dynamic(() => import('./components/instagram-feed'), {
  ssr: false,
})
const ServiceArea = dynamic(() => import('./components/service-area'), {
  ssr: false,
})
import LazySection from './components/lazy-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-dark-navy">
      <Navbar />
      <Hero />
      <StatsBar />
      <FlagWrapper>
        <Badges />
        <About />
        <div className="w-full max-w-[1240px] mx-auto px-6 mt-12 md:mt-16">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfb163]/40 to-transparent"></div>
        </div>
        <Owners />
        <div className="w-full max-w-[1240px] mx-auto px-6 mb-6 md:mb-8">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfb163]/40 to-transparent"></div>
        </div>
        <Services />
      </FlagWrapper>

      <MarqueeDivider />

      <div className="w-full max-w-[1240px] mx-auto px-6 pb-2 md:pb-4">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfb163]/40 to-transparent"></div>
      </div>

      <LazySection height="500px">
        <BeforeAfter />
      </LazySection>

      <div className="w-full max-w-[1240px] mx-auto px-6 py-4 md:py-6 relative z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfb163]/40 to-transparent"></div>
      </div>

      <Problems />
      
      <div className="w-full max-w-[1240px] mx-auto px-6 py-2 md:py-4 relative z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfb163]/40 to-transparent"></div>
      </div>

      <FAQ />

      <div className="w-full max-w-[1240px] mx-auto px-6 py-2 md:py-4 relative z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfb163]/40 to-transparent"></div>
      </div>

      <ProcessSteps />

      <div className="w-full max-w-[1240px] mx-auto px-6 py-2 md:py-4 relative z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfb163]/40 to-transparent"></div>
      </div>

      <Testimonials />

      <div className="w-full max-w-[1240px] mx-auto px-6 py-2 md:py-4 relative z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfb163]/40 to-transparent"></div>
      </div>

      <LazySection height="400px">
        <InstagramFeed />
      </LazySection>

      <div className="w-full max-w-[1240px] mx-auto px-6 py-1 md:py-2 relative z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfb163]/40 to-transparent"></div>
      </div>

      <ContactSection />

      <LazySection height="500px">
        <ServiceArea />
      </LazySection>

      <FinalCta />
      <Footer />
      <FloatingMessage />
    </main>
  )
}

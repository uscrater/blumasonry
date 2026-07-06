import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locations } from '../../data/locations'
import Navbar from '../../components/navbar'
import StatsBar from '../../components/stats-bar'
import Badges from '../../components/badges'
import About from '../../components/about'
import Services from '../../components/services'
import Testimonials from '../../components/testimonials'
import ContactSection from '../../components/contact-section'
import FinalCta from '../../components/final-cta'
import Footer from '../../components/footer'
import BreadcrumbSchema from '../../components/breadcrumb-schema'
import FlagWrapper from '../../components/flag-wrapper'
import MarqueeDivider from '../../components/marquee-divider'
import FloatingMessage from '../../components/floating-message'
import { MapPin, ShieldCheck, Award, Clock } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locations.find((l) => l.slug === params.slug)
  if (!location) return { title: 'Not Found' }

  return {
    title: `Premium Masonry & Hardscaping in ${location.name}, ${location.state} | Blu Masonry`,
    description: `Expert masonry, stonework, and hardscaping services in ${location.name}. Fully licensed and insured local contractors serving ${location.region}.`,
    alternates: {
      canonical: `https://blumasonry.com/service-area/${params.slug}`,
    },
    openGraph: {
      title: `Masonry Services in ${location.name}, ${location.state}`,
      description: `Transform your ${location.name} property with expert masonry and precision stonework.`,
      images: ['/og-image.png'],
      url: `https://blumasonry.com/service-area/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Masonry Services in ${location.name}, ${location.state}`,
      description: `Transform your ${location.name} property with expert masonry and precision stonework.`,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function CityLandingPage({ params }: Props) {
  const location = locations.find((l) => l.slug === params.slug)
  if (!location) notFound()

  const stateName = location.state === 'MA' ? 'Massachusetts' : 'New Hampshire'

  const breadcrumbItems = [
    { name: 'Home', item: 'https://blumasonry.com' },
    { name: 'Service Area', item: 'https://blumasonry.com#ServiceArea' },
    { name: location.name, item: `https://blumasonry.com/service-area/${location.slug}` },
  ]

  return (
    <main className="min-h-screen bg-dark-navy">
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* City-specific LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Blu Masonry Inc.",
            "url": `https://blumasonry.com/service-area/${location.slug}`,
            "logo": "https://blumasonry.com/LOGO-BLU.webp",
            "description": `Expert masonry, stonework, and hardscaping services in ${location.name}, ${location.state}. Fully licensed and insured local contractors serving ${location.region}.`,
            "telephone": "+17816276932",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "43 Lupine Rd",
              "addressLocality": "Andover",
              "addressRegion": "MA",
              "postalCode": "01810",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "City",
              "name": `${location.name}, ${location.state}`
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "48"
            }
          })
        }}
      />
      <Navbar />
      
      {/* LOCALIZED HERO */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-navy/80 z-10" />
          <Image 
            src="https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775958022/IMG_3325_iilqdl_gpge3t.webp" 
            alt={`Premium Masonry and Stonework Craftsmanship in ${location.name}, ${location.state} by Blu Masonry Inc.`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-12 h-[1px] bg-[#E4B973]"></span>
              <span className="text-[#E4B973] font-roboto font-bold uppercase tracking-[0.3em] text-[13px]">
                Serving {location.name}, {location.state}
              </span>
            </div>
            
            <h1 className="font-roboto text-[40px] md:text-[64px] lg:text-[72px] font-bold text-white leading-[1.1] mb-8 uppercase tracking-tight">
              Premium Masonry & <br />
              <span className="text-[#E4B973]">Hardscaping</span> in {location.name}
            </h1>
            
            <p className="font-poppins text-[16px] md:text-[19px] text-white/70 leading-relaxed mb-10 max-w-2xl">
              Blumasonry delivers expert stonework and durable outdoor living solutions specifically designed for the climates of {stateName}. From {location.name} to the surrounding {location.region}, we build for quality and longevity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#Contact" className="px-8 py-4 bg-[#E4B973] text-dark-navy font-roboto font-bold uppercase tracking-widest text-[14px] hover:bg-white transition-all text-center">
                Get a Local Quote
              </a>
              <div className="flex items-center gap-4 px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
                <ShieldCheck className="text-[#E4B973]" size={20} />
                <span className="text-white/80 font-poppins text-[14px]">Fully Licensed & Insured in {location.state}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <FlagWrapper>
        <Badges />
        
        {/* LOCALIZED ABOUT SECTION */}
        <section className="py-20 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="shimmer-text font-sora text-[14px] font-semibold tracking-wider uppercase mb-4">Craftsmanship First</p>
              <h2 className="font-roboto text-[32px] md:text-[42px] font-bold text-white leading-tight mb-6 uppercase tracking-widest">
                Excellence in Stonework for {location.name} Properties
              </h2>
              <p className="font-poppins text-[15px] text-white/60 leading-relaxed mb-8">
                Operating throughout the {location.region}, we understand the specific architectural styles and environmental demands of {location.name}. Whether you are looking to restore a historic chimney or install a modern entertainment patio, our team combines technical precision with high-end aesthetics.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Award, title: 'Master Craftsmen', desc: 'Expertise in all stone types.' },
                  { icon: Clock, title: 'Built to Last', desc: `Designed for ${stateName} winters.` }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-[#E4B973]"><item.icon size={20} /></div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-white/40 text-[13px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
                <Image 
                  src="https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775864727/gallery/masonry/30550d8b-2c9d-4330-9df6-a2e0042225ce_ysx7ie.jpg" 
                  fill
                  className="object-cover" 
                  alt={`Masonry work by Blumasonry in ${location.name}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#E4B973] p-6 rounded-lg hidden md:block">
                <p className="text-dark-navy font-roboto font-bold text-center leading-tight">
                  <span className="text-[24px]">12+</span><br />
                  <span className="text-[12px] uppercase">Years Serving<br />{location.state}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED LOCAL SERVICES CONTENT SECTION FOR SEO DEPTH */}
        <section className="py-16 bg-[#0a1224]/50 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-roboto text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-4">
                Our Specialized Services in {location.name}, {location.state}
              </h2>
              <p className="font-poppins text-white/50 text-sm md:text-base leading-relaxed">
                We provide a comprehensive suite of structural and architectural services tailored specifically to meet the high standards of homes in the {location.region}.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#060D1C] p-8 rounded-xl border border-white/5">
                <h3 className="text-[#E4B973] font-roboto font-bold uppercase tracking-wider text-lg mb-4">
                  1. Local Masonry & Stonework
                </h3>
                <p className="font-poppins text-white/60 text-sm leading-relaxed">
                  From historic brick chimney repointing to premium natural stone veneers, our masonry services in {location.name} are designed for longevity. We match historic mortars, install robust footings, and construct beautiful fireplaces and stairs that elevate your home's curbside appeal and structural integrity.
                </p>
              </div>

              <div className="bg-[#060D1C] p-8 rounded-xl border border-white/5">
                <h3 className="text-[#E4B973] font-roboto font-bold uppercase tracking-wider text-lg mb-4">
                  2. Custom Patios & Hardscaping
                </h3>
                <p className="font-poppins text-white/60 text-sm leading-relaxed">
                  We engineer premium outdoor spaces, walkways, fire pits, and retaining walls throughout {location.name}. By focusing on proper sub-base excavation, soil compaction, and grading, we ensure your stone pavers stay level and intact through New England's intense winter freeze-thaw cycles.
                </p>
              </div>

              <div className="bg-[#060D1C] p-8 rounded-xl border border-white/5">
                <h3 className="text-[#E4B973] font-roboto font-bold uppercase tracking-wider text-lg mb-4">
                  3. Foundation & Waterproofing
                </h3>
                <p className="font-poppins text-white/60 text-sm leading-relaxed">
                  Basement water entry can severely compromise your foundation. Our waterproofing experts install interior French drains, heavy-duty sump pumps, and crawlspace vapor barriers in {location.name} homes. We manage hydraulic pressure to protect your foundation and maintain a healthy, dry indoor environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Services />
      </FlagWrapper>

      <MarqueeDivider />
      <Testimonials />
      <ContactSection />
      
      {/* LOCAL RELEVANCE FOOTER */}
      <section className="py-12 bg-[#040812] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-white/40 uppercase tracking-[0.2em] text-[11px] font-bold">
            <MapPin size={14} /> Local Service Area
          </div>
          <p className="text-white/30 text-[13px] max-w-2xl mx-auto italic">
            Blu Masonry Inc. proudly serves all neighborhoods in {location.name} and the surrounding North Shore, Merrimack Valley, and Southern New Hampshire regions. We are specialists in New England masonry standards.
          </p>
        </div>
      </section>

      <FinalCta />
      <Footer />
      <FloatingMessage />
    </main>
  )
}

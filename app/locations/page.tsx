import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { locations } from '../data/locations'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

// Group locations by region
const locationsByRegion = locations.reduce((acc, loc) => {
  if (!acc[loc.region]) acc[loc.region] = []
  acc[loc.region].push(loc)
  return acc
}, {} as Record<string, typeof locations>)

export const metadata = {
  title: 'Service Areas | Blu Masonry Inc.',
  description: 'Profound expertise in masonry and hardscaping across Massachusetts and Southern New Hampshire. Find your city and request a quote.',
  alternates: {
    canonical: 'https://blumasonry.com/locations',
  },
  openGraph: {
    title: 'Service Areas | Blu Masonry Inc.',
    description: 'Profound expertise in masonry and hardscaping across Massachusetts and Southern New Hampshire. Find your city and request a quote.',
    images: ['/og-image.png'],
    url: 'https://blumasonry.com/locations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Areas | Blu Masonry Inc.',
    description: 'Profound expertise in masonry and hardscaping across Massachusetts and Southern New Hampshire.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#060D1C]">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-20 border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center px-4 py-1.5 border border-[#E4B973]/20 rounded-full bg-[#E4B973]/5 mb-6">
              <span className="font-poppins text-[#E4B973] text-[11px] font-bold tracking-[0.3em] uppercase">
                Regional Presence
              </span>
            </div>
            <h1 className="font-roboto text-[40px] md:text-[64px] font-bold text-white mb-6 uppercase tracking-tight">
              Service <span className="text-[#E4B973] italic font-light">Areas</span>
            </h1>
            <p className="font-poppins text-white/40 text-[16px] md:text-[18px] max-w-2xl leading-relaxed">
              Serving the architectural standards of New England. We bring premium masonry and structural excellence to over 60 cities across MA and NH.
            </p>
          </div>
        </div>
      </section>

      {/* REGIONAL GRID */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {Object.entries(locationsByRegion).map(([region, cityList]) => (
              <div key={region} className="flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#E4B973]" />
                  <h2 className="font-roboto font-bold text-white text-[16px] uppercase tracking-[0.2em]">
                    {region}
                  </h2>
                </div>
                
                <ul className="space-y-3">
                  {cityList.sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
                    <li key={city.slug}>
                      <Link 
                        href={`/service-area/${city.slug}`}
                        className="font-poppins text-[14px] text-white/30 hover:text-[#E4B973] transition-colors"
                      >
                        {city.name}, {city.state}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELEVANCE FOOTER & REGIONAL DETAILS FOR SEO */}
      <section className="py-20 bg-black/20 border-t border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6 text-[#E4B973]">
               <MapPin size={24} />
               <span className="font-roboto font-bold uppercase tracking-widest text-[14px]">New England Regional Expertise</span>
            </div>
            <p className="font-poppins text-white/80 text-[16px] max-w-3xl mx-auto leading-relaxed">
               Blu Masonry Inc. is a fully licensed, insured, and certified contractor specializing in New England climates. Our regional knowledge of soil structure, freeze-thaw cycles, and architectural heritage ensures that our masonry, hardscaping, and basement waterproofing installations are built to last for generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="border border-white/5 p-6 rounded-lg bg-[#060D1C]/50">
              <h3 className="font-roboto font-bold text-white text-[15px] uppercase tracking-wider mb-3">Greater Boston Dispatch</h3>
              <p className="font-poppins text-white/50 text-[13px] leading-relaxed">
                Serving Boston, Cambridge, Newton, and surrounding areas. Our local crews specialize in custom residential patios, walkway paver installations, brick stair repairs, kitchen tiling, and interior foundation waterproofing.
              </p>
            </div>
            <div className="border border-white/5 p-6 rounded-lg bg-[#060D1C]/50">
              <h3 className="font-roboto font-bold text-white text-[15px] uppercase tracking-wider mb-3">North Shore & Coastal</h3>
              <p className="font-poppins text-white/50 text-[13px] leading-relaxed">
                Serving Salem, Beverly, Marblehead, and Gloucester. Coastal weather demands highly durable mortar mixes. We specialize in structural chimney repointing, coastal retaining walls, and fieldstone basement waterproofing.
              </p>
            </div>
            <div className="border border-white/5 p-6 rounded-lg bg-[#060D1C]/50">
              <h3 className="font-roboto font-bold text-white text-[15px] uppercase tracking-wider mb-3">Merrimack Valley</h3>
              <p className="font-poppins text-white/50 text-[13px] leading-relaxed">
                Serving Andover, North Andover, Lowell, and Newburyport. We offer professional basement French drain systems, crawlspace encapsulations, historic brick restorations, and premium outdoor stone fireplace designs.
              </p>
            </div>
            <div className="border border-white/5 p-6 rounded-lg bg-[#060D1C]/50">
              <h3 className="font-roboto font-bold text-white text-[15px] uppercase tracking-wider mb-3">Southern New Hampshire</h3>
              <p className="font-poppins text-white/50 text-[13px] leading-relaxed">
                Serving Salem NH, Windham, Bedford, and Portsmouth. Our NH crews specialize in heavy-duty frost-proof retaining walls, paver driveways, sub-floor sump pump basins, and freeze-thaw resistant outdoor kitchen stonework.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

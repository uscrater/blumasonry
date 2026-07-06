import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import FloatingMessage from '../../components/floating-message'
import BreadcrumbSchema from '../../components/breadcrumb-schema'
import { ChevronRight, ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react'
import ServiceContactForm from '../../components/service-contact-form'
import { FadeUp, FadeLeft, FadeRight, StaggerList, StaggerItem } from '../../components/service-page-animations'
type ServicePageData = {
  title: string
  shortTitle: string
  description: string
  intro: string
  longDescription: string
  image: string
  featureImage: string
  items: string[]
  process: Array<{ title: string; desc: string }>
  faqs: Array<{ q: string; a: string }>
  features: Array<{ title: string; desc: string; icon: any }>
  showcase: Array<{
    title: string
    description: string
    image: string
  }>
  section3Tag?: string
  section3Title1?: string
  section3Title2?: string
  methodologyTitle?: string
}

const services: Record<string, ServicePageData> = {
  'masonry-services': {
    title: 'Master Masonry Services in Massachusetts',
    shortTitle: 'Masonry Services',
    description: 'Premium masonry & stonework in Massachusetts. Custom chimneys, stairs, veneers & fireplaces built to withstand New England weather. Request a free quote!',
    intro: 'Built to Last. Crafted the Right Way.\n\nAt Blu Masonry Inc., we deliver expert masonry and stonework solutions tailored to the needs of Massachusetts homeowners. Our team combines decades of combined experience, premium materials, and precise execution to build structures that handle freeze-thaw cycles, moisture, and New England winters.\n\nWe focus on clean lines, precise structural cuts, and uncompromising safety standards.',
    longDescription: 'The Blu Masonry team does far more than simply lay brick and stone. We build structural solutions with purpose, durability, and craftsmanship. Every single project we undertake, whether it is a custom stone fireplace, a concrete foundation repair, or a historic brick chimney repointing, is designed and executed to the highest standards.\n\nWe analyze the properties of the mortar, match the geological characteristics of the stone, and ensure that water drainage is always directed away from the structural cores of your home. We stand behind our work because we know our masonry solutions elevate your home\'s aesthetic, structural integrity, and long-term valuation.',
    section3Tag: 'Excellence in Masonry',
    section3Title1: 'A Legacy of',
    section3Title2: 'Technical Precision',
    methodologyTitle: 'Our Process',
    image: '/images/services/masonry-1.webp',
    featureImage: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775958022/IMG_3325_iilqdl_gpge3t.webp',
    items: ['Chimney Repointing', 'Veneers Installation', 'Stonework', 'Concrete Work', 'Stairs', 'Stamped Concrete', 'Bulkhead Installation', 'Fireplaces', 'Sono Tubes', 'Footings'],
    process: [
      { title: 'Site Evaluation', desc: 'We assess soil conditions, local moisture levels, slope, and structural load requirements before the first stone or brick is placed. This critical step ensures a foundation that prevents future settling.' },
      { title: 'Expert Sourcing', desc: 'We source and install compatible mortar, premium natural or engineered stone, and structural components from our trusted suppliers to ensure long-term durability, visual cohesion, and compliance with Massachusetts building regulations.' },
      { title: 'Precision Execution', desc: 'Our highly skilled masonry crews follow strict quality control standards throughout the build process, focusing on clean cuts, level joints, correct structural bonds, and no shortcuts.' },
      { title: 'Final Protection', desc: 'We wash the masonry with specific cleaning agents, refine all joints, and apply premium breathable sealants where necessary to deliver a beautiful, polished, and weather-resistant result.' }
    ],
    faqs: [
      { q: 'How long does a stone chimney repointing last?', a: 'When done correctly with the right mortar mix matching your existing structure\'s density and breathability, a professional repointing job can last 25 to 50 years. Using incompatible mortar is the leading cause of premature failure in New England chimneys.' },
      { q: 'Is stamped concrete better than natural stone?', a: 'It depends on your budget, usage, and desired aesthetic. Stamped concrete offers incredible durability, seamless surfaces, and custom patterning at a lower cost, while natural stone provides a timeless, high-end look with unmatched organic texture and individual stone variation.' },
      { q: 'Can you match the mortar of my historic home?', a: 'Yes. We analyze the existing historic mortar\'s composition, color, sand size, and hardness to create a custom-tailored lime-based mix. This ensures a seamless, structurally compatible repair that prevents damage to older, softer brickwork.' },
      { q: 'Do you offer masonry repair for cracked foundations?', a: 'We specialize in structural masonry and foundation repairs. We identify the root cause of the cracking (such as hydrostatic pressure or settlement), stabilize the area, replace damaged sections, and install industrial-grade reinforcing components.' },
      { q: 'What is the difference between natural stone and stone veneer?', a: 'Natural stone consists of solid stone units cut for load-bearing or structural use, whereas stone veneer is a thin layer of natural or manufactured stone applied to a structural backing. Veneer is lighter and faster to install, making it ideal for interior accents and fireplace renovations.' }
    ],
    features: [
      { title: 'Masonry Specialists', desc: 'Masonry is not a side service. It is what we do, with focus, experience, and precision.', icon: Award },
      { title: 'Built for Massachusetts Weather', desc: 'Our work is made to handle freeze-thaw cycles, moisture, and the harsh demands of New England seasons.', icon: ShieldCheck },
      { title: 'Clean Lines. Precise Finish.', desc: 'From tight joints to accurate cuts, every detail is completed with care and consistency.', icon: CheckCircle2 }
    ],
    showcase: [
      { title: 'Structural Masonry Excellence', description: 'Advanced masonry techniques ensuring both structural integrity and a premium visual aesthetic.', image: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775878988/gallery/masonry/IMG_6649_mlmchf_uyjkle.webp' },
      { title: 'Signature Masonry Work', description: 'Exceptional craftsmanship delivering high-end masonry results for Massachusetts properties.', image: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775864727/gallery/masonry/30550d8b-2c9d-4330-9df6-a2e0042225ce_ysx7ie.jpg' },
      { title: 'Elegant Paver & Stone', description: 'High-quality masonry base and expert stone installation for an absolutely stunning outdoor living finish.', image: '/images/gallery/02.webp' },
    ],
  },
  'hardscaping': {
    title: 'Premium Hardscaping & Outdoor Living',
    shortTitle: 'Hardscaping',
    description: 'Custom patios, retaining walls, fire pits & outdoor kitchens in MA. Premium hardscaping engineered for freeze-thaw durability. Get a free estimate today!',
    intro: 'Transform your property with Blumasonry\'s engineered outdoor spaces. We combine water management, expert grading, and premium hardscape materials to create outdoor living areas with stunning visual impact.',
    longDescription: 'Hardscaping is more than just stacking stones; it\'s about creating dynamic, comfortable outdoor rooms that extend your home\'s usable space. At Blumasonry, we focus on the engineering beneath the surface. Proper excavation depth, deep base stone layering, heavy soil compaction, and customized drainage slopes ensure your patio remains perfectly level and your retaining walls stand upright for a lifetime without shifting or cracking.',
    section3Tag: 'Outdoor Craftsmanship',
    section3Title1: 'A Legacy of',
    section3Title2: 'Outdoor Mastery',
    methodologyTitle: 'Our Process',
    image: '/images/services/hardscape-1.webp',
    featureImage: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775864768/ffdb35cf-103b-4f3b-adb3-2b9a6f8426dc_ohkntv.jpg',
    items: ['Retaining Walls', 'Patios & Pavers', 'Pergolas', 'Firepits', 'Decks', 'Outdoor Kitchens', 'Bathtubs & Sauna'],
    process: [
      { title: 'Design & Grading', desc: 'We map out the flow of the space, check the property grading, analyze water runoff patterns, and plan any underground utility lines (such as gas for fire pits or electricity for outdoor kitchens).' },
      { title: 'Base Engineering', desc: 'We excavate the project area to reach stable subsoil, lay structural geotextile fabric, import premium crushed stone base, and compact it in stages using industrial vibrating plates to prevent shifting.' },
      { title: 'Structural Build', desc: 'We install premium pavers, build retaining walls with proper geogrid reinforcement and drainage backfill, and construct custom outdoor kitchens with precise technical alignment.' },
      { title: 'Clean & Seal', desc: 'We sweep specialized polymeric sand into the joints, mist it to activate the binding agents, clean the entire surface, and apply professional-grade sealants for an ever-clean finish.' }
    ],
    faqs: [
      { q: 'Do I need a permit for a retaining wall?', a: 'In Massachusetts, retaining walls over four feet in height typically require a building permit and stamped engineering plans. We handle the permitting, coordinate with local structural engineers, and ensure complete compliance with local building codes.' },
      { q: 'How do you prevent pavers from sinking?', a: 'Pavers sink due to poor base preparation. We prevent this by excavating deep enough to remove organic soils, using high-quality crushed stone base materials, and performing multi-stage compaction. We also install heavy-duty edge restraints to prevent lateral shifting.' },
      { q: 'How do you handle drainage in a new patio?', a: 'We design every patio with a minimum slope of 1-2% away from your home\'s foundation. In low areas or tight spaces where natural runoff is restricted, we install hidden channel drains, catch basins, or connection lines to French drains.' },
      { q: 'Can you build outdoor kitchens with integrated appliances?', a: 'Yes. We build custom masonry outdoor kitchen islands using concrete block cores or structural steel frames finished with natural stone veneer. We pre-plan cutouts for high-end grills, refrigerators, side burners, and trash bins.' },
      { q: 'How long does a typical paver patio project take?', a: 'A standard 400 to 600 square foot patio usually takes 5 to 7 business days from the initial excavation to the final polymeric sand setting, depending on site accessibility, custom cuts, and weather conditions.' }
    ],
    features: [
      { title: 'Drainage First', desc: 'Water is the enemy of hardscaping. We design every project with water-flow in mind.', icon: ShieldCheck },
      { title: 'Custom Design', desc: 'Every project is planned to match your property\'s unique layout, slope, and style vision.', icon: Award },
      { title: 'Lifetime Warranties', desc: 'We install premium products from Unilock & Techo-Bloc, backed by lifetime manufacturer warranties.', icon: CheckCircle2 }
    ],
    showcase: [
      { title: 'Master Hardscape Design', description: 'Exceptional outdoor living transformation featuring premium craftsmanship and precision engineering.', image: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775864727/gallery/hardscaping/15_FD_aocspa.png' },
      { title: 'Elegant Stone Stairs', description: 'Multi-level stone access built with precision grading and high-durability natural stone installation.', image: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775864804/gallery/masonry/IMG_4035_crnn3s.jpg' },
      { title: 'Modern Hardscape Finish', description: 'Exceptional attention to detail providing aesthetic and structural benefits to your property.', image: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775864770/gallery/hardscaping/dji_fly_20250711_124302_655_1754530075022_photo_optimized_gk5z6e.jpg' },
    ],
  },
  'tile-installation': {
    title: 'Precision Tile Installation & Renovation',
    shortTitle: 'Tile Installation',
    description: 'Bespoke tile installation in MA. Zero-lippage kitchen backsplashes, floor tiling, and waterproof showers. Premium local craftsmanship. Request a consultation!',
    intro: 'At Blumasonry, we know that high-end tiling requires more than a steady hand. It requires advanced knowledge of substrates, moisture management, uncoupling membranes, and layout planning.',
    longDescription: 'Our team at Blumasonry specializes in flawless, zero-lippage tile installations. Whether it is a complex herringbone pattern in a custom master shower or large-format porcelain tile flooring, we focus on the exact preparation of the substrate. By leveling subfloors, plumb-lining walls, and implementing full waterproofing, we ensure your tile remains beautiful, intact, and waterproof for decades.',
    section3Tag: 'Precision Tile Work',
    section3Title1: 'A Legacy of',
    section3Title2: 'Flawless Finishes',
    methodologyTitle: 'Our Process',
    image: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775864732/gallery/tile/A_6_iviic8.jpg',
    featureImage: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775864732/gallery/tile/A_6_iviic8.jpg',
    items: ['Kitchen Backsplash', 'Bathroom Showers', 'Bathroom Floors'],
    process: [
      { title: 'Substrate Prep', desc: 'We verify that floors are level and walls are perfectly plumb. We install cement backer boards or foam boards and tape all joints to create a rigid, stable foundation.' },
      { title: 'Laser Layout', desc: 'We map the room using precision cross-line lasers to establish a perfectly balanced tile layout, ensuring grid alignment and preventing awkward, small sliver cuts at the edges.' },
      { title: 'Setting & Grout', desc: 'We use high-performance modified thin-set mortars tailored to the tile material, apply tile leveling clips to eliminate lippage, and apply premium stain-resistant grout.' },
      { title: 'Detail Finish', desc: 'We perform a thorough cleanup to remove grout haze, apply flexible color-matched silicone caulking at all plane changes, and seal natural stone surfaces.' }
    ],
    faqs: [
      { q: 'How do you prevent grout from cracking?', a: 'Grout cracks due to structural movement. We prevent this by installing uncoupling membranes (like Schluter-Ditra) under floor tiles, using flexible polymer-modified grouts, and sealing all internal corners with matching flexible silicone caulk instead of hard grout.' },
      { q: 'Can you tile over existing tile?', a: 'While possible in limited circumstances using specific bonding primers, we highly recommend a complete tear-down to the studs. This allows us to inspect the substrate, check for structural rot, and install modern waterproofing membranes.' },
      { q: 'Do you handle the removal of old flooring?', a: 'Yes. We provide complete demolition, removal, and disposal services. We ensure your home is protected during the dusty tear-out phase and leave the project area clean, prepped, and ready for substrate installation.' },
      { q: 'Is a waterproof membrane necessary for all showers?', a: 'Absolutely. Tile and grout are not waterproof; they are porous. We install complete waterproofing systems (such as Schluter-Kerdi or Wedi) behind the tiles to manage moisture and prevent mold, wood rot, and structural leaks.' },
      { q: 'How do I choose the best grout color?', a: 'We provide physical grout color charts on-site. As a general guide, matching the grout color to the tile creates a seamless, spacious look, while a contrasting grout highlights the tile shape and layout pattern.' }
    ],
    features: [
      { title: 'Moisture-Ready', desc: 'We use industry-leading waterproofing systems (Schluter/Wedi).', icon: ShieldCheck },
      { title: 'Zero Lippage', desc: 'We use leveling systems to ensure a perfectly flat surface on every floor.', icon: Award },
      { title: 'Clean Site Policy', desc: 'Tiling is messy, but we keep your home protected and clean.', icon: CheckCircle2 }
    ],
    showcase: [
      { title: 'Custom Kitchen Backsplash', description: 'Flawless herringbone tile installation with exact pattern alignment and clean transitions for a high-end kitchen finish.', image: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1776044982/2729ad5f-6324-428c-884b-58f2606f3aaf_vw4oka.jpg' },
      { title: 'Custom Shower Enclosures', description: 'Flawless shower tile installations featuring integrated niches, precise grout lines, and uncompromising waterproofing systems.', image: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/v1775864734/gallery/tile/A_t8gb6q.jpg' },
      { title: 'Premium Tile Flooring', description: 'Durable and visually balanced floor tile layouts designed for longevity and style.', image: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/v1775864728/gallery/tile/A_1_y5hzn2.jpg' },
    ],
  },
  'basement-waterproofing': {
    title: 'Engineered Basement Waterproofing',
    shortTitle: 'Waterproofing',
    description: 'Protect your MA home with engineered waterproofing. Custom sump pumps, French drains, crawlspace encapsulation & repairs. Get a free inspection today!',
    intro: 'At Blumasonry, we do not just stop active leaks; we manage hydraulic pressure to keep your basement dry, clean, and structurally sound forever. We analyze water entry points to engineer custom solutions.',
    longDescription: 'Basement moisture and water intrusion pose a significant threat to your home\'s structural integrity, indoor air quality, and value. The Blumasonry approach goes beyond temporary sealants. We install professional interior drainage channels, high-capacity sub-floor sump pumps with battery backups, and heavy-duty vapor barriers. By actively redirecting hydrostatic pressure, we keep your foundation dry and secure.',
    section3Tag: 'Foundation Protection',
    section3Title1: 'A Legacy of',
    section3Title2: 'Structural Protection',
    methodologyTitle: 'Our Process',
    image: '/images/services/waterproof-1.jpg',
    featureImage: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1775958020/IMG_2964_otxc9d_ie1qnt.webp',
    items: ['Sump Pump', 'Perimeter Drain', 'French Drain', 'Crawlspace Encapsulation', 'Fieldstone Repointing', 'Full Waterproofing'],
    process: [
      { title: 'Hydraulic Analysis', desc: 'We inspect your basement, identify water entry points (like wall cracks or floor joints), and analyze local groundwater levels and exterior grading issues.' },
      { title: 'System Installation', desc: 'We cut the perimeter concrete floor, excavate a trench, lay perforated drainage pipes surrounded by clean stone, and install an airtight sump pump basin.' },
      { title: 'Barrier Application', desc: 'We apply heavy-duty moisture-barrier membranes to the basement walls or completely encapsulate crawlspaces using thick multi-layered vapor barriers.' },
      { title: 'Monitoring Set-up', desc: 'We install the primary pump, configure high-capacity battery backups, set up warning alarms, test the water discharge flow, and patch the concrete floor.' }
    ],
    faqs: [
      { q: 'What is Crawlspace Encapsulation?', a: 'Crawlspace encapsulation is the process of lining the crawlspace floor and walls with a heavy-duty, multi-layered plastic vapor barrier. This seals the space from outdoor air, controls humidity, prevents mold growth, stops wood rot, and improves your home\'s overall energy efficiency.' },
      { q: 'Does waterproofing increase home value?', a: 'Absolutely. A dry, certified basement protects your home\'s foundation, prevents mold issues, and converts damp storage space into usable square footage. Home inspectors and buyers value professional, warrantied waterproofing systems.' },
      { q: 'What is the warranty on your systems?', a: 'We offer extensive warranties on our waterproofing systems, typically ranging from 10 to 25 years. This includes guarantees on water redirection, pump function, vapor barriers, and our structural workmanship.' },
      { q: 'Can you install a sump pump in a finished basement?', a: 'Yes. We use wet-concrete saws connected to vacuums to minimize dust, remove only the necessary floor section, and run discharge pipes discreetly through closets or utility areas to keep the impact minimal.' },
      { q: 'Should I choose a French drain or exterior sealing?', a: 'It depends on soil conditions, landscaping, and water sources. Interior French drains are highly effective for managing high water tables and hydrostatic pressure beneath the floor, while exterior sealing is ideal for stopping water entry through wall cracks from the outside.' }
    ],
    features: [
      { title: 'Root Cause Approach', desc: 'We fix the source of the water, not just the visible dampness.', icon: ShieldCheck },
      { title: 'High-Flow Pumps', desc: 'Industrial grade sump pump systems with battery backups.', icon: Award },
      { title: 'Proven Results', desc: 'Tested through New England floods and heavy snow melts.', icon: CheckCircle2 }
    ],
    showcase: [
      { title: 'Basement Sealing', description: 'Targeted sealing strategy to reduce moisture intrusion and preserve structural integrity.', image: '/images/gallery/04.webp' },
      { title: 'Foundation Protection', description: 'Water-management upgrades built to keep foundation walls dry and protected year-round.', image: '/images/gallery/05.webp' },
      { title: 'Foundation Sealing Project', description: 'Advanced waterproofing installation using industrial-grade systems for complete protection.', image: 'https://res.cloudinary.com/dfxvzdv0u/image/upload/q_auto/f_auto/v1776050195/IMG_2155_xmbrmj.png' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services[params.slug]
  if (!service) return { title: 'Service Not Found' }

  return {
    title: `${service.shortTitle} | Blu Masonry Inc.`,
    description: service.description,
    alternates: {
      canonical: `https://blumasonry.com/services/${params.slug}`,
    },
    openGraph: {
      title: `${service.shortTitle} | Blu Masonry Inc.`,
      description: service.description,
      images: ['/og-image.png'],
      url: `https://blumasonry.com/services/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.shortTitle} | Blu Masonry Inc.`,
      description: service.description,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug]

  if (!service) {
    return (
      <main className="min-h-screen bg-dark-navy text-white flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link href="/" className="text-[#E4B973]">Back Home</Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#060D1C]">
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <BreadcrumbSchema items={[
        { name: 'Home', item: 'https://blumasonry.com' },
        { name: 'Services', item: 'https://blumasonry.com/#Service' },
        { name: service.shortTitle, item: `https://blumasonry.com/services/${params.slug}` },
      ]} />
      {/* FAQPage Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": service.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "serviceType": service.shortTitle,
            "provider": {
              "@type": "HomeAndConstructionBusiness",
              "name": "Blu Masonry Inc.",
              "url": "https://blumasonry.com"
            },
            "areaServed": {
              "@type": "State",
              "name": "Massachusetts"
            },
            "url": `https://blumasonry.com/services/${params.slug}`
          })
        }}
      />
      <Navbar />

      {/* PREMIUM HERO WITH WAVE DIVIDER */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-36 pb-20 md:pt-40 md:pb-40 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image} 
            alt={service.shortTitle} 
            fill
            className="object-cover scale-105" 
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1C] via-[#060D1C]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1C] via-transparent to-[#060D1C]/50" />
        </div>

        <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
          <FadeUp delay={0.1}>
            <Link href="/#Service" className="inline-flex items-center gap-2 mb-8 text-[#E4B973] hover:text-white transition-colors font-poppins text-xs tracking-[0.2em] uppercase font-bold">
              <span className="w-8 h-[1px] bg-current" /> Back to Services
            </Link>
          </FadeUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeLeft delay={0.2}>
              <h1 className="font-roboto text-[42px] md:text-[72px] font-bold text-white mb-8 leading-[1] tracking-tight uppercase drop-shadow-2xl">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? 'block' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="max-w-xl text-white/90 text-lg md:text-xl leading-relaxed font-poppins mb-10 drop-shadow-lg whitespace-pre-line">
                {service.intro}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#ServiceQuoteForm" className="px-10 py-5 bg-[#E4B973] text-[#081021] font-black text-sm tracking-[0.2em] uppercase rounded-full shadow-2xl hover:scale-105 hover:bg-white transition-all duration-300">
                  Request a Free Estimate
                </a>
              </div>
            </FadeLeft>
            
            <StaggerList className="hidden lg:grid grid-cols-2 gap-4">
              {service.features.map((feat, i) => (
                <StaggerItem key={i} className={i === 0 ? 'col-span-2' : ''}>
                  <div className={`p-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md hover:border-[#E4B973]/50 transition-colors group h-full`}>
                    <feat.icon className="text-[#E4B973] mb-4 group-hover:scale-110 transition-transform" size={28} />
                    <h3 className="text-white font-bold text-lg mb-2">{feat.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </div>

        {/* WAVE DIVIDER LAYERS (Static & Smooth) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg 
            className="relative block w-full h-[100px] md:h-[180px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            {/* Layer 1: Fixed Gold Wave (Background) */}
            <path 
              d="M0,0 C150,90 400,120 600,60 C800,0 1050,30 1200,80 V120 H0 Z" 
              fill="#E4B973" 
              opacity="0.2"
            />
            {/* Layer 2: Transition Wave (Main Navy) */}
            <path 
              d="M0,40 C200,120 400,140 600,80 C800,20 1000,60 1200,120 V120 H0 Z" 
              fill="#081021"
            />
          </svg>
        </div>
      </section>

      {/* SECOND SECTION: RECENT WORK: PORTFOLIO (SQUARE IMAGES, 3 COLUMNS, MAX WIDTH) */}
      <section className="pt-12 pb-4 md:py-24 bg-[#081021] relative z-20">
        <div className="max-w-[1600px] mx-auto px-6">
          <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {service.showcase.map((work) => (
              <StaggerItem key={work.title}>
                <article className="group">
                  <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-white/5 bg-[#0a1224] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 mb-4 md:mb-8">
                    <Image src={work.image} alt={work.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="px-2 text-center">
                    <h3 className="font-roboto text-xl text-white font-bold mb-3 uppercase tracking-widest">{work.title}</h3>
                    <p className="font-poppins text-white/50 text-sm leading-relaxed max-w-md mx-auto">{work.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerList>

          {/* MOBILE-ONLY CTA BUTTON */}
          <div className="mt-10 flex justify-center md:hidden">
            <a
              href="#ServiceQuoteForm"
              className="px-8 py-4 bg-[#E4B973] text-[#081021] font-black text-sm tracking-[0.2em] uppercase rounded-full shadow-xl hover:bg-white transition-all duration-300"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </section>

      {/* THIRD SECTION: INTRODUCTION SECTION: TEXT & PHOTO SPLIT */}
      <section className="pt-4 pb-12 md:py-24 bg-[#081021] relative z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Content */}
            <FadeLeft className="lg:col-span-7">
              <span className="text-[#E4B973] font-bold tracking-[0.3em] uppercase text-xs mb-6 block drop-shadow-sm">
                {service.section3Tag || 'Industry Excellence'}
              </span>
              <h2 className="text-white font-roboto text-3xl md:text-5xl xl:text-6xl font-black mb-6 uppercase leading-tight tracking-wider">
                {service.section3Title1 || 'A Legacy of'} <br />
                <span className="text-[#E4B973] italic font-light font-poppins drop-shadow-md">{service.section3Title2 || 'Technical Precision'}</span>
              </h2>

              {/* MOBILE-ONLY: Feature image right after title */}
              <div className="block lg:hidden mb-8 relative">
                <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
                  <Image
                    src={service.featureImage}
                    alt={`${service.shortTitle} detail`}
                    width={800}
                    height={600}
                    className="w-full object-cover aspect-[4/3]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1C] via-transparent to-transparent opacity-30" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none font-poppins text-white/80 leading-relaxed text-lg md:text-xl space-y-8">
                <p className="border-l-2 border-[#E4B973]/30 pl-8 italic whitespace-pre-line">
                  {service.longDescription}
                </p>
                <div className="pt-8">
                  <h3 className="text-[#E4B973] font-bold text-lg mb-6 uppercase tracking-widest">{service.methodologyTitle || 'Our Methodology'}</h3>
                  <StaggerList className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
                    {service.process.map((step, i) => (
                      <StaggerItem key={i}>
                        <div className="flex gap-4 group">
                          <span className="text-3xl font-black text-[#E4B973]/20 group-hover:text-[#E4B973]/40 transition-colors">
                            0{i + 1}
                          </span>
                          <div>
                            <h4 className="text-white font-bold text-sm uppercase mb-1 tracking-wider">{step.title}</h4>
                            <p className="text-white/40 text-[13px] leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerList>
                </div>
              </div>
            </FadeLeft>

            {/* Right: Feature Image — Desktop only */}
            <FadeRight className="hidden lg:block lg:col-span-5 relative">
              <div className="absolute -inset-4 border border-[#E4B973]/20 rounded-2xl transform rotate-3 z-0" />
              <div className="relative z-10 aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 group">
                <Image 
                  src={service.featureImage} 
                  alt={`${service.shortTitle} detail`} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1C] via-transparent to-transparent opacity-40" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#E4B973] p-8 rounded-xl shadow-2xl z-20 hidden md:block">
                <ShieldCheck className="text-dark-navy mb-2" size={32} />
                <p className="text-dark-navy font-black text-xs uppercase tracking-tighter">Certified <br />Craftsmanship</p>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* THIN GOLD DIVIDER LINE */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E4B973]/50 to-transparent relative z-20" />

      {/* SPECIALIZED CAPABILITIES */}
      <section className="pt-12 md:pt-24 pb-6 md:pb-12 bg-[#081021] relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
              <div>
                 <h2 className="text-white font-roboto text-3xl md:text-5xl font-bold uppercase tracking-widest leading-none">
                   Specialized <span className="text-[#E4B973]">Work</span>
                 </h2>
                 <p className="text-white/40 mt-4 font-poppins text-sm md:text-base tracking-wide">Every stone and joint executed to the highest New England engineering standards.</p>
              </div>
              <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-white/5 to-transparent mx-8 hidden md:block" />
              <a href="#ServiceQuoteForm" className="text-[#E4B973] font-bold uppercase text-xs tracking-[0.3em] hover:text-white transition-colors flex items-center gap-2 group">
                Get a Quote <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeUp>

          <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.items.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-4 p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-[#E4B973]/30 transition-all group overflow-hidden relative h-full">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#E4B973]/5 rounded-bl-[100px] -mr-8 -mt-8 group-hover:bg-[#E4B973]/10 transition-colors" />
                  <CheckCircle2 size={20} className="text-[#E4B973] shrink-0" />
                  <span className="text-white font-bold text-sm tracking-widest uppercase py-1">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* THIN GOLD DIVIDER LINE */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E4B973]/50 to-transparent relative z-20" />

      {/* FINAL CTA & INTEGRATED FORM */}
      <section id="ServiceQuoteForm" className="pt-6 pb-20 md:py-32 relative overflow-hidden bg-[#081021]">
          {/* Background Layers */}
          <div className="absolute inset-0 z-0">
            {/* Texture Layer */}
            <div 
              className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none"
              style={{ 
                backgroundImage: "url('/hardscape1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />

            {/* Glowing Accent Orbs */}
            <div className="absolute top-0 -left-[10%] w-[600px] h-[600px] bg-[#E4B973]/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 -right-[10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Eagle Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] opacity-[0.04] pointer-events-none transition-all duration-1000">
              <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#E4B973] w-full h-full">
                <path d="M50 10 C45 25 30 35 10 40 C25 45 40 55 45 75 C50 60 65 55 90 50 C70 45 55 35 50 10 Z" />
                <path d="M50 20 L52 28 L60 30 L52 32 L50 40 L48 32 L40 30 L48 28 Z" opacity="0.3" />
              </svg>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#081021] via-transparent to-[#081021]" />
          </div>

          <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
            <FadeUp>
              <h2 className="font-roboto text-3xl md:text-5xl font-bold mb-12 tracking-tight uppercase leading-tight">
                Ready to start your <br />
                <span className="text-[#E4B973] italic font-light font-poppins drop-shadow-md">{service.shortTitle}</span> project?
              </h2>
            </FadeUp>
            
            {/* The Integrated Form */}
            <div className="mb-16">
              <ServiceContactForm defaultService={service.shortTitle} />
            </div>

            <div className="pt-8 border-t border-white/5">
               <Link href="/projects" className="text-white/40 hover:text-[#E4B973] transition-colors font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-2 group">
                 Or Browse All Projects <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>
        </section>

      <Footer />
      <FloatingMessage />
    </main>
  )
}

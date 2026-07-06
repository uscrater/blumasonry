import Link from 'next/link'
import Image from 'next/image'
import { Home, ArrowLeft, Phone, MapPin } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Blu Masonry Inc.',
  description: 'The page you are looking for does not exist. Explore our masonry, hardscaping, tile installation, and waterproofing services in Massachusetts.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#060D1C] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 -left-[20%] w-[600px] h-[600px] bg-[#E4B973]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 -right-[20%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl">
        {/* Logo */}
        <Link href="/" className="inline-block mb-12">
          <Image
            src="/LOGO-BLU.webp"
            alt="Blu Masonry Inc."
            width={180}
            height={72}
            className="h-20 w-auto mx-auto"
          />
        </Link>

        {/* 404 Number */}
        <h1 className="font-roboto text-[120px] md:text-[180px] font-bold text-white/5 leading-none select-none">
          404
        </h1>

        {/* Message */}
        <div className="-mt-12 md:-mt-16">
          <p className="font-poppins text-[#E4B973] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Page Not Found
          </p>
          <h2 className="font-roboto text-2xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
            This Page Doesn&apos;t Exist
          </h2>
          <p className="font-poppins text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
            The page you&apos;re looking for may have been moved or no longer exists. Let us help you find what you need.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E4B973] text-[#060D1C] font-bold text-sm tracking-[0.15em] uppercase rounded-full shadow-xl hover:bg-white hover:scale-105 transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link
            href="/#Contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-[0.15em] uppercase rounded-full hover:border-[#E4B973]/50 hover:text-[#E4B973] transition-all duration-300"
          >
            <Phone size={18} />
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/10 pt-10">
          <p className="font-poppins text-white/30 text-xs tracking-[0.2em] uppercase mb-6">
            Explore Our Services
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Masonry Services', href: '/services/masonry-services' },
              { label: 'Hardscaping', href: '/services/hardscaping' },
              { label: 'Tile Installation', href: '/services/tile-installation' },
              { label: 'Waterproofing', href: '/services/basement-waterproofing' },
              { label: 'Service Areas', href: '/locations' },
              { label: 'Projects', href: '/projects' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-xs font-poppins text-white/40 border border-white/10 rounded-full hover:border-[#E4B973]/30 hover:text-[#E4B973] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

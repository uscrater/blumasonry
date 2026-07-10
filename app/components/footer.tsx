'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react'

const googleMapsUrl = 'https://www.google.com/maps/place/Blu+Masonry/@42.4283198,-71.0770318,17z'

const navLinks = [
  { label: 'About Us', href: '/#AboutUs' },
  { label: 'Our Services', href: '/#Service' },
  { label: 'Before & After', href: '/#before-after' },
  { label: 'Our Process', href: '/#Process' },
  { label: 'Client Reviews', href: '/#testimonials' },
  { label: 'Service Areas', href: '/locations' },
  { label: 'Contact Us', href: '/#Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#040812] relative overflow-hidden">
      
      {/* Subtle Eagle Watermark - ORIGINAL VERSION */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none z-0" aria-hidden="true">
        <Image 
          src="/eagle-bg.webp"
          alt="Blu Masonry Eagle Watermark"
          fill
          className="object-contain object-right-bottom"
          sizes="500px"
          priority={false}
        />
      </div>

      {/* Top golden border */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#E4B973] to-transparent" />

      {/* MAIN FOOTER GRID */}
      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* ===== COL 1: BRAND ===== */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/LOGO-BLU.webp"
                alt="Blu Masonry Inc."
                width={200}
                height={80}
                className="h-20 w-auto mb-6"
              />
            </Link>
            <p className="font-poppins text-[14px] text-white/60 leading-relaxed mb-6 max-w-[260px]">
              A family-owned masonry company combining passion, precision, and decades of experience to transform your property.
            </p>
            {/* Patriotic tagline */}
            <div className="flex items-center gap-3">
              <span className="text-[22px]">🇺🇸</span>
              <div>
                <p className="font-roboto font-bold text-white text-[13px] tracking-wider uppercase">Proudly American</p>
                <p className="font-poppins text-[12px] text-white/60 tracking-widest">Building Dreams Since 2023</p>
              </div>
            </div>
          </div>

          {/* ===== COL 2: NAVIGATION ===== */}
          <div>
            <h3 className="font-roboto font-bold text-[#E4B973] text-[13px] tracking-[0.2em] uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 font-poppins text-[14px] text-white/60 hover:text-white hover:gap-3 transition-all duration-200 group"
                  >
                    <ChevronRight size={14} className="text-[#E4B973] opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== COL 3: CONTACT ===== */}
          <div>
            <h3 className="font-roboto font-bold text-[#E4B973] text-[13px] tracking-[0.2em] uppercase mb-6">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+17816276932"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#E4B973]/40 transition-colors">
                    <Phone size={15} className="text-[#E4B973]" />
                  </div>
                  <div>
                    <p className="font-roboto font-bold text-white/60 text-[11px] uppercase tracking-wider mb-1">Phone</p>
                    <p className="font-roboto text-[15px] text-white group-hover:text-[#E4B973] transition-colors">+1 781-627-6932</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@blumasonry.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#E4B973]/40 transition-colors">
                    <Mail size={15} className="text-[#E4B973]" />
                  </div>
                  <div>
                    <p className="font-roboto font-bold text-white/60 text-[11px] uppercase tracking-wider mb-1">Email</p>
                    <p className="font-roboto text-[15px] text-white group-hover:text-[#E4B973] transition-colors">sales@blumasonry.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#E4B973]/40 transition-colors">
                    <MapPin size={15} className="text-[#E4B973]" />
                  </div>
                  <div>
                    <p className="font-roboto font-bold text-white/60 text-[11px] uppercase tracking-wider mb-1">Location</p>
                    <p className="font-roboto text-[14px] text-white/70 group-hover:text-white transition-colors leading-snug">43 Lupine Rd,<br />Andover MA 01810</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* ===== COL 4: SOCIAL + HOURS ===== */}
          <div>
            <h3 className="font-roboto font-bold text-[#E4B973] text-[13px] tracking-[0.2em] uppercase mb-6">
              Follow & Connect
            </h3>

            {/* Social icons */}
            <div className="flex gap-3 mb-8">
              <a href="https://www.facebook.com/share/1E5SyvARkk/" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4B973]/10 hover:border-[#E4B973]/40 transition-all duration-200 group" aria-label="Facebook">
                <Facebook size={18} className="text-white/70 group-hover:text-[#E4B973] transition-colors" />
              </a>
              <a href="https://www.instagram.com/blumasonry" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4B973]/10 hover:border-[#E4B973]/40 transition-all duration-200 group" aria-label="Instagram">
                <Instagram size={18} className="text-white/70 group-hover:text-[#E4B973] transition-colors" />
              </a>
              <a href="https://www.yelp.com/biz/blumasonry-malden" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4B973]/10 hover:border-[#E4B973]/40 transition-all duration-200 group" aria-label="Yelp">
                <span className="font-bold text-[15px] text-white/70 group-hover:text-[#E4B973] transition-colors">Y</span>
              </a>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4B973]/10 hover:border-[#E4B973]/40 transition-all duration-200 group" aria-label="Google">
                <span className="font-bold text-[15px] text-white/70 group-hover:text-[#E4B973] transition-colors">G</span>
              </a>
            </div>

            {/* Hours */}
            <h3 className="font-roboto font-bold text-[#E4B973] text-[13px] tracking-[0.2em] uppercase mb-4">
              Hours
            </h3>
            <ul className="space-y-2">
              {[
                { day: 'Mon – Fri', hours: '7:00 AM – 6:00 PM' },
                { day: 'Saturday', hours: '8:00 AM – 4:00 PM' },
                { day: 'Sunday', hours: 'By Appointment' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Clock size={13} className="text-[#E4B973] flex-shrink-0" />
                  <span className="font-poppins text-[13px] text-white/60">{item.day}:</span>
                  <span className="font-poppins text-[13px] text-white/80 font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BUSINESS DISCLAIMER */}
        <div className="border-t border-white/[0.06] pt-6 pb-4 mb-2">
          <p className="font-poppins text-[11px] md:text-[12px] text-white/30 text-center leading-relaxed max-w-3xl mx-auto italic">
            Please note: Blu Masonry Inc. is a masonry and hardscaping <span className="text-white/50 font-medium">service contractor</span>. We do not sell or supply raw masonry materials directly to the public. We provide full-service installation using premium components from our trusted partners.
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-poppins text-[13px] text-white/60">
              © {new Date().getFullYear()} Blu Masonry Inc. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-poppins text-[12px] text-white/60">
              <span className="w-2 h-2 rounded-full bg-[#E4B973]/40" />
              Licensed & Insured in MA
            </span>
            <span className="flex items-center gap-2 font-poppins text-[12px] text-white/60">
              <span className="w-2 h-2 rounded-full bg-[#E4B973]/40" />
              Serving MA & Southern NH
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}

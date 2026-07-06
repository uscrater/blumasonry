'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

interface MenuItem {
  label: string
  href: string
  hasDropdown?: boolean
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { label: 'Masonry Services', href: '/services/masonry-services' },
    { label: 'Hardscaping', href: '/services/hardscaping' },
    { label: 'Tile Installation', href: '/services/tile-installation' },
    { label: 'Basement Waterproofing', href: '/services/basement-waterproofing' },
  ]

  const menuItems = [
    { label: 'ABOUT US', href: '/#AboutUs' },
    { label: 'SERVICES', href: '#', hasDropdown: true },
    { label: 'SERVICE AREA', href: '/locations' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-navy/95 backdrop-blur-md shadow-lg py-1' : 'bg-dark-navy py-2'
      }`}
    >
      <div className="max-w-[1550px] w-full mx-auto flex items-center justify-between px-6 xl:px-8">
        {/* Logo */}
        <div className="w-[200px] xl:w-[250px]">
          <Link href="/" className="inline-block py-1">
            <Image
              src="/LOGO-BLU.webp"
              alt="Blu Masonry Inc. Logo"
              width={180}
              height={140}
              sizes="(max-width: 768px) 120px, 180px"
              priority
              className="h-20 lg:h-[115px] w-auto object-contain transition-all duration-300 transform origin-left hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1">
          {menuItems.map((item: MenuItem) => (
            <div key={item.label} className="relative group">
              {item.hasDropdown ? (
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  className="glow-border-nav font-poppins text-[12px] xl:text-[14px] font-bold text-white uppercase tracking-wider px-6 xl:px-8 py-3 rounded-full flex items-center gap-2 group-hover:text-gold transition-colors whitespace-nowrap"
                >
                  {item.label} <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="glow-border-nav font-poppins text-[12px] xl:text-[14px] font-bold text-white uppercase tracking-wider px-6 xl:px-8 py-3 rounded-full hover:text-gold transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <div 
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                >
                  <div className="bg-[#0a1224] border border-white/10 rounded-2xl p-6 w-[280px] shadow-2xl backdrop-blur-xl">
                    <div className="flex flex-col gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="font-poppins text-[13px] font-semibold text-white/70 hover:text-[#E4B973] transition-colors flex items-center justify-between group/item"
                        >
                          {service.label}
                          <ChevronDown size={14} className="-rotate-90 opacity-0 group-hover/item:opacity-100 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex w-[200px] xl:w-[260px] justify-end">
          <Link
            href="/#Contact"
            className="bg-[#dfb163] text-[#0A101D] font-poppins text-[12px] xl:text-[14px] font-bold uppercase tracking-wider px-6 xl:px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-md whitespace-nowrap"
          >
            REQUEST A FREE QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-dark-navy border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item: MenuItem) => (
                <div key={item.label} className="flex flex-col gap-4">
                  {item.hasDropdown ? (
                    <>
                      <button 
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="font-poppins text-[16px] font-bold text-white flex items-center justify-between"
                      >
                        {item.label} <ChevronDown size={18} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 flex flex-col gap-4 overflow-hidden"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
                                className="font-poppins text-[14px] font-medium text-white/60"
                              >
                                {service.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-poppins text-[16px] font-bold text-white hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/#Contact"
                onClick={() => setMobileOpen(false)}
                className="bg-[#dfb163] text-[#0A101D] font-poppins text-[14px] font-bold px-6 py-4 rounded-full w-full text-center"
              >
                REQUEST A FREE QUOTE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

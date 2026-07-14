'use client'

import { useState, useEffect } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ShieldCheck } from 'lucide-react'
import { trackLead } from '@/lib/analytics'
import { captureUtms, getUtms } from '@/lib/utm'

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', phone: '', street: '', number: '', zip: '', city: '', state: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  // Capture UTM/click params on landing so they survive navigation.
  useEffect(() => { captureUtms() }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))

    // ZIP Lookup logic
    if (name === 'zip' && value.length === 5) {
      handleZipLookup(value)
    }
  }

  const handleZipLookup = async (zip: string) => {
    try {
      const res = await fetch(`https://api.zippopotam.us/us/${zip}`)
      if (res.ok) {
        const data = await res.json()
        const place = data.places[0]
        setForm(prev => ({
          ...prev,
          city: place['place name'],
          state: place['state abbreviation']
        }))
      }
    } catch (err) {
      console.error('ZIP lookup failed', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.street || !form.city || !form.state || !form.zip) return
    setLoading(true)
    setError(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          ...getUtms(),
          source: `Homepage — Contact Section`,
        }),
      })

      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      trackLead({ source: 'Homepage — Contact Section', service: form.service })
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const inputStyles = (name: string) => `
    w-full bg-white/[0.02] border transition-all duration-500 px-5 py-3.5 md:px-6 md:py-4 rounded-xl
    text-white font-poppins text-[14px] md:text-[15px] outline-none
    ${focusedField === name 
      ? 'border-[#E4B973] bg-white/[0.08] shadow-[0_0_20px_rgba(228,185,115,0.08)]' 
      : 'border-white/5 hover:border-white/10'}
  `

  const labelStyles = (name: string) => `
    absolute left-6 transition-all duration-300 pointer-events-none font-poppins
    ${focusedField === name || form[name as keyof typeof form] 
      ? '-top-3 text-[10px] text-[#E4B973] bg-[#0A101C] px-2 uppercase tracking-[0.2em] font-bold z-10' 
      : 'top-[18px] text-[15px] text-white/30'}
  `

  return (
    <LazyMotion features={domAnimation}>
      <section id="Contact" ref={ref} className="relative pt-8 md:pt-16 lg:pt-20 pb-24 overflow-hidden bg-[#060D1C]">
        
        {/* BACKGROUND ELEMENTS - Optimized */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/flag-bg.webp"
            alt="American flag watermark"
            fill
            quality={30}
            className="object-cover object-center opacity-[0.02] grayscale pointer-events-none"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060D1C] via-transparent to-[#060D1C]" />
          
          {/* Animated Glows */}
          <m.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#E4B973] rounded-full blur-[150px]"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 lg:items-start">
            
            {/* LEFT CONTENT: Title & Info */}
            <div className="lg:col-span-4 pt-2 lg:pt-8">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-[#E4B973]/30" />
                  <span className="text-[#E4B973] font-poppins text-[12px] lg:text-[13px] font-bold tracking-[0.3em] uppercase">
                    Contact Us
                  </span>
                </div>
                
                <h2 className="font-roboto text-[32px] md:text-[44px] lg:text-[52px] font-black text-white leading-[1.1] mb-8 tracking-tighter uppercase">
                  Ready to <br />
                  <span className="text-[#E4B973] italic font-light lowercase">start</span> <br />
                  your project?
                </h2>

                <p className="font-poppins text-[16px] md:text-[17px] text-white/40 leading-relaxed max-w-[450px] mb-12">
                  Every project begins with a conversation. Request your <span className="text-white font-bold underline decoration-[#E4B973]/50 underline-offset-8">Free Inspection</span> and let's build something lasting.
                </p>

                {/* INFORMATION CARDS (Desktop) */}
                <div className="hidden lg:grid grid-cols-1 gap-3.5">
                  <div className="group flex items-center gap-6 p-6 bg-[#0a1224]/40 border border-white/5 rounded-2xl transition-all duration-500 hover:border-[#E4B973]/20">
                    <div className="w-12 h-12 rounded-xl bg-[#E4B973]/5 border border-[#E4B973]/20 flex items-center justify-center text-[#E4B973] group-hover:bg-[#E4B973] group-hover:text-dark-navy transition-all duration-500">
                      <Phone size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest mb-1">Office Line</span>
                      <a href="tel:7816276932" className="text-white text-[18px] font-bold tracking-tight hover:text-[#E4B973] transition-colors italic">781.627.6932</a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-6 p-6 bg-[#0a1224]/40 border border-white/5 rounded-2xl transition-all duration-500 hover:border-[#E4B973]/20">
                    <div className="w-12 h-12 rounded-xl bg-[#E4B973]/5 border border-[#E4B973]/20 flex items-center justify-center text-[#E4B973] group-hover:bg-[#E4B973] group-hover:text-dark-navy transition-all duration-500">
                      <Mail size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest mb-1">Direct Email</span>
                      <a href="mailto:sales@blumasonry.com" className="text-white text-[18px] font-bold tracking-tight hover:text-[#E4B973] transition-colors italic">sales@blumasonry.com</a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-6 p-6 bg-[#0a1224]/40 border border-white/5 rounded-2xl transition-all duration-500 hover:border-[#E4B973]/20">
                    <div className="w-12 h-12 rounded-xl bg-[#E4B973]/5 border border-[#E4B973]/20 flex items-center justify-center text-[#E4B973] group-hover:bg-[#E4B973] group-hover:text-dark-navy transition-all duration-500">
                      <MapPin size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest mb-1">Company Address</span>
                      <a href="https://www.google.com/maps/place/Blu+Masonry/@42.4283198,-71.0770318,17z" target="_blank" rel="noopener noreferrer" className="text-white text-[18px] font-bold tracking-tight hover:text-[#E4B973] transition-colors italic">43 Lupine Rd, Andover MA 01810</a>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>

            {/* RIGHT CONTENT: Form Card */}
            <div className="lg:col-span-8 lg:pt-10 xl:pt-12">
              <m.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-gradient-to-br from-[#0a1224] to-[#040812] border border-white/5 border-t-white/10 p-8 md:p-12 lg:p-14 rounded-2xl backdrop-blur-xl relative group overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
              >
                {/* Card Metallic Sweep */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div className="flex flex-col mb-10 relative z-10">
                   <h3 className="font-roboto text-[22px] md:text-[28px] font-bold text-white mb-2 italic">Project Details</h3>
                   <p className="font-poppins text-white/40 text-[14px]">Tell us about your vision so we can provide an accurate quote.</p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center relative z-10">
                    <div className="w-20 h-20 bg-[#E4B973] rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(228,185,115,0.4)]">
                      <CheckCircle size={40} className="text-dark-navy" />
                    </div>
                    <h3 className="font-roboto text-[28px] md:text-[32px] font-bold text-white mb-4 italic">Sent Successfully</h3>
                    <p className="font-poppins text-white/50 text-[15px] md:text-[16px] max-w-[300px] italic">
                      Our team is reviewing your project details.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-10 w-full py-4 border border-[#E4B973]/30 rounded-xl font-bold text-[#E4B973] hover:bg-[#E4B973] hover:text-dark-navy transition-all uppercase tracking-widest text-[11px]"
                    >
                      Resubmit Another Briefing
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-10">
                      
                      {/* Field: Name */}
                      <div className="relative">
                        <label className={labelStyles('name')}>Contact Name</label>
                        <input 
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputStyles('name')}
                        />
                      </div>

                      {/* Field: Phone */}
                      <div className="relative">
                        <label className={labelStyles('phone')}>Direct Phone</label>
                        <input 
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputStyles('phone')}
                        />
                      </div>

                      {/* Field: Email */}
                      <div className="relative md:col-span-1">
                        <label className={labelStyles('email')}>Email Address</label>
                        <input 
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputStyles('email')}
                        />
                      </div>

                      {/* Field: Service */}
                      <div className="relative md:col-span-1">
                        <label className={labelStyles('service')}>Proposed Service</label>
                        <select 
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          className={inputStyles('service') + ' cursor-pointer'}
                        >
                          <option value="" disabled className="bg-[#060D1C]"></option>
                          <option value="hardscaping" className="bg-[#060D1C]">Hardscaping & Design</option>
                          <option value="masonry" className="bg-[#060D1C]">Professional Masonry</option>
                          <option value="tile" className="bg-[#060D1C]">Custom Tile Work</option>
                          <option value="waterproofing" className="bg-[#060D1C]">Engineering & Waterproofing</option>
                        </select>
                      </div>

                      {/* Field: Street Address */}
                      <div className="relative md:col-span-1">
                        <label className={labelStyles('street')}>Street Address</label>
                        <input 
                          name="street"
                          value={form.street}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('street')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder={focusedField === 'street' ? 'e.g. 123 Main St' : ''}
                          className={inputStyles('street')}
                        />
                      </div>

                      {/* Field: Number / Apt */}
                      <div className="relative md:col-span-1">
                        <label className={labelStyles('number')}>Apt/Suite/No. (Optional)</label>
                        <input 
                          name="number"
                          value={form.number}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('number')}
                          onBlur={() => setFocusedField(null)}
                          className={inputStyles('number')}
                        />
                      </div>

                      {/* Field: ZIP Code */}
                      <div className="relative md:col-span-2">
                         <label className={labelStyles('zip')}>ZIP Code</label>
                         <input 
                           name="zip"
                           value={form.zip}
                           onChange={handleChange}
                           onFocus={() => setFocusedField('zip')}
                           onBlur={() => setFocusedField(null)}
                           required
                           className={inputStyles('zip')}
                         />
                      </div>

                      {/* Field: City */}
                      <div className="relative">
                        <label className={labelStyles('city')}>City</label>
                        <input 
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('city')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputStyles('city')}
                        />
                      </div>

                      {/* Field: State */}
                      <div className="relative">
                        <label className={labelStyles('state')}>State</label>
                        <input 
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('state')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputStyles('state')}
                        />
                      </div>

                      {/* Field: Message */}
                      <div className="relative md:col-span-2">
                        <label className={labelStyles('message')}>Project Requirements</label>
                        <textarea 
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows={1}
                          className={inputStyles('message') + ' resize-none'}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full relative group overflow-hidden rounded-xl h-[64px] md:h-[72px]"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <div className="h-full bg-white text-[#060D1C] font-roboto font-black uppercase tracking-[0.25em] text-[13px] md:text-[14px] shadow-xl flex items-center justify-center gap-3 md:gap-4 transition-all">
                        {loading ? 'ANALYZING...' : (
                          <>
                            <span className="relative z-10">Submit Your Free Quote Request</span>
                            <Send size={18} className="relative z-10 text-[#E4B973]" />
                          </>
                        )}
                      </div>
                      {/* Inner gold line that glows */}
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E4B973] shadow-[0_0_15px_#E4B973]" />
                    </button>

                    <div className="flex items-center justify-center gap-4 py-4">
                      <ShieldCheck size={16} className="text-[#E4B973] opacity-60" />
                      <p className="font-poppins text-[10px] uppercase tracking-[0.2em] text-white/30">
                         Licensed • Insured • Guaranteed
                      </p>
                    </div>

                    <p className="font-poppins text-[10px] text-white/20 text-center leading-relaxed italic max-w-md mx-auto">
                      Please note: Blu Masonry Inc. is a service contractor. We do not sell or supply raw masonry materials directly to the public.
                    </p>

                    {error && (
                      <p className="text-center text-red-400 font-poppins text-[13px] mt-2">
                        Something went wrong. Please try again or call us at <a href="tel:7816276932" className="text-[#E4B973] underline">781.627.6932</a>.
                      </p>
                    )}
                  </form>
                )}
              </m.div>
            </div>

            {/* MOBILE CONTACT INFO */}
            <div className="lg:hidden col-span-full mt-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-[#0a1224]/40 border border-white/5 rounded-2xl flex items-center gap-4">
                        <Phone size={18} className="text-[#E4B973]" />
                        <a href="tel:7816276932" className="text-white font-bold tracking-tight">781.627.6932</a>
                    </div>
                    <div className="p-6 bg-[#0a1224]/40 border border-white/5 rounded-2xl flex items-center gap-4">
                        <Mail size={18} className="text-[#E4B973]" />
                        <a href="mailto:sales@blumasonry.com" className="text-white font-bold tracking-tight">sales@blumasonry.com</a>
                    </div>
                    <div className="p-6 bg-[#0a1224]/40 border border-white/5 rounded-2xl flex items-center gap-4 md:col-span-2">
                        <MapPin size={18} className="text-[#E4B973]" />
                        <a href="https://www.google.com/maps/place/Blu+Masonry/@42.4283198,-71.0770318,17z" target="_blank" rel="noopener noreferrer" className="text-white font-bold tracking-tight uppercase">43 Lupine Rd, Andover MA 01810</a>
                    </div>
                 </div>
            </div>

          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

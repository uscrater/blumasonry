'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, ShieldCheck } from 'lucide-react'
import { trackLead } from '@/lib/analytics'

interface ServiceContactFormProps {
  defaultService?: string
}

export default function ServiceContactForm({ defaultService }: ServiceContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', street: '', number: '', zip: '', city: '', state: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    if (!form.name || !form.phone || !form.street || !form.city || !form.state || !form.zip) return
    setLoading(true)
    setError(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          service: defaultService || 'Not specified',
          source: `Service Page — ${defaultService || 'Unknown'}`,
        }),
      })

      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      trackLead({ source: `Service Page — ${defaultService || 'Unknown'}`, service: defaultService })
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const inputStyles = (name: string) => `
    w-full bg-white/[0.03] border transition-all duration-500 px-6 py-4 rounded-xl
    text-white font-poppins text-[15px] outline-none
    ${focusedField === name 
      ? 'border-[#E4B973] bg-white/[0.08] shadow-[0_0_20px_rgba(228,185,115,0.08)]' 
      : 'border-white/10 hover:border-white/20'}
  `

  const labelStyles = (name: string) => `
    absolute left-6 transition-all duration-300 pointer-events-none font-poppins
    ${focusedField === name || form[name as keyof typeof form] 
      ? '-top-2.5 text-[10px] text-[#E4B973] bg-[#0A101C] px-2 uppercase tracking-[0.2em] font-bold z-10' 
      : 'top-4 text-[14px] text-white/30'}
  `

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/[0.02] border border-[#E4B973]/20 rounded-2xl p-12 text-center flex flex-col items-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-[#E4B973] rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(228,185,115,0.4)]">
          <CheckCircle size={40} className="text-dark-navy" />
        </div>
        <h3 className="font-roboto text-2xl font-bold text-white mb-2 uppercase tracking-widest italic">Request Received</h3>
        <p className="font-poppins text-white/50 text-sm max-w-[300px] mb-8">
          One of our specialists will contact you shortly to discuss your <span className="text-[#E4B973] font-bold">{defaultService}</span> project.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-[#E4B973] text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors"
        >
          Send another request
        </button>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-[850px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-[#0a1224] to-[#040812] border border-white/5 border-t-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl relative shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
      >
        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="relative">
              <label className={labelStyles('name')}>Your Name</label>
              <input 
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={inputStyles('name')}
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <label className={labelStyles('phone')}>Phone Number</label>
              <input 
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={inputStyles('phone')}
              />
            </div>

            {/* Street Address */}
            <div className="relative md:col-span-1">
              <label className={labelStyles('street')}>Street Address</label>
              <input 
                name="street"
                required
                value={form.street}
                onChange={handleChange}
                onFocus={() => setFocusedField('street')}
                onBlur={() => setFocusedField(null)}
                placeholder={focusedField === 'street' ? 'e.g. 123 Main St' : ''}
                className={inputStyles('street')}
              />
            </div>

            {/* Number / Apt */}
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

            {/* ZIP */}
            <div className="relative md:col-span-2">
              <label className={labelStyles('zip')}>ZIP Code</label>
              <input 
                name="zip"
                required
                value={form.zip}
                onChange={handleChange}
                onFocus={() => setFocusedField('zip')}
                onBlur={() => setFocusedField(null)}
                className={inputStyles('zip')}
              />
            </div>

            {/* City */}
            <div className="relative">
              <label className={labelStyles('city')}>City</label>
              <input 
                name="city"
                required
                value={form.city}
                onChange={handleChange}
                onFocus={() => setFocusedField('city')}
                onBlur={() => setFocusedField(null)}
                className={inputStyles('city')}
              />
            </div>

            {/* State */}
            <div className="relative">
              <label className={labelStyles('state')}>State</label>
              <input 
                name="state"
                required
                value={form.state}
                onChange={handleChange}
                onFocus={() => setFocusedField('state')}
                onBlur={() => setFocusedField(null)}
                className={inputStyles('state')}
              />
            </div>

            {/* Email */}
            <div className="relative md:col-span-2">
              <label className={labelStyles('email')}>Email Address</label>
              <input 
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={inputStyles('email')}
              />
            </div>

            {/* Message */}
            <div className="relative md:col-span-2">
              <label className={labelStyles('message')}>Tell us briefly about your project...</label>
              <textarea 
                name="message"
                rows={2}
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={inputStyles('message') + ' resize-none'}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full relative group overflow-hidden rounded-xl h-[72px]"
          >
            {/* White background that slides in from bottom */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            
            {/* Main button content */}
            <div className="h-full bg-[#E4B973] text-[#081021] font-roboto font-black uppercase tracking-[0.25em] text-[14px] flex items-center justify-center gap-4 transition-all group-hover:bg-transparent relative z-10">
              {loading ? 'Processing...' : (
                <>
                  <span>Request My Free Quote</span>
                  <Send size={18} />
                </>
              )}
            </div>
          </button>

          <div className="flex items-center justify-center gap-3 opacity-30 pt-4">
            <ShieldCheck size={14} className="text-[#E4B973]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Licensed • Insured • Guaranteed</span>
          </div>

          {error && (
            <p className="text-center text-red-400 font-poppins text-[13px] mt-2">
              Something went wrong. Please try again or call us at <a href="tel:7816276932" className="text-[#E4B973] underline">781.627.6932</a>.
            </p>
          )}
        </form>
      </motion.div>
    </div>
  )
}

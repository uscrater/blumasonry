'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', street: '', number: '', zip: '', city: '', state: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e?.target
    const name = target?.name ?? ''
    const value = target?.value ?? ''
    
    setForm((prev: any) => ({ ...(prev ?? {}), [name]: value }))

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
        setForm((prev: any) => ({
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
    e?.preventDefault?.()
    if (!form?.name || !form?.email || !form?.phone || !form?.street || !form?.city || !form?.state || !form?.zip) return
    setLoading(true)
    // Simulate submission
    await new Promise((r: any) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose?.()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', street: '', number: '', zip: '', city: '', state: '', service: '', message: '' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            onClick={(e: any) => e?.stopPropagation?.()}
            className="w-full max-w-[550px] max-h-[90vh] overflow-y-auto rounded-2xl p-8"
            style={{ background: 'linear-gradient(#001745 0%, #060D1C 100%)' }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Mail size={28} className="text-gold" />
                </div>
                <h3 className="font-roboto text-[24px] font-semibold text-gold mb-2">Thank You!</h3>
                <p className="font-roboto text-[16px] text-white/80">We&apos;ll get back to you shortly.</p>
                <button onClick={handleClose} className="gold-gradient text-deep-navy font-roboto text-[14px] font-extrabold px-6 py-3 rounded-[10px] mt-6">
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-roboto text-[32px] md:text-[40px] font-semibold text-gold mb-3">Let&apos;s Connect</h2>
                <p className="font-roboto text-[16px] md:text-[18px] text-white/80 mb-6 leading-relaxed">
                  Schedule your free inspection today, receive a detailed quote, and contact our team for professional guidance and dependable service.
                </p>

                {/* Quick links */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <a href="mailto:sales@blumasonry.com" className="flex items-center gap-2 text-gold hover:text-white transition-colors font-roboto text-[14px]">
                    <Mail size={16} /> Email Us for a quick response
                  </a>
                  <a href="tel:+17816276932" className="flex items-center gap-2 text-gold hover:text-white transition-colors font-roboto text-[14px]">
                    <Phone size={16} /> Call for a quick response
                  </a>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    name="name"
                    value={form?.name ?? ''}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-roboto text-[15px] focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    name="email"
                    type="email"
                    value={form?.email ?? ''}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-roboto text-[15px] focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    name="phone"
                    type="tel"
                    value={form?.phone ?? ''}
                    onChange={handleChange}
                    placeholder="Phone *"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-roboto text-[15px] focus:outline-none focus:border-gold transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="street"
                      value={form?.street ?? ''}
                      onChange={handleChange}
                      placeholder="Street Address (e.g. 123 Main St) *"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-roboto text-[15px] focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      name="number"
                      value={form?.number ?? ''}
                      onChange={handleChange}
                      placeholder="Apt/Suite/No. (Optional)"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-roboto text-[15px] focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <input
                    name="zip"
                    value={form?.zip ?? ''}
                    onChange={handleChange}
                    placeholder="ZIP Code *"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-roboto text-[15px] focus:outline-none focus:border-gold transition-colors"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="city"
                      value={form?.city ?? ''}
                      onChange={handleChange}
                      placeholder="City *"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-roboto text-[15px] focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      name="state"
                      value={form?.state ?? ''}
                      onChange={handleChange}
                      placeholder="State *"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-roboto text-[15px] focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <select
                    name="service"
                    value={form?.service ?? ''}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-roboto text-[15px] focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="" className="bg-dark-navy">Service Interested In:</option>
                    <option value="hardscaping" className="bg-dark-navy">Hardscaping</option>
                    <option value="tile" className="bg-dark-navy">Tile Installation</option>
                    <option value="waterproofing" className="bg-dark-navy">Basement Waterproofing</option>
                    <option value="quote" className="bg-dark-navy">Requesting a Quote</option>
                    <option value="other" className="bg-dark-navy">Other</option>
                  </select>
                  <textarea
                    name="message"
                    value={form?.message ?? ''}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-roboto text-[15px] focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-roboto text-[14px] font-extrabold text-deep-navy py-3 rounded-lg transition-opacity disabled:opacity-60"
                    style={{ background: 'linear-gradient(270deg, #E4B973 0%, #DBA143 100%)' }}
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </form>

                <button
                  onClick={handleClose}
                  className="mt-4 text-white/50 hover:text-white font-roboto text-[14px] w-full text-center flex items-center justify-center gap-1"
                >
                  <X size={16} /> Close
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

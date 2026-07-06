'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import FloatingMessage from '../components/floating-message'
import { ArrowLeft, Maximize2, X } from 'lucide-react'
import Link from 'next/link'

import downloadedProjects from './downloaded_projects.json'

const categories = ['All', 'Masonry', 'Hardscaping', 'Tile', 'Waterproofing']

const projects = [


  { id: 1, src: '/images/gallery/01.webp', category: 'Hardscaping', title: 'Luxury Natural Stone Siding' },
  { id: 11, src: '/images/gallery/11.webp', category: 'Masonry', title: 'Stone Archway Craftsmanship' },
  { id: 12, src: '/images/gallery/12.webp', category: 'Hardscaping', title: 'Precision Brickwork' },
  { id: 13, src: '/images/gallery/13.webp', category: 'Hardscaping', title: 'Custom Stone Fireplace' },
  { id: 14, src: '/images/gallery/14.webp', category: 'Hardscaping', title: 'Fieldstone Retaining Wall' },
  { id: 15, src: '/images/gallery/15.webp', category: 'Hardscaping', title: 'Elegant Interior Stone' },

  { id: 2, src: '/images/gallery/02.webp', category: 'Masonry', title: 'Elegant Paver Patio' },
  { id: 3, src: '/images/gallery/03.webp', category: 'Hardscaping', title: 'Outdoor Living Space' },
  { id: 8, src: '/images/gallery/08.webp', category: 'Hardscaping', title: 'Modern Pool Deck' },
  { id: 9, src: '/images/gallery/09.webp', category: 'Masonry', title: 'Custom Fire Pit Area' },

  { id: 16, src: '/images/gallery/16.webp', category: 'Masonry', title: 'Modern Kitchen Backsplash' },

  { id: 4, src: '/images/gallery/04.webp', category: 'Waterproofing', title: 'Basement Sealing' },
  { id: 5, src: '/images/gallery/05.webp', category: 'Waterproofing', title: 'Foundation Protection' },
  { id: 6, src: '/images/gallery/06.webp', category: 'Waterproofing', title: 'Drainage Systems' },


]

export default function ProjectsClient() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | any | null>(null)

  // Images excluded from their category filter (show only in "All")
  const categoryExclusions = [
    'IMG_2144_cfzgup_lp1gvf',
  ]

  const mappedDownloaded = downloadedProjects.map((img) => {
    const srcLower = (img.src || '').toLowerCase()
    const isExcluded = categoryExclusions.some(ex => srcLower.includes(ex.toLowerCase()))
    return {
      ...img,
      category: isExcluded ? 'Outros' : img.category
    }
  })

  const allProjects = [...projects, ...mappedDownloaded]
  const availableCategories = categories

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === filter)

  return (
    <main className="min-h-screen bg-dark-navy relative overflow-hidden">
      <Navbar />

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle Stone Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: "url('/images/services/masonry-1.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        {/* Atmospheric Gradients */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#E4B973]/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E4B973]/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* HEADER SECTION */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 relative">
          <Link href="/" className="inline-flex items-center gap-2 text-[#E4B973] font-medium mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={20} />
            <span className="font-poppins text-sm tracking-widest uppercase">Back to Home</span>
          </Link>

          <div className="flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="shimmer-text inline-block border border-[#dfb163]/40 rounded-full px-5 py-1.5 font-sora text-[12px] md:text-[14px] font-semibold tracking-widest uppercase mb-4"
            >
              Our Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-roboto text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
            >
              REAL PROJECTS. <br />
              <span className="text-[#E4B973]">EXCEPTIONAL RESULTS.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl font-poppins leading-relaxed max-w-3xl"
            >
              Browse through a selection of our finest work across Massachusetts.
              From luxury masonry to complex basement waterproofing, we build to last.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="pb-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pb-4">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-poppins text-sm font-semibold transition-all duration-300 border ${
                  filter === cat
                    ? 'bg-[#E4B973] text-dark-navy border-[#E4B973] shadow-[0_0_15px_rgba(228,185,115,0.4)]'
                    : 'bg-transparent text-white border-white/20 hover:border-[#E4B973]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden border border-white/5 bg-white/5 aspect-square"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-[#E4B973] text-xs font-bold tracking-[0.2em] uppercase mb-1">{project.category}</p>
                    <h3 className="text-white text-lg font-bold leading-tight mb-3">{project.title}</h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#E4B973] hover:text-dark-navy transition-colors">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white flex items-center gap-2 hover:text-[#E4B973] transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <span className="font-poppins text-xs tracking-widest uppercase">Close</span>
                <X size={24} />
              </button>

              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-dark-navy">
                <img
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />

                <div className="absolute bottom-0 left-0 right-0 p-8 pt-16 bg-gradient-to-t from-dark-navy to-transparent">
                  <p className="text-[#E4B973] text-sm font-bold tracking-[0.2em] uppercase mb-2">{selectedProject.category}</p>
                  <h2 className="text-white text-3xl font-bold">{selectedProject.title}</h2>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingMessage />
    </main>
  )
}

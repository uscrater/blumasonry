import type { Metadata } from 'next'
import ProjectsClient from './projects-client'

export const metadata: Metadata = {
  title: 'Our Masonry & Hardscaping Projects | Blu Masonry Inc.',
  description:
    'Explore Blu Masonry projects across Massachusetts, including custom masonry, hardscaping, tile work, and waterproofing with premium craftsmanship.',
  alternates: {
    canonical: 'https://blumasonry.com/projects',
  },
  openGraph: {
    title: 'Our Masonry & Hardscaping Projects | Blu Masonry Inc.',
    description:
      'Explore Blu Masonry projects across Massachusetts, including custom masonry, hardscaping, tile work, and waterproofing with premium craftsmanship.',
    images: ['/og-image.png'],
    url: 'https://blumasonry.com/projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Masonry & Hardscaping Projects | Blu Masonry Inc.',
    description:
      'Explore Blu Masonry projects across Massachusetts, including custom masonry, hardscaping, tile work, and waterproofing with premium craftsmanship.',
    images: ['/og-image.png'],
  },
}

export default function ProjectsPage() {
  return (
    <ProjectsClient />
  )
}

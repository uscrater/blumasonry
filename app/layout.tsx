import { Roboto, Poppins, Sora, Manrope, Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700', '900'], 
  variable: '--font-roboto', 
  display: 'swap' 
})

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-poppins', 
  display: 'swap' 
})

const sora = Sora({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'], 
  variable: '--font-sora', 
  display: 'swap' 
})

const manrope = Manrope({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'], 
  variable: '--font-manrope', 
  display: 'swap' 
})

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'], 
  variable: '--font-inter', 
  display: 'swap' 
})

export const metadata: Metadata = {
  metadataBase: new URL('https://blumasonry.com'),
  title: 'Blu Masonry Inc. | Premium Masonry & Hardscaping',
  description: 'Premium Masonry, Hardscape & Waterproofing for Homeowners Across Massachusetts. Building Strength, Crafting Beauty, Elevating Your Home\'s Value.',
  alternates: {
    canonical: 'https://blumasonry.com',
  },
  icons: {
    icon: '/LOGO-BLU.webp',
    shortcut: '/LOGO-BLU.webp',
    apple: '/LOGO-BLU.webp',
  },
  openGraph: {
    title: 'Blu Masonry Inc. | Premium Masonry & Hardscaping',
    description: 'Premium Masonry, Hardscape & Waterproofing for Homeowners Across Massachusetts.',
    images: ['/og-image.png'],
    url: 'https://blumasonry.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blu Masonry Inc. | Premium Masonry & Hardscaping',
    description: 'Premium Masonry, Hardscape & Waterproofing for Homeowners Across Massachusetts.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Skip Navigation for Accessibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
                  "@id": "https://blumasonry.com/#organization",
                  "name": "Blu Masonry Inc.",
                  "url": "https://blumasonry.com",
                  "logo": "https://blumasonry.com/LOGO-BLU.webp",
                  "image": "https://blumasonry.com/og-image.png",
                  "description": "Premium Masonry, Hardscape & Waterproofing for Homeowners Across Massachusetts. Building Strength, Crafting Beauty, Elevating Your Home's Value.",
                  "telephone": "+17816276932",
                  "email": "sales@blumasonry.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "43 Lupine Rd",
                    "addressLocality": "Andover",
                    "addressRegion": "MA",
                    "postalCode": "01810",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 42.6583,
                    "longitude": -71.1368
                  },
                  "areaServed": [
                    { "@type": "State", "name": "Massachusetts" },
                    { "@type": "City", "name": "Andover" },
                    { "@type": "City", "name": "Boston" },
                    { "@type": "City", "name": "Salem" },
                    { "@type": "City", "name": "Newton" },
                    { "@type": "City", "name": "Lexington" },
                    { "@type": "City", "name": "Marblehead" },
                    { "@type": "City", "name": "Newburyport" },
                    { "@type": "City", "name": "North Andover" },
                    { "@type": "City", "name": "Salem NH" }
                  ],
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "07:00",
                      "closes": "18:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": "Saturday",
                      "opens": "08:00",
                      "closes": "16:00"
                    }
                  ],
                  "sameAs": [
                    "https://www.facebook.com/share/1E5SyvARkk/",
                    "https://www.instagram.com/blumasonry",
                    "https://www.yelp.com/biz/blumasonry-malden",
                    "https://www.google.com/maps/place/Blu+Masonry/@42.4283198,-71.0770318,17z"
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "48"
                  },
                  "review": [
                    {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Verified Client"
                      },
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                      },
                      "reviewBody": "Excellent craftsmanship, clear communication, and professional execution from start to finish."
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "name": "Masonry Services",
                  "serviceType": "Masonry and Hardscaping Contractor",
                  "description": "Professional masonry, hardscaping, tile installation, and basement waterproofing services for residential properties.",
                  "provider": {
                    "@id": "https://blumasonry.com/#organization"
                  },
                  "areaServed": [
                    { "@type": "State", "name": "Massachusetts" },
                    { "@type": "City", "name": "Andover" },
                    { "@type": "City", "name": "Boston" },
                    { "@type": "City", "name": "Salem" },
                    { "@type": "City", "name": "Salem NH" }
                  ],
                  "serviceOutput": "Completed masonry and hardscaping installations",
                  "termsOfService": "https://blumasonry.com"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Blu Masonry Inc. — Premium Masonry & Hardscaping in Massachusetts",
              "description": "See Blu Masonry's expert craftsmanship in action. Premium masonry, hardscaping, tile installation, and waterproofing services for Massachusetts homeowners.",
              "thumbnailUrl": "https://blumasonry.com/hero-poster.webp",
              "uploadDate": "2025-06-01",
              "contentUrl": "https://blumasonry.com/HEROSITE_yrmpoy%20(1).mp4",
              "embedUrl": "https://blumasonry.com",
              "duration": "PT30S",
              "publisher": {
                "@type": "Organization",
                "name": "Blu Masonry Inc.",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://blumasonry.com/LOGO-BLU.webp"
                }
              }
            })
          }}
        />
      </head>
      <body className={`${roboto.variable} ${poppins.variable} ${sora.variable} ${manrope.variable} ${inter.variable} font-roboto antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TTG2VX7P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Skip Navigation Target */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#E4B973] focus:text-[#060D1C] focus:font-bold focus:rounded-lg focus:shadow-xl focus:text-sm focus:uppercase focus:tracking-wider"
        >
          Skip to main content
        </a>
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var loaded = false;
                function loadGTM() {
                  if (loaded) return;
                  loaded = true;
                  var s = document.createElement('script');
                  s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TTG2VX7P';
                  s.async = true;
                  document.head.appendChild(s);
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
                }
                ['scroll','click','touchstart','keydown'].forEach(function(e){
                  window.addEventListener(e, loadGTM, {once: true, passive: true});
                });
              })();
            `
          }}
        />
        <div id="main-content">
          {children}
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

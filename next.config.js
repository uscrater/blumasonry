const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      // Replace Next.js's built-in polyfill-module.js with a no-op.
      // These polyfills (Array.at, flat, Object.fromEntries, hasOwn,
      // trimStart/End, etc.) are not needed for modern browsers.
      const polyfillPath = require.resolve(
        'next/dist/build/polyfills/polyfill-module'
      );
      config.resolve.alias[polyfillPath] = path.resolve(
        __dirname,
        'lib/empty-polyfills.js'
      );
    }
    return config;
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*\\.(jpg|jpeg|png|webp|avif|svg|ico|woff2|mp4|webm)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/locations',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/projects',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/services/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/service-area/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Old WordPress homepage
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/', destination: '/', permanent: true },

      // Old WordPress author/tag pages
      { source: '/author/:slug*', destination: '/', permanent: true },
      { source: '/tag/:slug*', destination: '/', permanent: true },

      // Old WordPress service pages → new service pages
      { source: '/walkway-and-stairs', destination: '/services/masonry-services', permanent: true },
      { source: '/walkway-and-stairs/', destination: '/services/masonry-services', permanent: true },
      { source: '/dry-wall-installation', destination: '/services/masonry-services', permanent: true },
      { source: '/dry-wall-installation/', destination: '/services/masonry-services', permanent: true },
      { source: '/bulkhead', destination: '/services/masonry-services', permanent: true },
      { source: '/bulkhead/', destination: '/services/masonry-services', permanent: true },
      { source: '/fireplaces', destination: '/services/masonry-services', permanent: true },
      { source: '/fireplaces/', destination: '/services/masonry-services', permanent: true },
      { source: '/kitchen-backsplash', destination: '/services/tile-installation', permanent: true },
      { source: '/kitchen-backsplash/', destination: '/services/tile-installation', permanent: true },
      { source: '/outdoor-fire-pit', destination: '/services/hardscaping', permanent: true },
      { source: '/outdoor-fire-pit/', destination: '/services/hardscaping', permanent: true },

      // Old WordPress pages
      { source: '/privacy-policy', destination: '/', permanent: true },
      { source: '/privacy-policy/', destination: '/', permanent: true },
      { source: '/faq', destination: '/#FAQ', permanent: true },
      { source: '/faq/', destination: '/#FAQ', permanent: true },

      // Old WordPress service/blog pages → new service pages
      { source: '/drainage-systems', destination: '/services/basement-waterproofing', permanent: true },
      { source: '/drainage-systems/', destination: '/services/basement-waterproofing', permanent: true },
      { source: '/hardscape-constructor-massachusetts-patios-walls-walkways', destination: '/services/hardscaping', permanent: true },
      { source: '/the-best-floor-panels-to-keep-warmth-and-look-great', destination: '/services/tile-installation', permanent: true },
      { source: '/the-best-floor-panels-to-keep-warmth-and-look-great/', destination: '/services/tile-installation', permanent: true },

      // Old long-form service URLs
      { source: '/services/blu-masonry-premier-tile-installation-in-massachusetts-southern-new-hampshire', destination: '/services/tile-installation', permanent: true },
      { source: '/services/blu-masonry-premier-tile-installation-in-massachusetts-southern-new-hampshire/', destination: '/services/tile-installation', permanent: true },
      { source: '/services/tile-installation-massachusetts', destination: '/services/tile-installation', permanent: true },
      { source: '/services/tile-installation-massachusetts/', destination: '/services/tile-installation', permanent: true },
      { source: '/services/roof-repair', destination: '/services/masonry-services', permanent: true },
      { source: '/services/roof-repair/', destination: '/services/masonry-services', permanent: true },

      // Old blog/category pages
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/', destination: '/', permanent: true },
      { source: '/category/:slug*', destination: '/', permanent: true },

      // More old WordPress service pages
      { source: '/hardscaping-masonry-services-massachusetts', destination: '/services/hardscaping', permanent: true },
      { source: '/hardscaping-masonry-services-massachusetts/', destination: '/services/hardscaping', permanent: true },
      { source: '/driveway-pavers', destination: '/services/hardscaping', permanent: true },
      { source: '/driveway-pavers/', destination: '/services/hardscaping', permanent: true },
      { source: '/concrete-work', destination: '/services/masonry-services', permanent: true },
      { source: '/concrete-work/', destination: '/services/masonry-services', permanent: true },
      { source: '/retaining-walls', destination: '/services/hardscaping', permanent: true },
      { source: '/retaining-walls/', destination: '/services/hardscaping', permanent: true },
      { source: '/flooring', destination: '/services/tile-installation', permanent: true },
      { source: '/flooring/', destination: '/services/tile-installation', permanent: true },
      { source: '/excavation', destination: '/services/hardscaping', permanent: true },
      { source: '/excavation/', destination: '/services/hardscaping', permanent: true },
      { source: '/masonry-services-massachusetts-2', destination: '/services/masonry-services', permanent: true },
      { source: '/masonry-services-massachusetts-2/', destination: '/services/masonry-services', permanent: true },
      { source: '/drainage-systems-and-dry-wells', destination: '/services/basement-waterproofing', permanent: true },
      { source: '/drainage-systems-and-dry-wells/', destination: '/services/basement-waterproofing', permanent: true },

      // Old Portuguese pages
      { source: '/bomba-de-sumidouro-francesa', destination: '/services/basement-waterproofing', permanent: true },
      { source: '/bomba-de-sumidouro-francesa/', destination: '/services/basement-waterproofing', permanent: true },
      { source: '/politica-de-privacidade', destination: '/', permanent: true },
      { source: '/politica-de-privacidade/', destination: '/', permanent: true },
      { source: '/impermeabilização', destination: '/services/basement-waterproofing', permanent: true },
      { source: '/impermeabilização/', destination: '/services/basement-waterproofing', permanent: true },
    ];
  },
};

module.exports = nextConfig;

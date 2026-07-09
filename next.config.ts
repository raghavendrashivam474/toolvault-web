import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // React strict mode catches side-effect bugs during development
  reactStrictMode: true,

  // Poweredbyheader removes the X-Powered-By response header (security)
  poweredByHeader: false,

  // Compress responses (Vercel does this automatically, harmless elsewhere)
  compress: true,

  // Production source maps disabled to reduce bundle transfer
  productionBrowserSourceMaps: false,

  // Image optimization defaults — will apply once we add real images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Security headers applied to all responses
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Long-term caching for static assets
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig

import type { NextConfig } from "next";
import path from "node:path";

// Bundle analyzer for production optimization
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const loaderPath = require.resolve('orchids-visual-edits/loader.js');

const nextConfig: NextConfig = {
  // ============================================
  // IMAGE OPTIMIZATION
  // ============================================
  images: {
    // Enable modern formats for better compression
    formats: ['image/avif', 'image/webp'],

    // Optimize for common device widths
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Restrict to trusted image sources only
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'slelguoygbfzlpylpxfs.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
      // Add more trusted domains as needed
    ],

    // Minimize external image calls during development
    minimumCacheTTL: 60,

    // Disable static image import size optimization for faster builds
    disableStaticImages: false,
  },

  // ============================================
  // PERFORMANCE OPTIMIZATIONS
  // ============================================

  // Enable gzip/brotli compression
  compress: true,

  // Generate ETags for caching
  generateEtags: true,

  // Enable React strict mode for better error detection
  reactStrictMode: true,

  // Optimize package imports for faster builds
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-tooltip',
      '@heroicons/react',
      '@tabler/icons-react',
      'lucide-react',
      'framer-motion',
      'react-icons',
    ],
  },

  // ============================================
  // CACHING HEADERS
  // ============================================
  async headers() {
    return [
      // Static assets - long cache with immutable
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Images - cache for 1 day with stale-while-revalidate
      {
        source: '/:path*.(ico|png|jpg|jpeg|gif|webp|avif|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      // Fonts - long cache
      {
        source: '/:path*.(woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // API routes - no cache
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',
          },
        ],
      },
      // All pages - security headers backup
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // ============================================
  // SECURITY SETTINGS
  // ============================================

  // Restrict powered-by header for security
  poweredByHeader: false,

  // ============================================
  // BUILD SETTINGS
  // ============================================
  outputFileTracingRoot: path.resolve(__dirname, '../../'),

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // ============================================
  // TURBOPACK CONFIGURATION
  // ============================================
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [loaderPath]
      }
    }
  }
};

export default withBundleAnalyzer(nextConfig);


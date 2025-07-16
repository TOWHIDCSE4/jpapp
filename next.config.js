/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,            // Enables strict mode for React
  swcMinify: true,                  // Minifies the code using SWC
  output: 'export',                 // Tells Next.js to perform static export
  trailingSlash: true,              // Ensures all routes have trailing slashes
  images: {
    unoptimized: true,              // Disables image optimization for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/jpapp/' : '', // Base path for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jpapp/' : '', // Correct path for assets
  experimental: {
    optimizePackageImports: ['@/components'],  // Experimental optimization for package imports
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/public/typing-game/**',   // Ignores certain files for faster dev builds
        ],
      };
    }
    return config;
  },
};

module.exports = nextConfig;

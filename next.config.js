/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  eslint: {
    // allows build complete even if ESLint errors.
    ignoreDuringBuilds: true,
  },
  swcMinify: true, // SWC minification
  poweredByHeader: false, // no more x-power-by head
  optimizeFonts: true, //  font load optimize
}

module.exports = nextConfig 

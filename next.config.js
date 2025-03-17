/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
      formats: ['image/avif', 'image/webp'],
      minimumCacheTTL: 60,
    },
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;
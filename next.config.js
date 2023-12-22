/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.unplash.com' }],
  }
 
}

module.exports = nextConfig

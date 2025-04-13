// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // if you're using next/image and Netlify
  },
};

module.exports = nextConfig;

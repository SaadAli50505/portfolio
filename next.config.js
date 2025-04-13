// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // <-- this disables next/image optimization
  },
};

module.exports = nextConfig;

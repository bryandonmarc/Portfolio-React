/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com", "picsum.photos"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  reactStrictMode: true,
  swcMinify: true,
};

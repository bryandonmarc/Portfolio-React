/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  reactStrictMode: true,
  swcMinify: true,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [{ hostname: "*", protocol: "https" }],
  },
};

module.exports = nextConfig;

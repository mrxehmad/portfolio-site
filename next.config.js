/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['avatars.githubusercontent.com'],
      unoptimized: true,
    },
    output: 'export',
};

module.exports = nextConfig;
  
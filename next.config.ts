import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: { unoptimized: true }, // optional: helps with static hosting
  basePath: '/silent-disco',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

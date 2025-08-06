import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: { unoptimized: true }, // optional: helps with static hosting
  basePath: '/silent-disco',
  trailingSlash: true,

};

export default nextConfig;

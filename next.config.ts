import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/personal-profile',
  assetPrefix: '/personal-profile',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

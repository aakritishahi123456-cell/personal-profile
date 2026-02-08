import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Disabled to allow Image Optimization and Server Actions
  images: {
    // unoptimized: true, // Disabled to allow Next.js built-in optimization
  },
};

export default nextConfig;

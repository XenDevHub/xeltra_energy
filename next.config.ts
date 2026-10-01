import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Default quality for optimized images
    qualities: [75, 85, 95],
    // Local images only — no external domains needed
    remotePatterns: [],
  },
};

export default nextConfig;

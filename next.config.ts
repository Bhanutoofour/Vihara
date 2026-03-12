import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;

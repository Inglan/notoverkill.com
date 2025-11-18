import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(process.env.AUTHENTIK_SERVER + "/**")],
  },
};

export default nextConfig;

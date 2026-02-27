import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "moamfg.com" },
      { protocol: "https", hostname: "i0.wp.com" },
    ],
  },
}

export default nextConfig

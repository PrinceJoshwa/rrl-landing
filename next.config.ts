import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    unoptimized: true, // ✅ disable image optimization
  },
  output: "export",
};

export default nextConfig;

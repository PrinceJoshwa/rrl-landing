// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   images: {
// //     domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
// //     unoptimized: true, // ✅ disable image optimization
// //   },
// //   output: "export",
// // };

// // export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       },
//       {
//         protocol: "https",
//         hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
//       },
//     ],
//     formats: ["image/avif", "image/webp"],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    unoptimized: true, // keep this ONLY because of static export
  },
};

export default nextConfig;

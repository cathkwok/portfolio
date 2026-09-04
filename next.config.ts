import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          
  basePath: "/portfolio",    
  // Emit resume/index.html etc. so both /resume and /resume/ resolve on GitHub Pages.
  trailingSlash: true,
  images: {
    unoptimized: true,       
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // uncomment when deploy to matbao
  output: "export",
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "/",
  },

  // Add rewrites for .well-known paths
  // async rewrites() {
  //   return [
  //     {
  //       source: "/.well-known/assetlinks.json",
  //       destination: "/assetlinks.json",
  //     },
  //   ];
  // },
};

export default nextConfig;

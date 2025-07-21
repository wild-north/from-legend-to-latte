import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/from-legend-to-latte' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/from-legend-to-latte' : '',
};

export default nextConfig;

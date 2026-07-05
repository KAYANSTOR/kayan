/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://kurotek-backend-production.up.railway.app',
  },
  output: 'standalone',
  // Exclude Android Kotlin files from webpack processing
  webpack: (config) => {
    config.module.rules.push({
      test: /\.kt$/,
      use: 'ignore-loader',
    });
    return config;
  },
};

export default nextConfig;

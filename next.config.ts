import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Enable static HTML export so the site can be deployed on GitHub Pages
  output: 'export',
  // Allow build even if type errors or lint errors (can tighten later)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // When using static export, Next/Image optimization must be disabled
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

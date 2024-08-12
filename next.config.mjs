/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    devIndicators: {
      buildActivity: false,
    },
  };
  
  export default nextConfig;
  
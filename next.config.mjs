/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};
module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    devIndicators: {
      buildActivity: false, // Optional: Disable build activity indicator
    },
  };

export default nextConfig;

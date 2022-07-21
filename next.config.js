/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
// module.exports = nextConfig;

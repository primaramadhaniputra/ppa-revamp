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
	images: {
		domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(","),
	},
};
// module.exports = nextConfig;

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
		domains: [
			"https://apirevamp.transformore.net",
			"ppa-mhu.net",
			"www.google.com",
			"mhucoal.co.id",
			"storage.ppa-ho.net",
		],
	},
};
// module.exports = nextConfig;

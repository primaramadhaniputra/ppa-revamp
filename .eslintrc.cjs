/* eslint-env node */
module.exports = {
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"no-empty": "off",
		"no-empty-pattern": "off",
		"no-undef": "off",
		"no-mixed-spaces-and-tabs": "off",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "off",
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	root: true,
};

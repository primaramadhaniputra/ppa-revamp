/**
 * app initial environment
 */
const appEnvironment = {
	api: {
		baseurl: `${process.env.NEXT_PUBLIC_ROOT_API_URL}/v1`,
		ppaurl: `${process.env.NEXT_PUBLIC_ROOT_API_URL_PPA}/v1`,
		surveyurl: `${process.env.NEXT_PUBLIC_ROOT_API_URL_SURVEY}/v1`,
		ssourl: `${process.env.NEXT_PUBLIC_ROOT_SSO_URL}`,
	},
};

/**
 * app initial active config
 */
const appActiveConfig = appEnvironment.api;

export { appEnvironment, appActiveConfig };

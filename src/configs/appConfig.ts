/**
 * app initial environment
 */
const appEnvironment = {
    api: {
        baseurl: `${process.env.NEXT_PUBLIC_ROOT_API_URL}/v1`,
        ppaurl: `${process.env.NEXT_PUBLIC_ROOT_API_URL_PPA}/v1`,
    },
};

/**
 * app initial active config
 */
const appActiveConfig = appEnvironment.api;

export { appEnvironment, appActiveConfig };

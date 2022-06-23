import { appActiveConfig } from '..';

const apiEndpoints = {
    pokemon: '/pokemon',
    users: `${appActiveConfig.baseurl}/admin`,
};

export { apiEndpoints };

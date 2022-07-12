import { appActiveConfig } from '..';

const apiEndpoints = {
    pokemon: '/pokemon',
    users: `${appActiveConfig.baseurl}/admin`,
    operationReport: `${appActiveConfig.ppaurl}/operations/reports/devices/productions`,
    pages: `${appActiveConfig.baseurl}/admin`,
};

export { apiEndpoints };

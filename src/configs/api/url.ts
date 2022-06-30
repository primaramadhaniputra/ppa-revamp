import { appActiveConfig } from '..';

const apiEndpoints = {
    pokemon: '/pokemon',
    users: `${appActiveConfig.baseurl}/admin`,
    operationReport: `${appActiveConfig.ppaurl}/operations/reports/devices/productions`,
};

export { apiEndpoints };

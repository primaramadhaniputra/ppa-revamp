import { appActiveConfig } from '..';

const apiEndpoints = {
    pokemon: '/pokemon',
    users: `${appActiveConfig.baseurl}/admin`,
    operationReport: `${appActiveConfig.ppaurl}/operations/reports/devices/productions`,
    pages: `${appActiveConfig.baseurl}/admin`,
    webAdmin: `${appActiveConfig.baseurl}/admin/settings/web-admin`,
};

export { apiEndpoints };

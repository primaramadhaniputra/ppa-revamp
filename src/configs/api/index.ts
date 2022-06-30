import apiRequest from './config';
import { apiEndpoints } from './url';

const API = {
    getPokemons: apiRequest.get(apiEndpoints.pokemon),

    // USERS
    login: apiRequest.post(apiEndpoints.users),
    getProfile: apiRequest.get(apiEndpoints.users, true),
    updateProfile: apiRequest.patch(apiEndpoints.users, true),
    changePassword: apiRequest.patch(apiEndpoints.users, true),
    forgotPassword: apiRequest.post(apiEndpoints.users),
    resetPassword: apiRequest.patch(apiEndpoints.users),

    // OPERATION REPORT
    getPayload: apiRequest.get(apiEndpoints.operationReport),
};

export default API;

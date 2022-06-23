import apiRequest from './config';
import { apiEndpoints } from './url';

const API = {
    getPokemons: apiRequest.get(apiEndpoints.pokemon),

    // USERS
    login: apiRequest.post(apiEndpoints.users),
    getProfile: apiRequest.get(apiEndpoints.users, true),
    updateProfile: apiRequest.patch(apiEndpoints.users, true),
    changePassword: apiRequest.patch(apiEndpoints.users, true),
};

export default API;

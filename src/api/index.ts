import apiRequest from "./config";
import { apiEndpoints } from "./url";

const API = {
  getPokemons: apiRequest.get(apiEndpoints.pokemon),
};

export default API;

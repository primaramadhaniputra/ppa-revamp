import { appActiveConfig } from "..";
import apiRequest from "./config";
import { apiEndpoints } from "./url";

const API = {
	getPokemons: apiRequest.get(apiEndpoints.pokemon),

	// USERS
	login: apiRequest.post(apiEndpoints.sso),
	getProfile: apiRequest.get(apiEndpoints.users, true),
	updateProfile: apiRequest.patch(apiEndpoints.users, true),
	changePassword: apiRequest.patch(apiEndpoints.users, true),
	forgotPassword: apiRequest.post(apiEndpoints.users),
	resetPassword: apiRequest.patch(apiEndpoints.users),

	// OPERATION REPORT
	getOperationReport: apiRequest.get(apiEndpoints.operationReport),
	getOperationReport19: apiRequest.get(apiEndpoints.operationReport19),

	// PAGES
	listPages: apiRequest.get(apiEndpoints.pages, true),
	updatePages: apiRequest.patch(apiEndpoints.pages, true),
	currentLoginPages: apiRequest.get(apiEndpoints.pages),

	// WEB ADMIN
	getListUsers: apiRequest.get(apiEndpoints.webAdmin, true),
	EditUserLevel: apiRequest.patch(apiEndpoints.webAdmin, true),
	resetPasswordWebAdmin: apiRequest.patch(apiEndpoints.webAdmin, true),
	disableUserdWebAdmin: apiRequest.delete(apiEndpoints.webAdmin, true),

	// MOCO
	dayli: apiRequest.get(apiEndpoints.moco, true),

	// PRODUCTION
	getAllSiteProduction: apiRequest.get(apiEndpoints.production, true),

	// SURVEY
	getCriteria: apiRequest.get(apiEndpoints.survey),
	getManajemenRisiko: apiRequest.get(apiEndpoints.manajemenRisiko),
	getPartisipan: apiRequest.get(apiEndpoints.survey),
	getAllsite: apiRequest.get(`${appActiveConfig.surveyurl}/reports/all-sites`),
	getSite: apiRequest.get(`${appActiveConfig.surveyurl}/reports/sites`),
	getParentCompany: apiRequest.get(`${appActiveConfig.hsd}`),
};

export default API;

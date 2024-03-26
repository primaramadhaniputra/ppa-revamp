import { appActiveConfig } from "..";

const apiEndpoints = {
	pokemon: "/pokemon",
	users: `${appActiveConfig.baseurl}/admin`,
	operationReport: `${appActiveConfig.ppaurl}/operations/reports/devices/productions`,
	operationReport19: `${appActiveConfig.ppaurl19}`,
	pages: `${appActiveConfig.baseurl}/admin`,
	webAdmin: `${appActiveConfig.baseurl}/admin/settings/web-admin`,
	moco: `${appActiveConfig.baseurl}/admin/settings/reports/productions/daily`,
	production: `${appActiveConfig.ppaurl11}/production/mainProduction`,
	// production: `${appActiveConfig.baseurl}/admin/settings/reports/productions/site`,
	// survey: `${appActiveConfig.surveyurl}/reports/criteria/periodes`,
	survey: `${appActiveConfig.hsd}/reports/criteria/periodes`,
	manajemenRisiko: `${appActiveConfig.surveyurl}`,

	// sso
	sso: `${appActiveConfig.ssourl}/auth/login`,

	// list surveys
	listSurveys: `https://survey.dev.hsd-api.com/v1/backlogs/surveys`,
};

export { apiEndpoints };

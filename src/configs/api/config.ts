import axios, { AxiosRequestHeaders } from "axios";
import Cookies from "js-cookie";
import { resolveBackendValidationError } from "utils/functions";
import { IPayload, IResponse } from "utils/interfaces";
import { MethodType } from "utils/types";
/**
 * @name apiInstance
 * @description API instance dari axios untuk default config
 */
const apiInstance = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_ROOT_API_URL}`,
	timeout: 60000,
	validateStatus: (status) => status >= 200 && status < 300,
});

// Intercept if token is expired
// Keeping both logic since I don't know which one really works.
apiInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			return Cookies.remove("token");
		}
		return Promise.reject(error);
	},
);

/**
 * @name ApiRequest
 * @description Kelas untuk handle api request
 */
class ApiRequest {
	static get(route: string, token = false) {
		return (payload?: IPayload) => this.request("GET", route, payload, token);
	}

	static put(route: string, token = false) {
		return (payload?: IPayload) => this.request("PUT", route, payload, token);
	}

	static post(route: string, token = false) {
		return (payload?: IPayload) => this.request("POST", route, payload, token);
	}

	static delete(route: string, token = false) {
		return (payload?: IPayload) => this.request("DELETE", route, payload, token);
	}

	static patch(route: string, token = false) {
		return (payload?: IPayload) => this.request("PATCH", route, payload, token);
	}

	/**
	 * @name resolveParams()
	 * @param {*} params
	 * @description untuk handle object params di konversi ke query params di url
	 */
	static resolveParams(params: any) {
		const paramsResult: any[] = [];
		Object.keys(params).map((e: any) => paramsResult.push(`${e}=${params[e]}`));
		return paramsResult.join("&");
	}

	/**
	 * @name request
	 * @param {*} method
	 * @param {*} route
	 * @param {*} payload
	 * @param {*} token
	 * @description Method untuk handling call api
	 */
	static async request(
		method: MethodType,
		route: string,
		payload?: IPayload,
		token: boolean = false,
	) {
		const path = payload?.path ? `/${payload.path}` : "";
		const params = payload?.params ? `?${this.resolveParams(payload.params)}` : "";
		const customUrl = payload?.url ? payload.url : "";
		const baseHeaders: AxiosRequestHeaders = {
			"content-type": payload?.type === "form-data" ? "multipart/form-data" : "application/json",
		};

		if (token) {
			const authCookie = Cookies.get("token");
			if (authCookie) {
				baseHeaders.authorization = `Bearer ${authCookie}`;
			}

			if (payload?.context) {
				const cookie = payload?.context?.req?.cookies?.token;
				if (cookie) {
					baseHeaders.Authorization = `Bearer ${cookie}`;
				}
			}
		}

		const requestPayload = {
			url: customUrl.length > 0 ? customUrl : route + path + params,
			method,
			headers: payload?.headers ? { ...baseHeaders, ...payload.headers } : baseHeaders,
			data: payload?.body ? payload.body : {},
		};

		try {
			// console.log('API-REQUEST:', requestPayload.url, requestPayload);

			const response: IResponse = await apiInstance.request(requestPayload);

			// karena pakai axios response asli ada di data
			if (response.data) {
				// console.log('API-RESPONSE:', requestPayload.url, response.data);
				return response.data;
			}

			// console.log('API-RESPONSE:', requestPayload.url, response);
			return response;
		} catch (err: any) {
			if (err && err.response && err.response.data) {
				// console.log('API-RESPONSE:', requestPayload.url, err.response.data);
				const errorData = resolveBackendValidationError(err.response.data);
				throw errorData;
			} else if (err && err.response) {
				// console.log('API-RESPONSE:', requestPayload.url, err.response);
				throw err.response;
			} else {
				// console.log('API-RESPONSE:', requestPayload.url, err);
			}
			throw err;
		}
	}
}

export default ApiRequest;

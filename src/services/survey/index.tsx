import API from "configs/api";
import { IPayload, IPromiseResult, IResponse } from "utils/interfaces";

export const getSurveyCriteria = (payload: IPayload): Promise<IPromiseResult> => {
	return new Promise<IPromiseResult>((resolve, reject) => {
		API.getCriteria(payload)
			.then((res: IResponse) => resolve({ data: res, success: true }))
			.catch((err: any) => reject(new Error(err.message)));
	});
};

export const getReportCriteriaByCriteriaId = (payload: IPayload): Promise<IPromiseResult> => {
	return new Promise<IPromiseResult>((resolve, reject) => {
		API.getCriteria(payload)
			.then((res: IResponse) => resolve({ data: res, success: true }))
			.catch((err: any) => reject(new Error(err.message)));
	});
};
export const getReportManajemenRisiko = (payload: IPayload): Promise<IPromiseResult> => {
	return new Promise<IPromiseResult>((resolve, reject) => {
		API.getManajemenRisiko(payload)
			.then((res: IResponse) => resolve({ data: res, success: true }))
			.catch((err: any) => reject(new Error(err.message)));
	});
};

export const getDetailCriteriaReport = (payload: IPayload): Promise<IPromiseResult> => {
	return new Promise<IPromiseResult>((resolve, reject) => {
		API.getCriteria(payload)
			.then((res: IResponse) => resolve({ data: res, success: true }))
			.catch((err: any) => reject(new Error(err.message)));
	});
};
export const getCriticismReport = (payload: IPayload): Promise<IPromiseResult> => {
	return new Promise<IPromiseResult>((resolve, reject) => {
		API.getCriteria(payload)
			.then((res: IResponse) => resolve({ data: res, success: true }))
			.catch((err: any) => reject(new Error(err.message)));
	});
};
export const getPartisipan = (payload: IPayload): Promise<IPromiseResult> => {
	return new Promise<IPromiseResult>((resolve, reject) => {
		API.getPartisipan(payload)
			.then((res: IResponse) => resolve({ data: res, success: true }))
			.catch((err: any) => reject(new Error(err.message)));
	});
};

export const getReportAllsite = (payload: IPayload): Promise<IPromiseResult> => {
	return new Promise<IPromiseResult>((resolve, reject) => {
		API.getAllsite(payload)
			.then((res: IResponse) => resolve({ data: res, success: true }))
			.catch((err: any) => reject(new Error(err.message)));
	});
};
export const getReportSite = (payload: IPayload): Promise<IPromiseResult> => {
	return new Promise<IPromiseResult>((resolve, reject) => {
		API.getSite(payload)
			.then((res: IResponse) => resolve({ data: res, success: true }))
			.catch((err: any) => reject(new Error(err.message)));
	});
};

export const getParentCompany = (payload: IPayload): Promise<IPromiseResult> => {
	return new Promise<IPromiseResult>((resolve, reject) => {
		API.getParentCompany(payload)
			.then((res: IResponse) => resolve({ data: res, success: true }))
			.catch((err: any) => reject(new Error(err.message)));
	});
};

// https://survey.dev.hsd-api.com/v1/surveys/parent-companies
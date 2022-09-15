import API from "configs/api";
import { IPayload, IPromiseResult, IResponse } from "utils/interfaces";

export const getOperationReport = (payload: IPayload): Promise<IPromiseResult> => {
	return new Promise<IPromiseResult>((resolve, reject) => {
		API.getOperationReport(payload)
			.then((res: IResponse) => resolve({ data: res, success: true }))
			.catch((err: any) => reject(new Error(err.message)));
	});
};

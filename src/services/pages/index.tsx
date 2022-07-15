import API from "configs/api";
import { IPayload, IPromiseResult, IResponse } from "utils/interfaces";

export const listPages = (payload: IPayload): Promise<IPromiseResult> => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.listPages(payload)
      .then((res: IResponse) => resolve({ data: res, success: true }))
      .catch((err: any) => reject(new Error(err.message)));
  });
};
export const updatePages = (payload: IPayload): Promise<IPromiseResult> => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.updatePages(payload)
      .then((res: IResponse) => resolve({ data: res, success: true }))
      .catch((err: any) => reject(new Error(err.message)));
  });
};
export const currentLoginPages = (
  payload: IPayload
): Promise<IPromiseResult> => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.currentLoginPages(payload)
      .then((res: IResponse) => resolve({ data: res, success: true }))
      .catch((err: any) => reject(new Error(err.message)));
  });
};

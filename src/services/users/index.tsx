import API from "configs/api";
import { IPayload, IPromiseResult, IResponse } from "utils/interfaces";

export const login = (payload: IPayload): Promise<IPromiseResult> => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.login(payload)
      .then((res: IResponse) => resolve({ data: res, success: true }))
      .catch((err: any) => reject(new Error(err.message)));
  });
};

export const getProfile = (payload: IPayload): Promise<IPromiseResult> => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.getProfile(payload)
      .then((res: IResponse) => resolve({ data: res, success: true }))
      .catch((err: any) => reject(new Error(err.message)));
  });
};
export const updateProfile = (payload: IPayload): Promise<IPromiseResult> => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.updateProfile(payload)
      .then((res: IResponse) => resolve({ data: res, success: true }))
      .catch((err: any) => reject(new Error(err.message)));
  });
};
export const changePassword = (payload: IPayload): Promise<IPromiseResult> => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.changePassword(payload)
      .then((res: IResponse) => resolve({ data: res, success: true }))
      .catch((err: any) => reject(new Error(err.message)));
  });
};
export const forgotPassword = (payload: IPayload): Promise<IPromiseResult> => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.forgotPassword(payload)
      .then((res: IResponse) => resolve({ data: res, success: true }))
      .catch((err: any) => reject(new Error(err.message)));
  });
};
export const resetPassword = (payload: IPayload): Promise<IPromiseResult> => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.resetPassword(payload)
      .then((res: IResponse) => resolve({ data: res, success: true }))
      .catch((err: any) => reject(new Error(err.message)));
  });
};

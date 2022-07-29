import API from "configs/api";
import { IPayload, IPromiseResult, IResponse } from "utils/interfaces";


export const getListUsersWebAdmin = (payload: IPayload): Promise<IPromiseResult> => {
   return new Promise<IPromiseResult>((resolve, reject) => {
      API.getListUsers(payload)
         .then((res: IResponse) => resolve({ data: res, success: true }))
         .catch((err: any) => reject(new Error(err.message)));
   });
};
export const EditUserLevel = (payload: IPayload): Promise<IPromiseResult> => {
   return new Promise<IPromiseResult>((resolve, reject) => {
      API.EditUserLevel(payload)
         .then((res: IResponse) => resolve({ data: res, success: true }))
         .catch((err: any) => reject(new Error(err.message)));
   });
};
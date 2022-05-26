import API from "src/api";
import { IPayload, IPromiseResult, IResponse } from "utils/interfaces";

export const getPokemons = (payload: IPayload): Promise<IPromiseResult> => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.getPokemons(payload)
      .then((res: IResponse) => resolve({ data: res, success: true }))
      .catch((err) => reject(new Error(err.message)));
  });
};

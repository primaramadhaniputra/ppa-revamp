import { AxiosRequestHeaders } from "axios";

export interface IPromiseResult {
  success: boolean;
  data: IResponse;
}

export interface IPayload {
  path?: string;
  params?: { [x: string]: any };
  url?: string;
  type?: string;
  headers?: AxiosRequestHeaders;
  body?: any;
  context?: any;
}

export interface IMeta {
  total: number;
  totalPage: number;
  page: number;
  perPage: number;
}

export interface IResponse {
  code: number;
  status: string;
  data: any;
  message?: string;
  meta: IMeta;
}

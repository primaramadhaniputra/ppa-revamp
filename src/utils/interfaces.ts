import { AxiosRequestHeaders } from "axios";
import { SVGProps } from "react";

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
export interface ILoginData {
  nrp: string | FormDataEntryValue | null;
  password: string | FormDataEntryValue | null;
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

export interface IUserData {
  nrp: string;
  fullName: string;
  dept: string;
  position: string;
  gMenu: string;
  site: string;
}

export interface IOperationReportPayloadData {
  total: number;
  average: string;
  range: {
    target: number;
    data: [];
  };
  trend: {
    target: number;
    data: [];
  };
}

export interface IDropdownData {
  id: number;
  values: string;
  label: string;
}

export interface ICalendarState {
  startDate: Date;
  endDate: Date;
  key: string;
}
export interface ISetCalendarState {
  setCalendarState: React.Dispatch<
    React.SetStateAction<
      {
        startDate: Date;
        endDate: Date;
        key: string;
      }[]
    >
  >;
}

export interface ISVGProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export interface IUserList {
  department: string;
  fullName: string;
  id: string;
  level: string;
  nrp: string;
  position: string;
}

export interface ISingleUser {
  Dept: string;
  Level: string;
  NRP: string;
  Name: string;
  Position: string;
  Id: string;
}

export interface site {
  id: number;
  plan: string | number | null;
  production: string | number | null;
  name: string;
}

export interface allSites {
  id: number;
  siteName: string;
  data: site[];
}

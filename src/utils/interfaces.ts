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
	signal?: any;
}
export interface ILoginData {
	nrp: string | FormDataEntryValue | null;
	password: string | FormDataEntryValue | null;
}

export interface IMeta {
	currentPage?: number;
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

export interface IOperationReprotData {
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

export interface IOperationReportPayloadData {
	site: string;
	data: IOperationReprotData;
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
	percent: number;
	id: number;
	plan: string | number | null;
	production: string | number | null;
	name: string;
}

export interface allSites {
	logo: string;
	id: number;
	siteName: string;
	data: site[];
}

export interface IOB {
	plan: number;
	production: number;
	percent: number;
}

export interface ITotalAllSites {
	overBurden: IOB;
	ore: IOB;
	coal: IOB;
}

export interface IDate {
	startDate: Date;
	endDate: Date;
	key: string;
}

export interface Person {
	[x: string]: any;
}

export interface ISurveyPeriode {
	id: string;
	title: string;
	season: string;
}

export interface ISurveyReportCriteria {
	average: number;
	id: string;
	image: string;
	name: string;
	total: number;
	parentCompany: string;
	assessmentCriteria: {
		score: string;
		total: number;
		average: number;
		statusUser: string;
		sections: {
			id: string;
			name: string;
			questions: {
				id: number;
				uuid: string;
				average: number;
			}[];
		}[];
	};
	criticismAndSuggestions: {
		email: string;
		fullName: string;
		id: string;
		value: string;
	}[];
}

export interface ISurveyQuestions {
	id: string;
	name: string;
	average: number;
}

export interface ISurveyReportCriteriaDetail {
	id: string;
	name: string;
	questions: ISurveyQuestions[];
}

export interface ISurveyReportCriticism {
	email: string;
	fullName: string;
	id: string;
	value: string;
	position: string;
	createdAt: number;
}

export interface IUserPartisipanProfile {
	id: string;
	fullName: string;
	companyName: string;
	logoUrl: string;
}

export interface IUserDetailPartisipanQuestions {
	id: string;
	name: string;
	questions: {
		id: string;
		name: string;
		type: string;
		createdAt: string;
		answer: {
			value: number;
		};
	}[];
}

export interface IHauling {
	actual: number;
	material: string;
	plan: number;
	satuan: string;
}

export interface IProductionSites {
	site: string;
	data: {
		hauling: IHauling;
		pit: IHauling;
	};
	logo: string;
}

export interface IParticipant {
	total: number;
	percent: number;
	hasAnwer: number
}

export interface IReport {
	id: string;
	name: string;
	order: number
}

export interface IMultipleChoice extends IReport {
	totalAnswer: number
}

export interface IQuestions extends IReport {
	multipleChoices: IMultipleChoice[]
}

export interface IReportManajemenRisiko extends IReport {
	questions: IQuestions[]
}
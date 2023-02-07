import { ISelectItem } from "@hudoro/neron";
import { atom, SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export const surveyPeriodeAtom = atom<ISelectItem[]>({
	key: "surveyPeriode",
	default: [],
});

export const useSurveyPeriodeValue = () => useRecoilValue(surveyPeriodeAtom);
export const useSetSurveyPeriode = () => useSetRecoilState(surveyPeriodeAtom);
export const useSurveyPeriodeState = (): [ISelectItem[], SetterOrUpdater<ISelectItem[]>] =>
	useRecoilState(surveyPeriodeAtom);

import { ISelectItem } from "@hudoro/neron";
import { atom, SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export const loginDefaultValue = atom<ISelectItem[]>({
	key: "loginDefaultValue",
	default: [],
});

export const useLoginDefaultValue = () => useRecoilValue(loginDefaultValue);
export const useSetLoginDefaultValue = () => useSetRecoilState(loginDefaultValue);
export const useLoginDefaultValueState = (): [ISelectItem[], SetterOrUpdater<ISelectItem[]>] =>
	useRecoilState(loginDefaultValue);

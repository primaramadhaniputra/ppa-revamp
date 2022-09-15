import { ISelectItem } from "@hudoro/neron";
import { atom, SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export const navbarDefaultValue = atom<ISelectItem[]>({
	key: "navbarDefaultValue",
	default: [],
});

export const useNavbarDefaultValue = () => useRecoilValue(navbarDefaultValue);
export const useSetNavbarDefaultValue = () => useSetRecoilState(navbarDefaultValue);
export const useNavbarDefaultValueState = (): [ISelectItem[], SetterOrUpdater<ISelectItem[]>] =>
	useRecoilState(navbarDefaultValue);

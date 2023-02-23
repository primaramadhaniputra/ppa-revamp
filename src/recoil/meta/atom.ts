import { atom, SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IMeta } from "utils/interfaces";

export const metaAtom = atom<IMeta>({
	key: "meta",
	default: undefined,
});

export const useMetaValue = () => useRecoilValue(metaAtom);
export const useSetMeta = () => useSetRecoilState(metaAtom);
export const useMetaState = (): [IMeta, SetterOrUpdater<IMeta>] => useRecoilState(metaAtom);

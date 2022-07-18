import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const systemTypeAtom = atom<string>({
  key: "systemType",
  default: "",
});

export const useSystemTypeValue = () => useRecoilValue(systemTypeAtom);
export const useSetSystemType = () => useSetRecoilState(systemTypeAtom);
export const useSystemTypeState = () => useRecoilState(systemTypeAtom);

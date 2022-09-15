import { atom, SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IUserData } from "utils/interfaces";

export const usersAtom = atom<IUserData[]>({
	key: "users",
	default: [],
});

export const useUsersValue = () => useRecoilValue(usersAtom);
export const useSetUsers = () => useSetRecoilState(usersAtom);
export const useUsersState = (): [IUserData[], SetterOrUpdater<IUserData[]>] =>
	useRecoilState(usersAtom);

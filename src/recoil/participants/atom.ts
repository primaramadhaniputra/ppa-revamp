import { atom, SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IUserPartisipanProfile } from "utils/interfaces";

export const participantsAtom = atom<IUserPartisipanProfile[]>({
	key: "participants",
	default: [],
});

export const useParticipantsValue = () => useRecoilValue(participantsAtom);
export const useSetParticipants = () => useSetRecoilState(participantsAtom);
export const useParticipantsState = (): [
	IUserPartisipanProfile[],
	SetterOrUpdater<IUserPartisipanProfile[]>,
] => useRecoilState(participantsAtom);

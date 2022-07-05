import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export const menuTypeOperationReportAtom = atom<string>({
    key: 'menu',
    default: 'payloads',
});

export const useMenuTypeOperationReportValue = () => useRecoilValue(menuTypeOperationReportAtom);
export const useSetMenuTypeOperationReport = () => useSetRecoilState(menuTypeOperationReportAtom);
export const useMenuTypeOperationReportState = () => useRecoilState(menuTypeOperationReportAtom);

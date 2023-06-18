import { atom } from 'recoil';

type showAppDownloadModalAtom_T = boolean;

export const showAppDownloadModalAtom = atom<showAppDownloadModalAtom_T>({
  key: 'showAppDownloadModalAtom',
  default: true,
});

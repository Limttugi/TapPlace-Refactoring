import { atom } from 'recoil';

export const breakpointState = atom<'MOBILE' | 'TABLET' | 'DESKTOP'>({
  key: 'breakpointState',
  default: 'DESKTOP',
});

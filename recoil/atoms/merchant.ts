import { atom } from 'recoil';

import { merchantInfo_I } from '@/types/merchant';

export const merchantListAtom = atom<Array<merchantInfo_I>>({
  key: 'merchantListAtom',
  default: [],
});

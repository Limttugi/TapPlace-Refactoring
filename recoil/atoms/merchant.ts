import { atom } from 'recoil';

import { MerchantInfo_I } from '@/types/merchant';

export type merchantListAtom_T = Array<MerchantInfo_I>;

export const merchantListAtom = atom<merchantListAtom_T>({
  key: 'merchantListAtom',
  default: [],
});

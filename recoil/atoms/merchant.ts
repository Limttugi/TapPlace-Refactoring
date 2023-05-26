import { atom } from 'recoil';

import { MerchantInfo_I } from '@/types/merchant';

export const merchantListAtom = atom<Array<MerchantInfo_I>>({
  key: 'merchantListAtom',
  default: [],
});

import { atom } from 'recoil';

import { merchantInfo_I } from '@/types/merchant';
import { MutableRefObject } from 'react';

export const merchantListState = atom<Array<merchantInfo_I>>({
  key: 'merchantListState',
  default: undefined,
});

type clickedMerchantState_T = {
  clicked: boolean;
  clickedMerchantID: string | undefined;
};

export const clickedMerchantState = atom<clickedMerchantState_T>({
  key: 'clickedMerchantState',
  default: {
    clicked: false,
    clickedMerchantID: undefined,
  },
});

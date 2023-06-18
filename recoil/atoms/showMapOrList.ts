import { atom } from 'recoil';

export const showMapOrMerchantListAtom = atom<'map' | 'list'>({
  key: 'showMapOrMerchantListAtom',
  default: 'map',
});

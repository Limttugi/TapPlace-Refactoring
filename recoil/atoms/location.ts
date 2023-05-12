import { atom } from 'recoil';
import { Location_I } from '@/types/location';

export const loadingBringMyLocationState = atom<boolean>({
  key: 'loadingBringMyLocationState',
  default: false,
});

export const currentLocationState = atom<Location_I>({
  key: 'currentLocationState',
  default: { latitude: 0, longitude: 0 },
});

export const currentAddressState = atom<string>({
  key: 'currentAddressState',
  default: undefined,
});

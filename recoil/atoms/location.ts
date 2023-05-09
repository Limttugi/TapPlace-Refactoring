import { atom } from 'recoil';

interface currentLocationState_I {
  latitude: number;
  longitude: number;
}

export const loadingBringMyLocationState = atom<boolean>({
  key: 'loadingBringMyLocationState',
  default: false,
});

export const currentLocationState = atom<currentLocationState_I>({
  key: 'currentLocationState',
  default: undefined,
});

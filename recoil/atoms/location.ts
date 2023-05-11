import { atom } from 'recoil';

interface currentLocationState_I {
  latitude: number | undefined;
  longitude: number | undefined;
}

export const loadingBringMyLocationState = atom<boolean>({
  key: 'loadingBringMyLocationState',
  default: false,
});

export const currentLocationState = atom<currentLocationState_I>({
  key: 'currentLocationState',
  default: { latitude: undefined, longitude: undefined },
});

export const currentAddressState = atom<string>({
  key: 'currentAddressState',
  default: undefined,
});

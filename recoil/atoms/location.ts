import { atom } from 'recoil';
import { Location_I } from '@/types/location';

interface BringMyLocation_I {
  isBringMyLocation: boolean;
  currentLocation: Location_I;
  currentAddress: string;
}

export const bringMyLocationAtom = atom<BringMyLocation_I>({
  key: 'bringMyLocationAtom',
  default: {
    isBringMyLocation: false,
    currentLocation: { latitude: 0, longitude: 0 },
    currentAddress: '',
  },
});

export const searchLocationAtom = atom<Location_I>({
  key: 'searchLocationAtom',
  default: { latitude: 0, longitude: 0 },
});

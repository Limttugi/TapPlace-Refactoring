import { atom } from 'recoil';

interface MarkerStateAtom_I {
  showMarkerDetail: boolean;
  markerID: string;
}

export const markerStateAtom = atom<MarkerStateAtom_I>({
  key: 'markerStateAtom',
  default: {
    showMarkerDetail: false,
    markerID: '',
  },
});

import { atom } from 'recoil';

interface MarkerStateAtom_I {
  showMarkerMenu: boolean;
  markerID: string;
}

export const markerStateAtom = atom<MarkerStateAtom_I>({
  key: 'markerStateAtom',
  default: {
    showMarkerMenu: false,
    markerID: '',
  },
});

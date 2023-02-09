import { createContext } from 'react';

interface GlobalContextValueI {
  mapRef: naver.maps.Map | null | any;
  marker: Array<any>;
  currentClickedMarker: naver.maps.Marker | any;
  circle: naver.maps.Circle | null;
}

export const GlobalContextValue: GlobalContextValueI = {
  mapRef: null,
  marker: [],
  currentClickedMarker: null,
  circle: null,
};

export const GlobalContext = createContext(GlobalContextValue);

export default GlobalContext;

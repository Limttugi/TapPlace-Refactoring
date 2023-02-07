import { createContext } from 'react';

interface GlobalContextValueI {
  mapRef: naver.maps.Map | null | any;
  marker: Array<any>;
  currentClickedMarker: naver.maps.Marker | any;
}

export const GlobalContextValue: GlobalContextValueI = { mapRef: null, marker: [], currentClickedMarker: null };

export const GlobalContext = createContext(GlobalContextValue);

export default GlobalContext;

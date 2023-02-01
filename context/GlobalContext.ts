import { createContext } from 'react';

interface GlobalContextValueI {
  marker: Array<any>;
  currentClickedMarker: naver.maps.Marker | any;
}

export const GlobalContextValue: GlobalContextValueI = { marker: [], currentClickedMarker: null };

export const GlobalContext = createContext(GlobalContextValue);

export default GlobalContext;

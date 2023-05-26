import { createContext } from 'react';

interface NaverContextValue_I {
  map: naver.maps.Map | undefined;
  circle: naver.maps.Circle | undefined;
  infowindow: naver.maps.InfoWindow[];
  markers: naver.maps.Marker[];
}

export const NaverContextValue: NaverContextValue_I = {
  map: undefined,
  circle: undefined,
  infowindow: [],
  markers: [],
};

export const NaverContext = createContext(NaverContextValue);

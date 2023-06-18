import { createContext } from 'react';

interface NaverContextValue_I {
  map: naver.maps.Map | undefined;
  circle: naver.maps.Circle | undefined;
  markers: naver.maps.Marker[];
  currentClickedMarker: naver.maps.Marker | undefined;
}

export const NaverContextValue: NaverContextValue_I = {
  map: undefined,
  circle: undefined,
  markers: [],
  currentClickedMarker: undefined,
};

export const NaverContext = createContext(NaverContextValue);

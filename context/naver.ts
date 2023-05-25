import { createContext } from 'react';

interface NaverContextValue_I {
  map: naver.maps.Map | undefined;
  circle: naver.maps.Circle | undefined;
}

export const NaverContextValue: NaverContextValue_I = {
  map: undefined,
  circle: undefined,
};

export const NaverContext = createContext(NaverContextValue);

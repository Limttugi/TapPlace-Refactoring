import { useCallback, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { currentLocationState } from '@/recoil/atoms/location';

const useMap = () => {
  let mapElement = useRef<HTMLDivElement | null>(null);
  const currentLocation = useRecoilValue(currentLocationState);

  const mapRendering = useCallback(() => {
    const { naver } = window;
    if (mapElement.current) {
      const mapOptions: naver.maps.MapOptions = {
        center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        zoom: 17,
        scaleControl: false,
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);
    }
  }, [currentLocation]);

  return { mapElement, mapRendering };
};

export default useMap;

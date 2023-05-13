import { useCallback, useMemo, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { currentLocationState } from '@/recoil/atoms/location';

const useMap = () => {
  const currentLocation = useRecoilValue(currentLocationState);

  const mapElement = useRef<HTMLDivElement | null | any>(null);
  const circle = useRef<naver.maps.Circle | null>(null);

  // const setCenterOfMap = useCallback(() => {
  //   mapElement.current.setCenter(new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude));
  // }, [currentLocation.latitude, currentLocation.longitude]);

  const mapRendering = useCallback(() => {
    if (mapElement.current === null) {
      mapElement.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        zoom: 16,
        scaleControl: false,
      });
    }
  }, [currentLocation]);

  const drawCircleMyRadius = () => {
    circle.current && circle.current.setMap(null);

    const _circle = new naver.maps.Circle({
      map: mapElement.current,
      center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
      radius: 1000,
      fillColor: 'rgba(78, 119, 251, 0.03)',
      strokeColor: 'rgba(78, 119, 251, 0.5)',
      strokeWeight: 1,
    });

    circle.current = _circle;
  };

  const drawMerchantMarker = () => {
    // new naver.maps.Marker({
    //   title: '',
    //   map: mapElement.current,
    //   position: new naver.maps.LatLng(parseInt(storeInfo.y), parseInt(storeInfo.s)),
    //   icon: {
    //     url: screen,
    //   }
    // })
  };

  return { mapElement, mapRendering, drawCircleMyRadius };
};

export default useMap;

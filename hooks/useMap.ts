import { useCallback, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { bringMyLocationAtom, searchLocationAtom } from '@/recoil/atoms/location';
import { merchantInfo_I } from '@/types/merchant';
import { MARKER_SRC } from '@/constants/IMAGE_SOURCE';
import { merchantListAtom } from '@/recoil/atoms/merchant';
import useMarker from './useMarker';

const useMap = () => {
  const markerClickEvent = useMarker().markerClickEvent;
  const currentLocation = useRecoilValue(bringMyLocationAtom).currentLocation;
  const merchantList = useRecoilValue(merchantListAtom);
  const searchLocation = useRecoilValue(searchLocationAtom);

  const naverMapRef = useRef<naver.maps.Map>();
  const circleRef = useRef<naver.maps.Circle>();
  const markersRef = useRef<Array<naver.maps.Marker>>([]);

  const mapRendering = useCallback(() => {
    if (!naverMapRef.current)
      naverMapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        zoom: 16,
        scaleControl: false,
      });
  }, [currentLocation]);

  const drawCircleMyRadius = useCallback(() => {
    circleRef.current && circleRef.current.setMap(null);

    const circle = new naver.maps.Circle({
      map: naverMapRef.current,
      center: new naver.maps.LatLng(searchLocation.latitude, searchLocation.longitude),
      radius: 1000,
      fillColor: 'rgba(78, 119, 251, 0.03)',
      strokeColor: 'rgba(78, 119, 251, 0.5)',
      strokeWeight: 1,
    });

    circleRef.current = circle;
  }, [searchLocation]);

  const drawMerchantMarker = useCallback(() => {
    let markers: Array<naver.maps.Marker> = [];
    merchantList.forEach((merchant: merchantInfo_I) => {
      const IMG_URL = MARKER_SRC[merchant.category_group_name];

      const marker = new naver.maps.Marker({
        title: merchant.place_name,
        map: naverMapRef.current,
        position: new naver.maps.LatLng(Number(merchant.y), Number(merchant.x)),
        icon: { url: IMG_URL[0] },
      });

      markerClickEvent({ marker, bigImg: IMG_URL[1], store_id: merchant.store_id });
      markers.push(marker);
    });
    markersRef.current = markers;
  }, [merchantList, markerClickEvent]);

  //   const setCenterOfMap = useCallback(() => {
  //   mapElement.current.setCenter(new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude));
  // }, [currentLocation.latitude, currentLocation.longitude]);

  return { mapRendering, drawCircleMyRadius, drawMerchantMarker };
};

export default useMap;

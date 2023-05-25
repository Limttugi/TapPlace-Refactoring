import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { bringMyLocationAtom, searchLocationAtom } from '@/recoil/atoms/location';
import { merchantInfo_I, merchantMarker_I } from '@/types/merchant';
import { MARKER_SRC } from '@/constants/IMAGE_SOURCE';
import { merchantListAtom } from '@/recoil/atoms/merchant';
import useMarker from './useMarker';
import { markerStateAtom } from '@/recoil/atoms/marker';

const useMap = () => {
  // const markerClickEvent = useMarker().markerClickEvent;
  const currentLocation = useRecoilValue(bringMyLocationAtom).currentLocation;
  const merchantList = useRecoilValue(merchantListAtom);
  const searchLocation = useRecoilValue(searchLocationAtom);

  const naverMapRef = useRef<naver.maps.Map>();
  const circleRef = useRef<naver.maps.Circle>();
  const markersRef = useRef<Array<naver.maps.Marker>>([]);

  const [markerState, setMarkerState] = useRecoilState(markerStateAtom);

  const clickedMarker = useRef<naver.maps.Marker | null | any>(null);

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

  const markerClickEvent = useCallback(
    ({ marker, store_id, x, y }: merchantMarker_I) => {
      // 마커 클릭 이벤트
      naver.maps.Event.addListener(marker, 'click', () => {
        setMarkerState({ showMarkerDetail: true, markerID: store_id });

        naverMapRef.current?.setOptions({ zoom: 18 });
        naverMapRef.current?.setCenter(new naver.maps.LatLng(y, x - window.innerWidth / 1600000));
      });
    },
    [setMarkerState],
  );

  const drawMerchantMarker = useCallback(() => {
    for (let i = 0; i < markersRef.current.length; i++) markersRef.current[i].setMap(null);

    let markers: Array<naver.maps.Marker> = [];

    merchantList.forEach((merchant: merchantInfo_I) => {
      const IMG_URL = MARKER_SRC[merchant.category_group_name];
      const x = parseFloat(merchant.x);
      const y = parseFloat(merchant.y);

      const marker = new naver.maps.Marker({
        title: merchant.place_name,
        map: naverMapRef.current,
        position: new naver.maps.LatLng(y, x),
        icon: { url: IMG_URL[0] },
      });

      markerClickEvent({ marker, store_id: merchant.store_id, x: x, y: y });

      markers.push(marker);
    });
    return markers;
  }, [merchantList, markerClickEvent]);

  //   const setCenterOfMap = useCallback(() => {
  //   mapElement.current.setCenter(new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude));
  // }, [currentLocation.latitude, currentLocation.longitude]);

  useEffect(() => {
    const markers = drawMerchantMarker();
    markersRef.current = markers;
  }, [drawMerchantMarker]);

  return { markersRef, clickedMarker, mapRendering, drawCircleMyRadius, drawMerchantMarker };
};

export default useMap;

import { useCallback, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { bringMyLocationAtom, searchLocationAtom } from '@/recoil/atoms/location';
import { merchantInfo_I, MerchantMarker_I } from '@/types/merchant';
import { MARKER_SRC } from '@/constants/IMAGE_SOURCE';
import { merchantListAtom } from '@/recoil/atoms/merchant';
import { markerStateAtom } from '@/recoil/atoms/marker';
import { NaverContextValue } from '@/context/naver';

const useMap = () => {
  const { currentLocation } = useRecoilValue(bringMyLocationAtom);
  const merchantList = useRecoilValue(merchantListAtom);
  const searchLocation = useRecoilValue(searchLocationAtom);
  const setMarkerState = useSetRecoilState(markerStateAtom);

  const naverMapRef = useRef<naver.maps.Map>();
  const circleRef = useRef<naver.maps.Circle>();

  const mapRendering = useCallback(() => {
    if (!naverMapRef.current) {
      naverMapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        zoom: 16,
        scaleControl: false,
      });
      NaverContextValue.map = naverMapRef.current;
    }
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
      const x = parseFloat(merchant.x);
      const y = parseFloat(merchant.y);

      const marker = new naver.maps.Marker({
        title: merchant.place_name,
        map: naverMapRef.current,
        position: new naver.maps.LatLng(y, x),
        icon: { url: IMG_URL[0] },
      });

      naver.maps.Event.addListener(marker, 'click', () => {
        setMarkerState({ showMarkerDetail: true, markerID: merchant.store_id });
        naverMapRef.current?.setOptions({ zoom: 18 });
        naverMapRef.current?.setCenter(new naver.maps.LatLng(y, x - window.innerWidth / 1600000));
      });
      markers.push(marker);
    });
  }, [merchantList, setMarkerState]);

  return { naverMapRef, mapRendering, drawCircleMyRadius, drawMerchantMarker };
};

export default useMap;

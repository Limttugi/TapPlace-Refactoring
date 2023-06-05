import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import useMarker from './useMarker';
import { NaverContextValue } from '@/context/naver';
import { markerStateAtom } from '@/recoil/atoms/marker';
import { bringMyLocationAtom, searchLocationAtom } from '@/recoil/atoms/location';
import { merchantListSelector } from '@/recoil/selector/merchant';
import { MARKER_SRC } from '@/constants/IMAGE_SOURCE';
import { MerchantInfo_I } from '@/types/merchant';

const useMap = () => {
  const changeSmallMarker = useMarker().changeSmallMarker;
  const { currentLocation } = useRecoilValue(bringMyLocationAtom);
  const merchantList = useRecoilValue(merchantListSelector);
  const searchLocation = useRecoilValue(searchLocationAtom);
  const setMarkerState = useSetRecoilState(markerStateAtom);

  // 지도 렌더링
  const mapRendering = useCallback(() => {
    if (!NaverContextValue.map) {
      console.log('map');
      NaverContextValue.map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        zoom: 16,
        scaleControl: false,
      });
    }
  }, [currentLocation]);

  // 반경을 나타내는 원 그리기
  const drawCircleMyRadius = useCallback(() => {
    NaverContextValue.circle && NaverContextValue.circle.setMap(null);
    const circle = new naver.maps.Circle({
      map: NaverContextValue.map,
      center: new naver.maps.LatLng(searchLocation.latitude, searchLocation.longitude),
      radius: 1000,
      fillColor: 'rgba(78, 119, 251, 0.03)',
      strokeColor: 'rgba(78, 119, 251, 0.5)',
      strokeWeight: 1,
    });
    NaverContextValue.circle = circle;
  }, [searchLocation]);

  // 클릭한 가맹점 위치로 지도 중심 이동
  const setMapCenter = useCallback(({ x, y }: { x: number; y: number }) => {
    NaverContextValue.map?.setOptions({ zoom: 18 });
    NaverContextValue.map?.setCenter(new naver.maps.LatLng(y, x - window.innerWidth / 1600000));
  }, []);

  // 지도에 마커 그리기
  const drawMerchantMarker = useCallback(() => {
    // 지도에 있는 마커 초기화
    NaverContextValue.markers.forEach(marker => marker.setMap(null));
    NaverContextValue.markers = [];

    if (merchantList?.length !== 0) {
      console.log('drawMarker');
      merchantList?.forEach((merchant: MerchantInfo_I) => {
        const IMG_URL = MARKER_SRC[merchant.category_group_name];
        const x = parseFloat(merchant.x);
        const y = parseFloat(merchant.y);

        const marker = new naver.maps.Marker({
          title: merchant.place_name,
          map: NaverContextValue.map,
          position: new naver.maps.LatLng(y, x),
          icon: { url: IMG_URL[0] },
        });

        naver.maps.Event.addListener(marker, 'click', () => {
          if (marker !== NaverContextValue.currentClickedMarker) {
            marker.setIcon({ url: IMG_URL[1] });
            changeSmallMarker();
            setMarkerState({ showMarkerDetail: true, markerID: merchant.store_id });
            setMapCenter({ x, y });
          }

          NaverContextValue.currentClickedMarker = marker;
        });
        NaverContextValue.markers.push(marker);
      });
    }
  }, [merchantList, changeSmallMarker, setMapCenter, setMarkerState]);

  return { mapRendering, drawCircleMyRadius, setMapCenter, drawMerchantMarker };
};

export default useMap;

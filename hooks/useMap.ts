import { useCallback, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { bringMyLocationAtom, searchLocationAtom } from '@/recoil/atoms/location';
import { MerchantInfo_I } from '@/types/merchant';
import { MARKER_SRC } from '@/constants/IMAGE_SOURCE';
import { merchantListAtom } from '@/recoil/atoms/merchant';
import { markerStateAtom } from '@/recoil/atoms/marker';
import { NaverContextValue } from '@/context/naver';

const useMap = () => {
  const { currentLocation } = useRecoilValue(bringMyLocationAtom);
  const merchantList = useRecoilValue(merchantListAtom);
  const searchLocation = useRecoilValue(searchLocationAtom);
  const setMarkerState = useSetRecoilState(markerStateAtom);

  // 지도 렌더링
  const mapRendering = useCallback(() => {
    if (!NaverContextValue.map)
      NaverContextValue.map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        zoom: 16,
        scaleControl: false,
      });
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
  // 지도에 마커 그리기
  const drawMerchantMarker = useCallback(() => {
    NaverContextValue.markers = [];
    NaverContextValue.infoWindows = [];

    merchantList.forEach((merchant: MerchantInfo_I) => {
      const IMG_URL = MARKER_SRC[merchant.category_group_name];
      const x = parseFloat(merchant.x);
      const y = parseFloat(merchant.y);

      const marker = new naver.maps.Marker({
        title: merchant.place_name,
        map: NaverContextValue.map,
        position: new naver.maps.LatLng(y, x),
        icon: { url: IMG_URL },
      });

      const content = ['<dialog class="infowindow">', `${merchant.place_name}`, '</dialog>'].join('');

      const infoWindow = new naver.maps.InfoWindow({
        content: content,
        anchorSize: new naver.maps.Size(16, 12),
        position: new naver.maps.LatLng(y + 0.001, x),
      });

      naver.maps.Event.addListener(marker, 'click', () => {
        setMarkerState({ showMarkerDetail: true, markerID: merchant.store_id });
        NaverContextValue.map?.setOptions({ zoom: 18 });
        NaverContextValue.map?.setCenter(new naver.maps.LatLng(y, x - window.innerWidth / 1600000));

        if (infoWindow.getMap()) infoWindow.close();
        else NaverContextValue.map && infoWindow.open(NaverContextValue.map, marker);
      });

      NaverContextValue.infoWindows.push(infoWindow);
      NaverContextValue.markers.push(marker);
    });
  }, [merchantList, setMarkerState]);

  return { mapRendering, drawCircleMyRadius, drawMerchantMarker };
};

export default useMap;

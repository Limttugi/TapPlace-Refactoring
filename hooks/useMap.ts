import { useCallback, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { currentLocationState } from '@/recoil/atoms/location';
import { merchantInfo_I, merchantMarker_I } from '@/types/merchant';
import { MARKER_SRC } from '@/constants/IMAGE_SOURCE';
import { clickedMerchantState } from '@/recoil/atoms/merchant';

const useMap = () => {
  const currentLocation = useRecoilValue(currentLocationState);
  const setClickedMerchant = useSetRecoilState(clickedMerchantState);

  const mapElement = useRef<HTMLDivElement | null | any>(null);
  const circle = useRef<naver.maps.Circle | null>(null);
  const clickedMarker = useRef<naver.maps.Marker | null | any>(null);

  const markerList: Array<naver.maps.Marker> = [];

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

  const drawMerchantMarker = (merchants: Array<merchantInfo_I>) => {
    const markerClickEvent = ({ marker, bigImg, store_id }: merchantMarker_I) => {
      // 마커 클릭 이벤트
      naver.maps.Event.addListener(marker, 'click', () => {
        marker.setIcon({ url: bigImg });
        // 클릭되어있는 마커와 같은 마커가 아닌 경우
        if (clickedMarker.current && clickedMarker.current !== marker) {
          clickedMarker.current.setIcon({
            url: clickedMarker.current.icon.url.replace('_big', ''),
          });
        }
        clickedMarker.current = marker;

        setClickedMerchant({ clicked: true, clickedMerchantID: store_id });
      });
    };

    merchants?.map(merchant => {
      const url = MARKER_SRC[merchant.category_group_name];

      const marker = new naver.maps.Marker({
        title: merchant.place_name,
        map: mapElement.current,
        position: new naver.maps.LatLng(Number(merchant.y), Number(merchant.x)),
        icon: { url: url[0] },
      });
      markerList.push(marker);
      markerClickEvent({ marker, bigImg: url[1], store_id: merchant.store_id });
    });
  };

  return { mapElement, clickedMarker, mapRendering, drawCircleMyRadius, drawMerchantMarker };
};

export default useMap;

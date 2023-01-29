import { getStore } from '@/api/store';
import { useAppSelector } from '@/redux/hooks';
import { useCallback, useRef, useState } from 'react';
import useMarker from './useMarker';

export interface storeI {
  num: number;
  store_id: string;
  category_group_name: string;
  address_name: string;
  road_address_name: string;
  place_name: string;
  phone: string;
  pays: Array<string>;
  distance: number;
  x: string;
  y: string;
}
interface storeImageI {
  imageSrc: string;
  imageSrc_big: string;
}

const useMap = () => {
  const { markerImageDivideByCategory, markerAddClickEvent } = useMarker();
  const { currentLocation, LOADING_MY_LOCATION } = useAppSelector(state => state.location);
  const mapRef = useRef<HTMLElement | null | any>(null);
  let stores: Array<storeI> = [];

  // 지도 렌더링
  const mapRendering = useCallback(() => {
    if (!LOADING_MY_LOCATION) {
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        scaleControl: false,
      });
    }
  }, [LOADING_MY_LOCATION, currentLocation]);

  // 반경 내 가맹점 가져오기
  const handleGetStore = async () => {
    const res = await getStore(currentLocation);
    if (res.status !== 200) alert('예기치 못한 오류가 발생했습니다\n다시 시도해주세요');
    else {
      stores = res.data.stores;
      handleDisplayMarker(res.data.stores);
    }
  };

  // 지도에 가맹점 마커 표시
  const handleDisplayMarker = (stores: Array<storeI>) => {
    stores.forEach(storeInfo => {
      const storeImage: storeImageI = markerImageDivideByCategory(storeInfo);
      const marker = new naver.maps.Marker({
        map: mapRef.current,
        position: new naver.maps.LatLng(Number(storeInfo.y), Number(storeInfo.x)),
        icon: {
          url: storeImage.imageSrc,
        },
      });
      markerAddClickEvent({ marker, storeImage, storeInfo });
    });
  };

  return {
    mapRef,
    mapRendering,
    stores,
    handleGetStore,
  };
};

export default useMap;

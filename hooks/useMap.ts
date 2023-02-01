import { getStore } from '@/api/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { SET_STORES } from '@/redux/slices/store';
import { useCallback, useEffect, useRef, useState } from 'react';
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
export interface storeImageI {
  imageSrc: string;
  imageSrc_big: string;
}

const useMap = () => {
  const dispatch = useAppDispatch();
  const { markerImageDivideByCategory, markerAddClickEvent } = useMarker();
  const { currentLocation, LOADING_MY_LOCATION } = useAppSelector(state => state.location);
  const mapRef = useRef<HTMLElement | null | any>(null);

  // 지도 렌더링
  const mapRendering = () => {
    if (!LOADING_MY_LOCATION) {
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        scaleControl: false,
      });
    }
  };

  // 지도에 가맹점 마커 표시
  const handleDisplayMarker = useCallback(
    (stores: Array<storeI>) => {
      stores.forEach(storeInfo => {
        const storeImage: storeImageI = markerImageDivideByCategory(storeInfo);
        const marker = new naver.maps.Marker({
          map: mapRef.current,
          position: new naver.maps.LatLng(Number(storeInfo.y), Number(storeInfo.x)),
          icon: {
            url: storeImage.imageSrc,
          },
        });
        markerAddClickEvent({ mapRef, marker, storeImage, storeInfo });
      });
    },
    [markerAddClickEvent, markerImageDivideByCategory],
  );

  // 반경 내 가맹점 가져오기
  const handleGetStore = useCallback(async () => {
    const res = await getStore(currentLocation);
    if (res.status !== 200) {
      return alert('예기치 못한 오류가 발생했습니다\n다시 시도해주세요');
    } else {
      handleDisplayMarker(res.data.stores);
      dispatch(SET_STORES(res.data.stores));
    }
  }, [currentLocation, dispatch, handleDisplayMarker]);

  useEffect(() => {
    if (!LOADING_MY_LOCATION) handleGetStore();
  }, [LOADING_MY_LOCATION, currentLocation, handleGetStore]);

  return {
    mapRef,
    mapRendering,
    handleGetStore,
  };
};

export default useMap;

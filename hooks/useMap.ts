import { getStore } from '@/api/store';
import GlobalContext from '@/context/GlobalContext';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { SET_STORES } from '@/redux/slices/store';
import { useCallback, useContext, useEffect, useRef } from 'react';
import useMarker from './useMarker';
import { SET_DRAGGING_FLAG, SET_DRAG_CENTER } from '@/redux/slices/location';

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
  const GlobalContextValue = useContext(GlobalContext);
  const { markerImageDivideByCategory, markerAddClickEvent } = useMarker();
  const { currentLocation, LOADING_MY_LOCATION, dragFlag } = useAppSelector(state => state.location);
  const mapRef = useRef<HTMLElement | null | any>(null);

  // 지도 렌더링
  const mapRendering = () => {
    if (mapRef.current === null) {
      console.log('mapRender');
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        scaleControl: false,
      });

      GlobalContextValue.mapRef = mapRef;
      naver.maps.Event.addListener(mapRef.current, 'idle', () => {
        dispatch(SET_DRAGGING_FLAG(true));
        const { _lat, _lng } = mapRef.current.getCenter();
        dispatch(SET_DRAG_CENTER({ latitude: _lat, longitude: _lng }));
      });
    }
  };

  // 지도에 가맹점 마커 표시
  const handleDisplayMarker = (stores: Array<storeI>) => {
    const ALL_STORE: Array<naver.maps.Marker> = [];

    stores.forEach(storeInfo => {
      const storeImage: storeImageI = markerImageDivideByCategory(storeInfo);
      const marker = new naver.maps.Marker({
        title: storeInfo.store_id,
        map: mapRef.current,
        position: new naver.maps.LatLng(Number(storeInfo.y), Number(storeInfo.x)),
        icon: {
          url: storeImage.imageSrc,
        },
      });
      ALL_STORE.push(marker);
      markerAddClickEvent({ mapRef, marker, storeImage, storeInfo });
    });

    if (GlobalContextValue.marker) {
      GlobalContextValue.marker.forEach(marker => {
        marker.setMap(null);
      });
    }

    GlobalContextValue.marker = ALL_STORE;
  };

  // 반경 원 그리기
  const handleCreateRadiusCircle = () => {
    const circle = new naver.maps.Circle({
      map: mapRef.current,
      center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
      radius: 2000,
      fillColor: 'rgba(78, 119, 251, 0.03)',
      strokeColor: 'rgba(78, 119, 251, 0.5)',
      strokeWeight: 1,
    });

    if (GlobalContextValue.circle) GlobalContextValue.circle.setMap(null);

    GlobalContextValue.circle = circle;
  };

  // 반경 내 가맹점 가져오기
  const handleGetStore = async () => {
    const res = await getStore(currentLocation);
    if (res.status !== 200) {
      return alert('예기치 못한 오류가 발생했습니다\n다시 시도해주세요');
    } else {
      handleDisplayMarker(res.data.stores);
      dispatch(SET_STORES(res.data.stores));
      handleCreateRadiusCircle();
    }
  };

  useEffect(() => {
    if (!LOADING_MY_LOCATION) {
      handleGetStore();
    }
  }, [LOADING_MY_LOCATION]);

  useEffect(() => {
    handleGetStore();
  }, [currentLocation]);

  return {
    mapRendering,
    handleGetStore,
  };
};

export default useMap;

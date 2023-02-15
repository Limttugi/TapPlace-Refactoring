import { getStore } from '@/api/store';
import GlobalContext from '@/context/GlobalContext';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import store, { SET_STORES } from '@/redux/slices/store';
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
  const { currentLocation, LOADING_MY_LOCATION } = useAppSelector(state => state.location);
  const { stores, searchWord, filteringStore, filteringPayment } = useAppSelector(state => state.store);
  const mapRef = useRef<HTMLElement | null | any>(null);
  let ALL_STORE: Array<naver.maps.Marker> = [];
  const FILTERING_CATEGORY: Array<string> = [];
  const FILTERING_PAYMENT: Array<string> = [];

  filteringStore.map((filter: string) => {
    if (filter === 'store0') return FILTERING_CATEGORY.push('음식점');
    else if (filter === 'store1') return FILTERING_CATEGORY.push('카페');
    else if (filter === 'store2') return FILTERING_CATEGORY.push('편의점');
    else if (filter === 'store3') return FILTERING_CATEGORY.push('마트');
    else if (filter === 'store4') return FILTERING_CATEGORY.push('주유소');
    else if (filter === 'store5') return FILTERING_CATEGORY.push('주차장');
    else if (filter === 'store6') return FILTERING_CATEGORY.push('병원');
    else if (filter === 'store7') return FILTERING_CATEGORY.push('약국');
    else if (filter === 'store8') return FILTERING_CATEGORY.push('숙박');
    else if (filter === 'store9') return FILTERING_CATEGORY.push('공공기관');
  });

  filteringPayment.map((filter: string) => {
    if (filter === 'pay0') return FILTERING_PAYMENT.push('kakaopay');
    else if (filter === 'pay1') return FILTERING_PAYMENT.push('naverpay');
    else if (filter === 'pay2') return FILTERING_PAYMENT.push('zeropay');
    else if (filter === 'pay3') return FILTERING_PAYMENT.push('payco');
    else if (filter === 'apple0') return FILTERING_PAYMENT.push('apple_visa');
    else if (filter === 'apple1') return FILTERING_PAYMENT.push('apple_master');
    else if (filter === 'apple2') return FILTERING_PAYMENT.push('apple_jcb');
    else if (filter === 'apple3') return FILTERING_PAYMENT.push('apple_amex');
    else if (filter === 'google0') return FILTERING_PAYMENT.push('google_visa');
    else if (filter === 'google1') return FILTERING_PAYMENT.push('google_master');
    else if (filter === 'google2') return FILTERING_PAYMENT.push('google_maestro');
    else if (filter === 'google3') return FILTERING_PAYMENT.push('google_amex');
    else if (filter === 'conless0') return FILTERING_PAYMENT.push('conless_visa');
    else if (filter === 'conless1') return FILTERING_PAYMENT.push('conless_master');
    else if (filter === 'conless2') return FILTERING_PAYMENT.push('conless_union');
    else if (filter === 'conless3') return FILTERING_PAYMENT.push('conless_jcb');
    else if (filter === 'conless4') return FILTERING_PAYMENT.push('conless_amex');
  });

  // 지도 렌더링
  const mapRendering = () => {
    if (mapRef.current === null) {
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

  const handleDeleteCurrentMarker = () => {
    if (GlobalContextValue.marker) {
      GlobalContextValue.marker.forEach(marker => {
        marker.setMap(null);
      });
    }

    GlobalContextValue.marker = ALL_STORE;
    ALL_STORE = [];
  };

  // 지도에 가맹점 마커 표시
  const handleDisplayMarker = (stores: Array<storeI>) => {
    const storeArray: Array<storeI> = [];
    if (searchWord !== '') {
      stores = stores.filter(storeInfo => {
        if (storeInfo.place_name.includes(searchWord)) return storeInfo;
      });
    }

    if (filteringStore.length !== 0) {
      FILTERING_CATEGORY.forEach(category => {
        stores.map(storeInfo => {
          if (storeInfo.category_group_name === category) return storeArray.push(storeInfo);
        });
      });
      stores = storeArray;
    }

    if (filteringPayment.length !== 0) {
      FILTERING_PAYMENT.forEach(payment => {
        stores.map(storeInfo => {
          if (storeInfo.pays.includes(payment)) return storeArray.push(storeInfo);
        });
      });
      stores = storeArray;
    }

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
      dispatch(SET_STORES(res.data.stores));
      handleCreateRadiusCircle();
    }
  };

  useEffect(() => {
    if (!LOADING_MY_LOCATION) handleGetStore();
  }, [LOADING_MY_LOCATION, currentLocation]);

  useEffect(() => {
    handleDisplayMarker(stores);
    handleDeleteCurrentMarker();
  }, [stores, searchWord, filteringStore, filteringPayment]);

  return {
    mapRendering,
    handleGetStore,
    handleDisplayMarker,
    handleDeleteCurrentMarker,
  };
};

export default useMap;

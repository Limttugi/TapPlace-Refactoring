import { getStore } from '@/api/store';
import { useAppSelector } from '@/redux/hooks';
import { LOADING_MY_LOCATION_SUCCESS, SET_CURRENT_ADDRESS, SET_CURRENT_LOCATION } from '@/redux/slices/location';
import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';

type latlngT = string | naver.maps.Coord | naver.maps.CoordLiteral;
interface storeI {
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

const useMap = () => {
  const dispatch = useDispatch();
  const { currentLocation, currentAddress, LOADING_MY_LOCATION } = useAppSelector(state => state.location);
  const mapRef = useRef<HTMLElement | null | any>(null);

  // 현재 위치(위경도) 가져오기
  const bringMyLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const _latitude = position.coords.latitude;
        const _longitude = position.coords.longitude;
        if (currentLocation.latitude !== _latitude && currentLocation.longitude !== _longitude)
          dispatch(
            SET_CURRENT_LOCATION({
              latitude: _latitude,
              longitude: _longitude,
            }),
          );
        if (LOADING_MY_LOCATION) dispatch(LOADING_MY_LOCATION_SUCCESS());
        getCurrentAddress(mapRef.current?.center);
      });
    } else {
      alert('현재 위치를 알 수 없어 기본 위치로 지정합니다\n가급적이면 위치 정보 수집을 동의해주세요');
      if (LOADING_MY_LOCATION) dispatch(LOADING_MY_LOCATION_SUCCESS());
      getCurrentAddress(mapRef.current?.center);
    }
  };

  // 지도 렌더링
  const mapRendering = useCallback(() => {
    if (!LOADING_MY_LOCATION) {
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        scaleControl: false,
      });
    }
  }, [LOADING_MY_LOCATION, currentLocation]);

  // 현재 위치 주소 검색
  const getCurrentAddress = (latlng: latlngT) => {
    naver.maps.Service.reverseGeocode(
      {
        coords: latlng,
        orders: [naver.maps.Service.OrderType.ADDR, naver.maps.Service.OrderType.ROAD_ADDR].join(','),
      },
      function (status: any, response: any) {
        if (status === naver.maps.Service.Status.ERROR) {
          return console.log('something wrong');
        }
        let _currentAddress = response.v2.address.jibunAddress;
        const firstSpace = _currentAddress.indexOf(' ') + 1;
        const secondSpace = _currentAddress.indexOf(' ', firstSpace);
        _currentAddress = _currentAddress.substr(firstSpace, secondSpace);
        if (_currentAddress !== currentAddress) {
          dispatch(SET_CURRENT_ADDRESS(_currentAddress));
        }
      },
    );
  };

  // 반경 내 가맹점 가져오기
  const handleGetStore = async () => {
    const res = await getStore(currentLocation);
    if (res.status !== 200) alert('예기치 못한 오류가 발생했습니다\n다시 시도해주세요');
    else {
      console.log(res.data.stores);
      handleDisplayMarker(res.data.stores);
    }
  };

  // 가맹점 카테고리에 따른 마커 이미지 분류
  const storeImageDivideByCategory = (store: storeI) => {
    let imageSrc, imageSrc_big;
    switch (store.category_group_name) {
      case '음식점':
        imageSrc = '/img/Marker/restaurant.webp';
        imageSrc_big = '/img/Marker/restaurant_big.webp';
        return { imageSrc, imageSrc_big };
      case '카페':
        imageSrc = '/img/Marker/cafe.webp';
        imageSrc_big = '/img/Marker/cafe_big.webp';
        return { imageSrc, imageSrc_big };
      case '편의점':
        imageSrc = '/img/Marker/store.webp';
        imageSrc_big = '/img/Marker/store_big.webp';
        return { imageSrc, imageSrc_big };
      case '마트':
        imageSrc = '/img/Marker/mart.webp';
        imageSrc_big = '/img/Marker/mart_big.webp';
        return { imageSrc, imageSrc_big };
      case '주유소':
        imageSrc = '/img/Marker/gasStation.webp';
        imageSrc_big = '/img/Marker/gasStation_big.webp';
        return { imageSrc, imageSrc_big };
      case '주차장':
        imageSrc = '/img/Marker/parking.webp';
        imageSrc_big = '/img/Marker/parking_big.webp';
        return { imageSrc, imageSrc_big };
      case '병원':
        imageSrc = '/img/Marker/hospital.webp';
        imageSrc_big = '/img/Marker/hospital_big.webp';
        return { imageSrc, imageSrc_big };
      case '약국':
        imageSrc = '/img/Marker/drugstore.webp';
        imageSrc_big = '/img/Marker/drugstore_big.webp';
        return { imageSrc, imageSrc_big };
      case '숙박':
        imageSrc = '/img/Marker/accommodation.webp';
        imageSrc_big = '/img/Marker/accommodation_big.webp';
        return { imageSrc, imageSrc_big };
      case '공공기관':
        imageSrc = '/img/Marker/institutions.webp';
        imageSrc_big = '/img/Marker/institutions_big.webp';
        return { imageSrc, imageSrc_big };
      default:
        imageSrc = '/img/Marker/etc.webp';
        imageSrc_big = '/img/Marker/etc_big.webp';
        return { imageSrc, imageSrc_big };
    }
  };

  // 지도에 가맹점 마커 표시
  const handleDisplayMarker = (stores: Array<storeI>) => {
    stores.forEach(storeInfo => {
      const storeImage = storeImageDivideByCategory(storeInfo);
      const marker = new naver.maps.Marker({
        map: mapRef.current,
        position: new naver.maps.LatLng(Number(storeInfo.y), Number(storeInfo.x)),
        icon: {
          content: `<Image src=${storeImage?.imageSrc} alt='markerImage' />`,
        },
      });
      markerAddClickEvent({ marker, storeInfo });
    });
  };

  // 마커 클릭 이벤트
  const markerAddClickEvent = ({ marker, storeInfo }: any) => {
    naver.maps.Event.addListener(marker, 'click', () => {});
  };

  return {
    mapRendering,
    bringMyLocation,
    handleGetStore,
  };
};

export default useMap;

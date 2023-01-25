import { useAppSelector } from '@/redux/hooks';
import { LOADING_MY_LOCATION_SUCCESS, SET_CURRENT_ADDRESS, SET_MY_LOCATION } from '@/redux/slices/location';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const useMap = () => {
  const dispatch = useDispatch();
  const { myLocation, LOADING_MY_LOCATION } = useAppSelector(state => state.location);
  const mapRef = useRef<HTMLElement | null | any>(null);

  // 지도 렌더링
  const mapRendering = async () => {
    if (!LOADING_MY_LOCATION) {
      mapRef.current = await new naver.maps.Map('map', {
        center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
        scaleControl: false,
      });
    }
  };

  // 현재 위치 주소 검색
  const getCurrentAddress = (latlng: any) => {
    naver.maps.Service.reverseGeocode(
      {
        coords: latlng,
        orders: [naver.maps.Service.OrderType.ADDR, naver.maps.Service.OrderType.ROAD_ADDR].join(','),
      },
      function (status: any, response: any) {
        if (status === naver.maps.Service.Status.ERROR) {
          return console.log('something wrong');
        }
        let currentAddress = response.v2.address.jibunAddress;
        const firstSpace = currentAddress.indexOf(' ') + 1;
        const secondSpace = currentAddress.indexOf(' ', firstSpace);
        currentAddress = currentAddress.substr(firstSpace, secondSpace);
        dispatch(SET_CURRENT_ADDRESS(currentAddress));
      },
    );
  };

  // 현재 위치(위경도) 가져오기
  const bringMyLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const _latitude = position.coords.latitude;
        const _longitude = position.coords.longitude;
        dispatch(
          SET_MY_LOCATION({
            latitude: _latitude,
            longitude: _longitude,
          }),
        );
        dispatch(LOADING_MY_LOCATION_SUCCESS());
        getCurrentAddress(mapRef.current?.center);
      });
    } else {
      alert('현재 위치를 알 수 없어 기본 위치로 지정합니다\n가급적이면 위치 정보 수집을 동의해주세요');
      dispatch(LOADING_MY_LOCATION_SUCCESS());
      getCurrentAddress(mapRef.current?.center);
    }
  };

  useEffect(() => {
    bringMyLocation();
  });

  return {
    myLocation,
    mapRendering,
    bringMyLocation,
  };
};

export default useMap;

import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { currentAddressState, currentLocationState, loadingBringMyLocationState } from '@/recoil/atoms/location';

const useLocation = () => {
  const [currentLocation, setCurrentLocation] = useRecoilState(currentLocationState);
  const setLoadingBringMyLocation = useSetRecoilState(loadingBringMyLocationState);
  const setCurrentAddress = useSetRecoilState(currentAddressState);

  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setCurrentLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        setLoadingBringMyLocation(false);
      });
    } //
    else {
      alert('현재 위치를 알 수 없어 기본 위치로 지정합니다\n가급적이면 위치 정보 수집을 동의해주세요');
      setCurrentLocation({ latitude: 37.3585704, longitude: 127.105399 });
      setLoadingBringMyLocation(false);
    }
  };

  const getCurrentAddress = () => {
    naver.maps.Service.reverseGeocode(
      {
        coords: new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        orders: [naver.maps.Service.OrderType.ADDR, naver.maps.Service.OrderType.ROAD_ADDR].join(','),
      },
      function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          return console.log('something wrong');
        }
        const currentAddress = response.v2.address.jibunAddress
          .split(' ')
          .filter(str => str.slice(-1) === '구' || str.slice(-1) === '동');
        return setCurrentAddress(currentAddress.join(' '));
      },
    );
  };

  return {
    getCurrentLocation,
    getCurrentAddress,
  };
};

export default useLocation;

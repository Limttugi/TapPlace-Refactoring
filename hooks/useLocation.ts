import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { bringMyLocationAtom, searchLocationAtom, setSearchLocationFlagAtom } from '@/recoil/atoms/location';
import { NaverContextValue } from '@/context/naver';

const useLocation = () => {
  const map = NaverContextValue.map;
  const [bringMyLocationState, setBringMyLocationState] = useRecoilState(bringMyLocationAtom);
  const setSearchLocation = useSetRecoilState(searchLocationAtom);
  const setSearchLocationFlag = useSetRecoilState(setSearchLocationFlagAtom);

  // 처음 위치 가져오기
  const handleSetCurrentLocation = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setBringMyLocationState({
          isBringMyLocation: true,
          currentLocation: { latitude, longitude },
          currentAddress: '',
        });
        setSearchLocation({ latitude, longitude });
      });
    } else {
      setBringMyLocationState({
        isBringMyLocation: true,
        currentLocation: {
          latitude: 37.3585704,
          longitude: 127.105399,
        },
        currentAddress: '',
      });
      setSearchLocation({ latitude: 37.3585704, longitude: 127.105399 });
    }
  }, [setBringMyLocationState, setSearchLocation]);

  // 현재 좌표에 따른 주소 저장
  const setCurrentAddress = useCallback(() => {
    const { latitude, longitude } = bringMyLocationState.currentLocation;

    naver.maps.Service.reverseGeocode(
      {
        coords: new naver.maps.LatLng(latitude, longitude),
        orders: [naver.maps.Service.OrderType.ADDR, naver.maps.Service.OrderType.ROAD_ADDR].join(','),
      },
      function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          return console.log('something wrong');
        }

        const currentAddress = response.v2.address.jibunAddress
          .split(' ')
          .filter(str => str.slice(-1) === '구' || str.slice(-1) === '동')
          .join(' ');
        setBringMyLocationState(prevState => ({ ...prevState, currentAddress }));
      },
    );
  }, [bringMyLocationState.currentLocation, setBringMyLocationState]);

  const handleSetSearchLocation = useCallback(() => {
    if (map) {
      const { x, y } = map.getCenter();
      setSearchLocation({ latitude: y, longitude: x });
      setSearchLocationFlag(false);
    }
  }, [map, setSearchLocation, setSearchLocationFlag]);

  return { handleSetCurrentLocation, setCurrentAddress, handleSetSearchLocation };
};

export default useLocation;

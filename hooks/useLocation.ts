import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { bringMyLocationAtom, searchLocationAtom } from '@/recoil/atoms/location';
import { getCurrentLocation } from '@/utils/getCurrentLocation';

const useLocation = () => {
  const [bringMyLocationState, setBringMyLocationState] = useRecoilState(bringMyLocationAtom);
  const setSearchLocation = useSetRecoilState(searchLocationAtom);

  // 처음 위치 관련 state 정하기 - 현재 좌표, 좌표를 가져왔는지
  const setCurrentLocationState = useCallback(async () => {
    try {
      const position = await getCurrentLocation();
      setBringMyLocationState(prev => ({
        ...prev,
        isBringMyLocation: true,
        currentLocation: position,
      }));
      setSearchLocation(position);
    } catch (err) {
      console.error(err);
      setBringMyLocationState(prev => ({
        ...prev,
        isBringMyLocation: true,
        currentLocation: {
          latitude: 37.3585704,
          longitude: 127.105399,
        },
      }));
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

  // 가맹점 가져와야함

  return { setCurrentLocationState, setCurrentAddress };
};

export default useLocation;

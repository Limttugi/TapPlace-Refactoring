import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { LOADING_MY_LOCATION_SUCCESS, SET_CURRENT_ADDRESS, SET_CURRENT_LOCATION } from '@/redux/slices/location';
import { useCallback } from 'react';

type latlngT = string | naver.maps.Coord | naver.maps.CoordLiteral;

const useLocation = () => {
  const dispatch = useAppDispatch();
  const { currentLocation, currentAddress, LOADING_MY_LOCATION } = useAppSelector(state => state.location);

  // 최초 위치(위경도) 가져오기
  const handleGetFirstLocation = useCallback(() => {
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
        if (!LOADING_MY_LOCATION)
          handleGetCurrentAddress(new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude));
      });
    } else {
      alert('현재 위치를 알 수 없어 기본 위치로 지정합니다\n가급적이면 위치 정보 수집을 동의해주세요');
      if (LOADING_MY_LOCATION) dispatch(LOADING_MY_LOCATION_SUCCESS());
      if (!LOADING_MY_LOCATION)
        handleGetCurrentAddress(new naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude));
    }
  }, []);

  // 현재 위치 주소 검색
  const handleGetCurrentAddress = (latlng: latlngT) => {
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

  return {
    handleGetFirstLocation,
    handleGetCurrentAddress,
  };
};

export default useLocation;

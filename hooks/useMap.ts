import { useAppSelector } from '@/redux/hooks';
import { LOADING_MY_LOCATION_SUCCESS, SET_MY_LOCATION } from '@/redux/slices/location';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

const useMap = () => {
  const dispatch = useDispatch();
  const { myLocation, LOADING_MY_LOCATION } = useAppSelector(state => state.location);
  const mapRef = useRef<HTMLElement | null | any>(null);

  const mapRendering = async () => {
    if (!LOADING_MY_LOCATION) {
      mapRef.current = await new naver.maps.Map('map', {
        center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
        scaleControl: false,
      });
    }
  };

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
      });
    } else {
      alert('현재 위치를 알 수 없어 기본 위치로 지정합니다\n가급적이면 위치 정보 수집을 동의해주세요');
    }
  };

  return {
    myLocation,
    mapRendering,
    bringMyLocation,
  };
};

export default useMap;

import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { currentLocationState, loadingBringMyLocationState } from '@/recoil/atoms/location';

const useLocation = () => {
  const setCurrentLocation = useSetRecoilState(currentLocationState);
  const setLoadingBringMyLocation = useSetRecoilState(loadingBringMyLocationState);

  const getCurrentPosition = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setCurrentLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        setLoadingBringMyLocation(true);
      });
    } //
    else {
      alert('현재 위치를 알 수 없어 기본 위치로 지정합니다\n가급적이면 위치 정보 수집을 동의해주세요');
      setCurrentLocation({ latitude: 37.3585704, longitude: 127.105399 });
      setLoadingBringMyLocation(true);
    }
  }, [setCurrentLocation, setLoadingBringMyLocation]);

  return {
    getCurrentPosition,
  };
};

export default useLocation;

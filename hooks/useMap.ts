import { useEffect, useRef, useState } from 'react';

const useMap = () => {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number } | string>('');

  const bringMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다\n가급적이면 위치 정보 수집을 동의해주세요');
      setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
    }
  };

  const renderMap = () => {
    if (typeof myLocation !== 'string') {
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });
    }
  };

  useEffect(() => {
    bringMyLocation();
  });

  useEffect(() => {
    renderMap();
  });

  return {
    myLocation,
  };
};

export default useMap;

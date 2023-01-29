import s from './Map.module.scss';

import useMap from '@/hooks/useMap';
import { useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import useLocation from '@/hooks/useLocation';

const Map = () => {
  const { mapRendering, handleGetStore } = useMap();
  const { bringMyLocation } = useLocation();
  const { currentLocation, LOADING_MY_LOCATION } = useAppSelector(state => state.location);

  useEffect(() => {
    bringMyLocation();
  }, [bringMyLocation]);

  useEffect(() => {
    mapRendering();
  }, [LOADING_MY_LOCATION, mapRendering]);

  return <div id="map" className={s.map}></div>;
};

export default Map;

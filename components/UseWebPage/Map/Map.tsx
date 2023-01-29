import s from './Map.module.scss';

import useMap from '@/hooks/useMap';
import { useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

const Map = () => {
  const { bringMyLocation, mapRendering, handleGetStore } = useMap();
  const { currentLocation, LOADING_MY_LOCATION } = useAppSelector(state => state.location);

  useEffect(() => {
    bringMyLocation();
  }, [bringMyLocation]);

  useEffect(() => {
    mapRendering();
  }, [LOADING_MY_LOCATION, mapRendering]);

  useEffect(() => {
    handleGetStore();
  }, [currentLocation, handleGetStore]);

  return <div id="map" className={s.map}></div>;
};

export default Map;

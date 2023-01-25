import s from './Map.module.scss';

import useMap from '@/hooks/useMap';
import { useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

const Map = () => {
  const { mapRendering } = useMap();
  const { LOADING_MY_LOCATION } = useAppSelector(state => state.location);

  useEffect(() => {
    mapRendering();
  }, [LOADING_MY_LOCATION, mapRendering]);

  return <div id="map" className={s.map}></div>;
};

export default Map;

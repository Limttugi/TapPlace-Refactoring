import s from './Map.module.scss';

import useMap from '@/hooks/useMap';
import { useAppSelector } from '@/redux/hooks';
import React, { useEffect } from 'react';
import useLocation from '@/hooks/useLocation';

const Map = () => {
  const { mapRendering } = useMap();
  const { handleGetFirstLocation } = useLocation();
  const { LOADING_MY_LOCATION } = useAppSelector(state => state.location);

  useEffect(() => {
    handleGetFirstLocation();
  }, [handleGetFirstLocation]);

  useEffect(() => {
    if (!LOADING_MY_LOCATION) mapRendering();
  }, [LOADING_MY_LOCATION, mapRendering]);

  return <div id="map" className={s.map}></div>;
};

export default React.memo(Map);

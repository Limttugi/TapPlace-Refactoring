import React, { useEffect } from 'react';

import s from './Map.module.scss';

import useMap from '@/hooks/useMap';

const Map = () => {
  const { mapRendering, drawCircleMyRadius } = useMap();

  useEffect(() => {
    mapRendering();
  }, [mapRendering]);

  useEffect(() => {
    drawCircleMyRadius();
  }, [drawCircleMyRadius]);

  return (
    <>
      <div id='map' className={s.map} />
    </>
  );
};

export default Map;

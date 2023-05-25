import React, { useEffect } from 'react';

import s from './Map.module.scss';

import useMap from '@/hooks/useMap';

const Map = () => {
  const { mapRendering, drawCircleMyRadius, drawMerchantMarker } = useMap();

  useEffect(() => {
    mapRendering();
  }, [mapRendering]);

  useEffect(() => {
    drawCircleMyRadius();
  }, [drawCircleMyRadius]);

  return (
    <section className={s.mapContainer}>
      <h2 className='a11y-hidden'>네이버 지도</h2>
      <div id='map' className={s.map} />
    </section>
  );
};

export default Map;

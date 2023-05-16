import React, { useEffect } from 'react';

import s from './Map.module.scss';

import useMap from '@/hooks/useMap';
import { useRecoilValue } from 'recoil';
import { merchantListState } from '@/recoil/atoms/merchant';

const Map = () => {
  const merchantList = useRecoilValue(merchantListState);
  const { mapElement, mapRendering, drawCircleMyRadius, drawMerchantMarker } = useMap();

  useEffect(() => {
    mapRendering();
  }, [mapRendering]);

  useEffect(() => {
    drawCircleMyRadius();
  }, [drawCircleMyRadius]);

  useEffect(() => {
    drawMerchantMarker(merchantList);
  }, [drawMerchantMarker, merchantList]);

  return (
    <>
      <div id='map' className={s.map} />
    </>
  );
};

export default Map;

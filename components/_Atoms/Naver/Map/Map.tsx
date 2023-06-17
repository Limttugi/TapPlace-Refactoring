import { useEffect } from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

import s from './Map.module.scss';

import useMap from '@/hooks/useMap';
import { setSearchLocationFlagAtom } from '@/recoil/atoms/location';
import searchCriteriaImageSrc from '@/img/locationPin.webp';
import useLocation from '@/hooks/useLocation';

const Map = () => {
  const { mapRendering, drawCircleMyRadius, drawMerchantMarker } = useMap();
  const showSetSearchLocationFlag = useRecoilValue(setSearchLocationFlagAtom);
  const handleSetSearchLocation = useLocation().handleSetSearchLocation;

  useEffect(() => {
    mapRendering();
  }, [mapRendering]);

  useEffect(() => {
    drawCircleMyRadius();
  }, [drawCircleMyRadius]);

  useEffect(() => {
    drawMerchantMarker();
  }, [drawMerchantMarker]);

  return (
    <section className={s.mapContainer}>
      <h2 className='a11y-hidden'>네이버 지도</h2>
      <div id='map' className={s.map} />
      {showSetSearchLocationFlag && (
        <>
          <Image src={searchCriteriaImageSrc} alt='탐색기준' />
          <button type='button' onClick={handleSetSearchLocation}>
            현 위치에서 가맹점 재탐색
          </button>
        </>
      )}
    </section>
  );
};

export default Map;

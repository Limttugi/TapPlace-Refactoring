import { useEffect, useLayoutEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import s from './useweb.module.scss';

import Map from '@/components/_Atoms/Naver/Map';
import SearchMerchantInput from '@/components/_Atoms/Input/SearchMerchant/SearchMerchant';
import LoadingSpinner from '@/components/_Atoms/LoadingSpinner/LoadingSpinner';
import CurrentLocationAddressText from '@/components/_Atoms/Text/CurrentLocationAddress/CurrentLocationAddress';
import ShowFilterMenuButtonContainer from '@/components/_Molecules/Container/ShowFilterMenuButton/ShowFilterMenuButton';
import MerchantListContainer from '@/components/_Molecules/Container/MerchantList/MerchantList';
import UseWebTemplate from '@/components/_Templates/UseWeb/UseWeb';
import { bringMyLocationAtom } from '@/recoil/atoms/location';
import useResize from '@/hooks/useResize';
import useLocation from '@/hooks/useLocation';
import { markerStateAtom } from '@/recoil/atoms/marker';
import MerchantDetailModal from '@/components/_Organisms/Modal/MarkerDetail/MerchantDetail';

const UseWeb = () => {
  useResize();
  const setCurrentLocationState = useLocation().setCurrentLocationState;
  const bringMyLocation = useRecoilValue(bringMyLocationAtom);
  const showMarkerDetail = useRecoilValue(markerStateAtom).showMarkerDetail;

  useLayoutEffect(() => {
    setCurrentLocationState();
  }, [setCurrentLocationState]);

  return (
    <UseWebTemplate>
      <>
        {!bringMyLocation.isBringMyLocation ? (
          <LoadingSpinner />
        ) : (
          <>
            <section className={s.sideMenuSection}>
              <SearchMerchantInput />
              <CurrentLocationAddressText />
              <ShowFilterMenuButtonContainer />
              <MerchantListContainer />
            </section>
            <Map />
            {showMarkerDetail && <MerchantDetailModal />}
          </>
        )}
      </>
    </UseWebTemplate>
  );
};

export default UseWeb;

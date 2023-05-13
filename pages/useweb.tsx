import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import s from './useweb.module.scss';

import Map from '@/components/_Atoms/Naver/Map';
import SearchMerchantInput from '@/components/_Atoms/Input/SearchMerchant/SearchMerchant';
import LoadingSpinner from '@/components/_Atoms/LoadingSpinner/LoadingSpinner';
import CurrentLocationAddressText from '@/components/_Atoms/Text/CurrentLocationAddress/CurrentLocationAddress';
import ShowFilterMenuButtonContainer from '@/components/_Molecules/Container/ShowFilterMenuButton/ShowFilterMenuButton';
import MerchantListContainer from '@/components/_Molecules/Container/MerchantList/MerchantList';
import UseWebTemplate from '@/components/_Templates/UseWeb/UseWeb';
import { loadingBringMyLocationState } from '@/recoil/atoms/location';
import useResize from '@/hooks/useResize';
import useLocation from '@/hooks/useLocation';

const UseWeb = () => {
  useResize();
  const getCurrentLocation = useLocation().getCurrentLocation;

  const isBringMyLocation = useRecoilValue(loadingBringMyLocationState);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return (
    <UseWebTemplate>
      <>
        {isBringMyLocation ? (
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
          </>
        )}
      </>
    </UseWebTemplate>
  );
};

export default UseWeb;

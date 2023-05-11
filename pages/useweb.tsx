import { useRecoilValue } from 'recoil';

import s from './useweb.module.scss';

import UseWebTemplate from '@/components/_Templates/UseWeb/UseWeb';
import LoadingSpinner from '@/components/_Atoms/LoadingSpinner/LoadingSpinner';
import SearchMerchantInput from '@/components/_Atoms/Input/SearchMerchant/SearchMerchant';
import Map from '@/components/_Atoms/Naver/Map';
import useResize from '@/hooks/useResize';
import { loadingBringMyLocationState } from '@/recoil/atoms/location';
import CurrentLocationAddressText from '@/components/_Atoms/Text/CurrentLocationAddress/CurrentLocationAddress';
import ShowFilterMenuButton from '@/components/_Atoms/Button/ShowFilterMenu/ShowFilterMenu';
import ShowFilterMenuButtonContainer from '@/components/_Molecules/Container/ShowFilterMenuButton/ShowFilterMenuButton';
import PaymentImage from '@/components/_Atoms/Image/Payment/Payment';
import MerchantList from '@/components/_Atoms/List/Merchant/Merchant';
import MerchantListContainer from '@/components/_Molecules/Container/MerchantList/MerchantList';
import { useEffect } from 'react';

const UseWeb = () => {
  useResize();
  const loadingBringMyLocation = useRecoilValue(loadingBringMyLocationState);

  return (
    <UseWebTemplate>
      {loadingBringMyLocation ? (
        <section className={s.sideMenuSection}>
          <SearchMerchantInput />
          <CurrentLocationAddressText />
          <ShowFilterMenuButtonContainer />
          <MerchantListContainer />
        </section>
      ) : (
        <LoadingSpinner />
      )}
      <Map />
    </UseWebTemplate>
  );
};

export default UseWeb;

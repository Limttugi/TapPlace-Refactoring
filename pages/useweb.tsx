import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import s from './useweb.module.scss';

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
import { NaverContext, NaverContextValue } from '@/context/naver';
import Map from '@/components/_Atoms/Naver/Map/Map';
import useMerchant from '@/hooks/useMerchant';

const UseWeb = () => {
  useResize();
  const handleSetCurrentLocation = useLocation().handleSetCurrentLocation;
  const handleGetMerchantList = useMerchant().handleGetMerchantList;
  const isBringMyLocation = useRecoilValue(bringMyLocationAtom).isBringMyLocation;
  const showMarkerDetail = useRecoilValue(markerStateAtom).showMarkerDetail;

  // 현재 위치 가져오기
  useEffect(() => {
    handleSetCurrentLocation();
  }, [handleSetCurrentLocation]);

  // 가맹점 리스트 가져오기
  useEffect(() => {
    isBringMyLocation && handleGetMerchantList();
  }, [isBringMyLocation, handleGetMerchantList]);

  return (
    <UseWebTemplate>
      {!isBringMyLocation && <LoadingSpinner type='location' />}
      {isBringMyLocation && (
        <NaverContext.Provider value={NaverContextValue}>
          <section className={s.sideMenuSection}>
            <SearchMerchantInput />
            <CurrentLocationAddressText />
            <ShowFilterMenuButtonContainer />
            <MerchantListContainer />
          </section>
          <Map />
          {showMarkerDetail && <MerchantDetailModal />}
        </NaverContext.Provider>
      )}
    </UseWebTemplate>
  );
};

export default UseWeb;

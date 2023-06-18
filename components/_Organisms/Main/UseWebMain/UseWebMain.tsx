import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import s from './UseWebMain.module.scss';

import SearchMerchantInput from '@/components/_Atoms/Input/SearchMerchant/SearchMerchant';
import CurrentLocationAddressText from '@/components/_Atoms/Text/CurrentLocationAddress/CurrentLocationAddress';
import ShowFilterMenuButtonContainer from '@/components/_Molecules/Container/ShowFilterMenuButton/ShowFilterMenuButton';
import MerchantDetailModal from '../../Modal/MarkerDetail/MerchantDetail';
import AppDownloadModal from '../../Modal/AppDownload/AppDownload';
import Map from '@/components/_Atoms/Naver/Map/Map';
import { showAppDownloadModalAtom } from '@/recoil/atoms/localstorage';
import { markerStateAtom } from '@/recoil/atoms/marker';
import { breakpointState } from '@/recoil/atoms/breakpoint';
import ShowMapOrMerchantListButton from '@/components/_Atoms/Button/ShowMapOrMerchantList/ShowMapOrMerchantList';
import MerchantListContainer from '@/components/_Molecules/Container/MerchantList/MerchantList';
import FilteringMenuModal from '../../Modal/FilteringMenu/FilteringMenu';
import { showMapOrMerchantListAtom } from '@/recoil/atoms/showMapOrList';
import { isShowFilteringMenuAtom } from '@/recoil/atoms/filter';

const UseWebMain = () => {
  const BREAKPOINT = useRecoilValue(breakpointState);
  const showAppDownloadModal = useRecoilValue(showAppDownloadModalAtom);
  const showMarkerDetail = useRecoilValue(markerStateAtom).showMarkerDetail;
  const [showMapOrMerchantList, setShowMapOrMerchantList] = useRecoilState(showMapOrMerchantListAtom);

  return (
    <>
      {BREAKPOINT === 'DESKTOP' && (
        <>
          <section className={s.sideMenuSection}>
            <SearchMerchantInput />
            <CurrentLocationAddressText />
            <ShowFilterMenuButtonContainer />
            <MerchantListContainer />
            <FilteringMenuModal />
          </section>
          <Map />
          {showMarkerDetail && <MerchantDetailModal />}
          {showAppDownloadModal && <AppDownloadModal />}
        </>
      )}

      {BREAKPOINT !== 'DESKTOP' && (
        <>
          <section className={s.sideMenuSection}>
            <SearchMerchantInput />
            <CurrentLocationAddressText />
            <ShowFilterMenuButtonContainer />
            {showMapOrMerchantList == 'list' && <MerchantListContainer />}
            <FilteringMenuModal />
          </section>
          <Map />
          {showMarkerDetail && <MerchantDetailModal />}
          {showAppDownloadModal && <AppDownloadModal />}
          {showMapOrMerchantList === 'map' ? (
            <ShowMapOrMerchantListButton onClickEvent={() => setShowMapOrMerchantList('list')}>
              목록보기
            </ShowMapOrMerchantListButton>
          ) : (
            <ShowMapOrMerchantListButton onClickEvent={() => setShowMapOrMerchantList('map')}>
              지도보기
            </ShowMapOrMerchantListButton>
          )}
        </>
      )}
    </>
  );
};

export default UseWebMain;

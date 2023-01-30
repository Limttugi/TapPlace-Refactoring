import s from './useweb.module.scss';

import LoadingSpinner from '@/components/UseWebPage/LoadingSpinner/LoadingSpinner';
import Map from '@/components/UseWebPage/Map/Map';
import SideMenu from '@/components/UseWebPage/SideMenu/SideMenu';
import { useAppSelector } from '@/redux/hooks';
import StoreContainer from '@/components/UseWebPage/Store/StoreContainer';
import FilterButton from '@/components/UseWebPage/Filter/FilterButton';
import FilterFlagButton from '@/components/UseWebPage/Filter/FilterFlagButton/FilterFlagButton';
import StoreDetail from '@/components/UseWebPage/Store/StoreDetail/StoreDetail';

const Useweb = () => {
  const { viewType } = useAppSelector(state => state.common);
  const { LOADING_MY_LOCATION } = useAppSelector(state => state.location);
  const { showListFlag } = useAppSelector(state => state.showMenu);
  const { storeDetailInfo } = useAppSelector(state => state.store);

  return (
    <>
      {LOADING_MY_LOCATION && <LoadingSpinner />}
      <div className={s.container}>
        <SideMenu />
        <Map />
      </div>
      {viewType === 'TABLET' && showListFlag && <StoreContainer />}
      {viewType === 'MOBILE' && showListFlag && (
        <>
          <FilterButton />
          <StoreContainer />
        </>
      )}
      {viewType !== 'DESKTOP' && <FilterFlagButton />}
      {storeDetailInfo && !showListFlag && <StoreDetail />}
    </>
  );
};

export default Useweb;

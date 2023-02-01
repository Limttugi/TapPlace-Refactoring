import s from './useweb.module.scss';

import LoadingSpinner from '@/components/UseWebPage/LoadingSpinner/LoadingSpinner';
import Map from '@/components/UseWebPage/Map/Map';
import SideMenu from '@/components/UseWebPage/Section/SideMenuSection/SideMenu';
import { useAppSelector } from '@/redux/hooks';
import StoreContainer from '@/components/UseWebPage/Section/SideMenuSection/StoreContainer/StoreContainer';
import FilterButton from '@/components/UseWebPage/Button/FilterButton/FilterButton';
import DisplayModeButton from '@/components/UseWebPage/Button/DisplayModeButton/DisplayModeButton';

const Useweb = () => {
  const { viewType } = useAppSelector(state => state.common);
  const { LOADING_MY_LOCATION } = useAppSelector(state => state.location);
  const { showListFlag } = useAppSelector(state => state.showMenu);

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
      {viewType !== 'DESKTOP' && <DisplayModeButton />}
    </>
  );
};

export default Useweb;

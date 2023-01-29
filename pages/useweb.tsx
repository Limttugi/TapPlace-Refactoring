import s from './useweb.module.scss';

import LoadingSpinner from '@/components/UseWebPage/LoadingSpinner/LoadingSpinner';
import Map from '@/components/UseWebPage/Map/Map';
import SideMenu from '@/components/UseWebPage/SideMenu/SideMenu';
import { useAppSelector } from '@/redux/hooks';
import StoreContainer from '@/components/UseWebPage/Store/StoreContainer';
import FilterButton from '@/components/UseWebPage/Filter/FilterButton';

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
      {viewType !== 'DESKTOP' && showListFlag && (
        <>
          <FilterButton />
          <StoreContainer />
        </>
      )}
    </>
  );
};

export default Useweb;

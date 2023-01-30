import s from './SideMenu.module.scss';

import { useAppSelector } from '@/redux/hooks';
import StoreSearch from '../SearchStore.tsx/StoreSearch';
import CurrentAddress from '../CurrentAddress/CurrentAddress';
import FilterButton from '../Filter/FilterButton';
import StoreContainer from '../Store/StoreContainer';
import FilterFlagButton from '../Filter/FilterFlagButton/FilterFlagButton';
import FilteringMenu from '../Filter/FilterMenu/FilteringMenu';
import StoreDetail from '../Store/StoreDetail/StoreDetail';

const SideMenu = () => {
  const { viewType } = useAppSelector(state => state.common);
  const { showFilteringFlag, showListFlag } = useAppSelector(state => state.showMenu);
  const { storeDetailInfo } = useAppSelector(state => state.store);

  return (
    <>
      {viewType === 'DESKTOP' && (
        <>
          <section className={s.container}>
            <StoreSearch />
            <CurrentAddress />
            <FilterButton />
            <StoreContainer />
          </section>
        </>
      )}
      {viewType === 'TABLET' && !storeDetailInfo && (
        <>
          <section className={s.container}>
            <StoreSearch />
            <div className={s.AddressFilterContainer}>
              <CurrentAddress />
              <FilterButton />
            </div>
          </section>
        </>
      )}
      {viewType === 'MOBILE' && !storeDetailInfo && (
        <section className={s.container}>
          <StoreSearch />
          <CurrentAddress />
        </section>
      )}
      {showFilteringFlag && <FilteringMenu />}
    </>
  );
};

export default SideMenu;

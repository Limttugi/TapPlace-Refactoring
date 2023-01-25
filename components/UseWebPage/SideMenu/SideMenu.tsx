import s from './SideMenu.module.scss';

import { useAppSelector } from '@/redux/hooks';
import StoreSearch from '../SearchStore.tsx/StoreSearch';
import CurrentAddress from '../CurrentAddress/CurrentAddress';
import FilterButton from '../Filter/FilterButton';
import StoreContainer from '../Store/StoreContainer';
import FilterFlagButton from '../Filter/FilterFlagButton/FilterFlagButton';
import FilteringMenu from '../Filter/FilterMenu/FilteringMenu';

const SideMenu = () => {
  const { viewType } = useAppSelector(state => state.common);
  const { showFilteringFlag } = useAppSelector(state => state.sideMenu);

  return (
    <>
      <section className={s.container}>
        <StoreSearch />
        {viewType === 'DESKTOP' && (
          <>
            <CurrentAddress />
            <FilterButton />
            <StoreContainer />
          </>
        )}
        {viewType === 'TABLET' && (
          <div className={s.AddressFilterContainer}>
            <CurrentAddress />
            <FilterButton />
          </div>
        )}
        {viewType === 'MOBILE' && <CurrentAddress />}
        {showFilteringFlag && <FilteringMenu />}
      </section>
      {viewType !== 'DESKTOP' && <FilterFlagButton />}
    </>
  );
};

export default SideMenu;

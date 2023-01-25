import s from './SideMenu.module.scss';

import { useAppSelector } from '@/redux/hooks';
import StoreSearch from '../SearchStore.tsx/StoreSearch';
import CurrentAddress from '../CurrentAddress/CurrentAddress';
import FilterButton from '../Filter/FilterButton';
import StoreContainer from '../Store/StoreContainer';

const SideMenu = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <section className={s.container}>
      <StoreSearch />
      {viewType === 'DESKTOP' && (
        <>
          <CurrentAddress />
          <FilterButton />
        </>
      )}
      {viewType === 'TABLET' && (
        <div className={s.AddressFilterContainer}>
          <CurrentAddress />
          <FilterButton />
        </div>
      )}
      {viewType === 'MOBILE' && <CurrentAddress />}
      <StoreContainer />
    </section>
  );
};

export default SideMenu;

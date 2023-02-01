import s from './SideMenuSection.module.scss';

import { useAppSelector } from '@/redux/hooks';
import StoreSearch from '../../Input/SearchStore/StoreSearch';
import CurrentAddress from './CurrentAddress/CurrentAddress';
import FilterButton from '../../Button/FilterButton/FilterButton';
import StoreContainer from './StoreContainer/StoreContainer';
import StoreDetail from '../StoreDetailSection/StoreDetail';
import FilterSection from '../FilterSection/FilterSection';

const SideMenuSection = () => {
  const { viewType } = useAppSelector(state => state.common);
  const { showListFlag } = useAppSelector(state => state.showMenu);
  const { storeDetailInfo } = useAppSelector(state => state.store);

  return (
    <>
      {viewType === 'DESKTOP' && (
        <section className={s.container}>
          <StoreSearch />
          <CurrentAddress />
          <FilterButton />
          <StoreContainer />
        </section>
      )}
      {viewType === 'TABLET' && !storeDetailInfo && (
        <section className={s.container}>
          <StoreSearch />
          <div className={s.AddressFilterContainer}>
            <CurrentAddress />
            <FilterButton />
          </div>
        </section>
      )}
      {viewType === 'MOBILE' && !storeDetailInfo && (
        <section className={s.container}>
          <StoreSearch />
          <CurrentAddress />
        </section>
      )}
      <FilterSection />
      {storeDetailInfo && !showListFlag && <StoreDetail />}
    </>
  );
};

export default SideMenuSection;

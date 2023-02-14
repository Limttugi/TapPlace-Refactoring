import s from './SideMenuSection.module.scss';

import { useAppSelector } from '@/redux/hooks';
import CurrentAddress from './CurrentAddress/CurrentAddress';
import FilterButton from '../../Button/FilterButton/FilterButton';
import StoreContainer from './StoreContainer/StoreContainer';
import StoreDetail from '../StoreDetailSection/StoreDetail';
import FilterSection from '../FilterSection/FilterSection';
import SearchStore from '../../Input/SearchStore/SearchStore';

const SideMenuSection = () => {
  const { viewType } = useAppSelector(state => state.common);
  const { showListFlag } = useAppSelector(state => state.showMenu);
  const { storeDetailInfo } = useAppSelector(state => state.store);

  return (
    <>
      {viewType === 'DESKTOP' && (
        <section className={s.container}>
          <SearchStore />
          <CurrentAddress />
          <FilterButton />
          <StoreContainer />
        </section>
      )}
      {viewType === 'TABLET' && !storeDetailInfo && (
        <section className={s.container}>
          <SearchStore />
          <div className={s.AddressFilterContainer}>
            <CurrentAddress />
            <FilterButton />
          </div>
        </section>
      )}
      {viewType === 'MOBILE' && !storeDetailInfo && (
        <section className={s.container}>
          <SearchStore />
          <CurrentAddress />
        </section>
      )}
      <FilterSection />
      {storeDetailInfo && !showListFlag && <StoreDetail />}
    </>
  );
};

export default SideMenuSection;

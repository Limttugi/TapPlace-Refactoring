import s from './SideMenu.module.scss';

import { useAppSelector } from '@/redux/hooks';
import StoreSearch from '../SearchStore.tsx/StoreSearch';
import CurrentAddress from '../CurrentAddress/CurrentAddress';

const SideMenu = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <section className={s.container}>
      <StoreSearch />
      {viewType === 'DESKTOP' && <CurrentAddress />}
      {viewType === 'TABLET' && <CurrentAddress />}
      {viewType === 'MOBILE' && <CurrentAddress />}
    </section>
  );
};

export default SideMenu;

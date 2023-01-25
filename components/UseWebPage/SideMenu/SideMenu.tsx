import StoreSearch from '../Input/SearchStore.tsx/StoreSearch';
import s from './SideMenu.module.scss';

const SideMenu = () => {
  return (
    <section className={s.container}>
      <StoreSearch />
    </section>
  );
};

export default SideMenu;

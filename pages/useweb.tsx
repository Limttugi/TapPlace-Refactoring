import s from './useweb.module.scss';

import LoadingSpinner from '@/components/UseWebPage/LoadingSpinner/LoadingSpinner';
import Map from '@/components/UseWebPage/Map/Map';
import SideMenu from '@/components/UseWebPage/SideMenu/SideMenu';
import { useAppSelector } from '@/redux/hooks';

const Useweb = () => {
  const { LOADING_MY_LOCATION } = useAppSelector(state => state.location);

  return (
    <>
      {LOADING_MY_LOCATION && <LoadingSpinner />}
      <div className={s.container}>
        <SideMenu />
        <Map />
      </div>
    </>
  );
};

export default Useweb;

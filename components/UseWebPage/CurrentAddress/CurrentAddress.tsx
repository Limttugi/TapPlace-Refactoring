import s from './CurrentAddress.module.scss';

import { useAppSelector } from '@/redux/hooks';

const CurrentAddress = () => {
  const { showListFlag } = useAppSelector(state => state.showMenu);
  const { currentAddress } = useAppSelector(state => state.location);

  return (
    <div id={showListFlag ? s.showList : ''} className={s.currentAddress}>
      {currentAddress + ' 주변 2km'}
    </div>
  );
};

export default CurrentAddress;

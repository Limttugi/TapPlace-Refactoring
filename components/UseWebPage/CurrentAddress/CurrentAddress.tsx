import s from './CurrentAddress.module.scss';

import { useAppSelector } from '@/redux/hooks';

const CurrentAddress = () => {
  const { currentAddress } = useAppSelector(state => state.location);

  return <div className={s.currentAddress}>{currentAddress + ' 주변 2km'}</div>;
};

export default CurrentAddress;

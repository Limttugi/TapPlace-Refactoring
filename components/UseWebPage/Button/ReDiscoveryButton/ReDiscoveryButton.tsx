import Image from 'next/image';

import s from './ReDiscoveryButton.module.scss';
import reDiscovery from '@/img/reDiscovery.webp';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { SET_CURRENT_LOCATION, SET_DRAGGING_FLAG } from '@/redux/slices/location';

const ReDiscoveryButton = () => {
  const dispatch = useAppDispatch();
  const { dragCenter } = useAppSelector(state => state.location);

  const handleReDiscoveryStore = () => {
    dispatch(SET_CURRENT_LOCATION({ latitude: dragCenter.latitude, longitude: dragCenter.longitude }));
  };

  return (
    <button className={s.button} onClick={handleReDiscoveryStore}>
      <Image className={s.image} src={reDiscovery} alt="reDiscovery" />현 위치에서 가맹점 재탐색
    </button>
  );
};

export default ReDiscoveryButton;

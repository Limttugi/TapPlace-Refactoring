import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import s from './CurrentLocationAddress.module.scss';

import { bringMyLocationAtom } from '@/recoil/atoms/location';
import useLocation from '@/hooks/useLocation';

const CurrentLocationAddressText = () => {
  const currentAddress = useRecoilValue(bringMyLocationAtom).currentAddress;
  const setCurrentAddress = useLocation().setCurrentAddress;

  useEffect(() => {
    setCurrentAddress();
  }, [setCurrentAddress]);

  return <div className={s.text}>{currentAddress} 주변 1km</div>;
};

export default CurrentLocationAddressText;

import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import s from './CurrentLocationAddress.module.scss';

import { currentAddressState, currentLocationState, loadingBringMyLocationState } from '@/recoil/atoms/location';
import useLocation from '@/hooks/useLocation';

const CurrentLocationAddressText = () => {
  const currentLocation = useRecoilValue(currentLocationState);
  const currentAddress = useRecoilValue(currentAddressState);
  const loadingBringMyLocation = useRecoilValue(loadingBringMyLocationState);
  const getCurrentAddress = useLocation().getCurrentAddress;

  useEffect(() => {
    !loadingBringMyLocation && getCurrentAddress();
  }, [currentLocation, loadingBringMyLocation, getCurrentAddress]);

  return <div className={s.text}>{currentAddress} 주변 1km</div>;
};

export default CurrentLocationAddressText;

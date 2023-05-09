import { useRecoilValue } from 'recoil';

import s from './useweb.module.scss';

import UseWebTemplate from '@/components/_Templates/UseWeb/UseWeb';
import LoadingSpinner from '@/components/_Atoms/LoadingSpinner/LoadingSpinner';
import Map from '@/components/_Atoms/Naver/Map';
import useResize from '@/hooks/useResize';
import { loadingBringMyLocationState } from '@/recoil/atoms/location';

const UseWeb = () => {
  useResize();
  const loadingBringMyLocation = useRecoilValue(loadingBringMyLocationState);

  return (
    <UseWebTemplate>
      {loadingBringMyLocation || <LoadingSpinner />}
      <Map />
    </UseWebTemplate>
  );
};

export default UseWeb;

import { useRecoilValue } from 'recoil';
import proj4 from 'proj4';
import Image from 'next/image';

import s from './FindRoute.module.scss';

import findRouteImg from '@/img/StoreDetail/navigation.webp';
import { searchLocationAtom } from '@/recoil/atoms/location';

interface FindRouteButton_I {
  x: string | undefined;
  y: string | undefined;
  place_name: string | undefined;
}

const FindRouteButton = ({ x, y, place_name }: FindRouteButton_I) => {
  const location = useRecoilValue(searchLocationAtom);

  const handleFindWay = () => {
    if (x && y) {
      const start = proj4('EPSG:4326', 'EPSG:3857', [location.longitude, location.latitude]);
      const arrive = proj4('EPSG:4326', 'EPSG:3857', [parseFloat(x), parseFloat(y)]);
      window.open(
        `https://map.naver.com/v5/directions/${start[0]},${start[1]},내위치,,/${arrive[0]},${arrive[1]},${place_name},,/~/transit?c=${arrive[0]},${arrive[1]},13,0,0,0,dh`,
      );
    }
  };

  return (
    <button className={s.button} onClick={handleFindWay}>
      <Image src={findRouteImg} alt='FindRouteButtonIcon' />
      길찾기
    </button>
  );
};

export default FindRouteButton;

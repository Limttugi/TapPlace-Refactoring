import Link from 'next/link';
import Image from 'next/image';

import s from './MainLogo_Link.module.scss';

import MainLogo from '@/img/Logo/TapPlace/tapplace_logo.webp';

const MainLogo_Link = () => {
  return (
    <h1 className={s.linkContainer} data-service-name='TapPlace'>
      <Link href='/'>
        <Image src={MainLogo} alt='탭플레이스' />
      </Link>
    </h1>
  );
};

export default MainLogo_Link;

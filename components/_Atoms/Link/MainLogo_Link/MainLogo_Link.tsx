import Link from 'next/link';
import Image from 'next/image';

import s from './MainLogo_Link.module.scss';

import MainLogo from '@/img/Logo/TapPlace/tapplace_logo.webp';

const MainLogo_Link = () => {
  return (
    <Link href='/' className={s.linkContainer}>
      <h2 className='a11y-hidden'>DefaultPageLink</h2>
      <Image src={MainLogo} alt='TapplaceLogoImage' />
    </Link>
  );
};

export default MainLogo_Link;

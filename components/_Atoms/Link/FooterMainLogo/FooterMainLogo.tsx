import Link from 'next/link';
import Image from 'next/image';

import s from './FooterMainLogo.module.scss';

import tapplaceLogo from '@/img/Logo/TapPlace/tapplace_logo_black.webp';

const FooterMainLogoLink = () => {
  return (
    <Link href='/' className={s.wrapper}>
      <span className='a11y-hidden'>TapPlace</span>
      <Image src={tapplaceLogo} alt='tapplaceLogo' />
    </Link>
  );
};

export default FooterMainLogoLink;

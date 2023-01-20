import React from 'react';
import s from './index.module.scss';

import { useEffect, useState } from 'react';

import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import tapplaceLogo from '@/img/Logo/TapPlace/tapplace_logo.webp';
import Header_Mobile from './MobileVer/Header_Mobile';

const Header = () => {
  const { viewType } = useAppSelector(state => state.common);
  const [href, setHref] = useState('/');

  useEffect(() => {
    setHref(document.location.pathname);
  }, []);

  return (
    <>
      {viewType === 'MOBILE' ? (
        <Header_Mobile />
      ) : (
        <header className={s.container}>
          <Image className={s.logo} src={tapplaceLogo} alt='tapplceLogo' placeholder='blur' />
          <ul className={s.menuContainer}>
            <Link href='/' className={s.menuList} onClick={() => setHref('/')}>
              서비스 소개
            </Link>
            <Link href='/notice' className={s.menuList} onClick={() => setHref('/notice')}>
              공지사항
            </Link>
            <Link href='/faq' className={s.menuList} onClick={() => setHref('/faq')}>
              FAQ
            </Link>
            <Link href='/useweb' className={s.menuList} onClick={() => setHref('/useweb')}>
              웹으로 이용하기
            </Link>
          </ul>
        </header>
      )}
    </>
  );
};

export default React.memo(Header);

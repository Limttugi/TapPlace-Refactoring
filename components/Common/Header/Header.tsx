import React from 'react';
import s from './Header.module.scss';

import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import tapplaceLogo from '@/img/Logo/TapPlace/tapplace_logo.webp';
import Header_Mobile from './MobileVer/Header_Mobile';
import { useRouter } from 'next/router';
import { IMPLEMENTING_SERVICE } from '@/constants/ALERT';

const Header = () => {
  const { viewType } = useAppSelector(state => state.common);
  const pathname: string = useRouter().pathname;

  const onClickAlert = () => {
    alert(IMPLEMENTING_SERVICE);
  };

  return (
    <>
      {viewType === 'MOBILE' ? (
        <Header_Mobile />
      ) : (
        <header className={pathname === '/useweb' ? `${s.container} ${s.useWebVersion}` : s.container}>
          <Image
            className={s.logo}
            src={tapplaceLogo}
            alt="tapplceLogo"
            placeholder="blur"
            onClick={() => {
              window.location.href = '/';
            }}
          />
          <ul className={s.menuContainer}>
            <Link href="/" id={pathname === '/' ? `${s.active}` : ''} className={s.menuList}>
              서비스 소개
            </Link>
            <Link
              href="#"
              id={pathname === '/notice' ? `${s.active}` : ''}
              className={s.menuList}
              onClick={onClickAlert}>
              공지사항
            </Link>
            <Link href="#" id={pathname === '/faq' ? `${s.active}` : ''} className={s.menuList} onClick={onClickAlert}>
              FAQ
            </Link>
            <Link href="/useweb" id={pathname === '/useweb' ? `${s.active}` : ''} className={s.menuList}>
              웹으로 이용하기
            </Link>
          </ul>
        </header>
      )}
    </>
  );
};

export default React.memo(Header);

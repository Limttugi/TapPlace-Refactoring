import React from 'react';
import s from './index.module.scss';

import { useEffect, useState } from 'react';

import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import tapplaceLogo from '@/img/Logo/TapPlace/tapplace_logo.webp';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const { viewType } = useAppSelector(state => state.common);
  const [href, setHref] = useState('/');

  useEffect(() => {
    setHref(document.location.pathname);
  }, []);

  return (
    <>
      <header className={s.container}>
        <Image className={s.logo} src={tapplaceLogo} alt='tapplceLogo' placeholder='blur' />
        {viewType === 'MOBILE' ? (
          // 모바일 화면일 시 햄버거 메뉴
          <HamburgerMenu />
        ) : (
          // 모바일 화면이 아닐 시 (tablet, desktop) 리스트 메뉴
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
        )}
      </header>
    </>
  );
};

export default React.memo(Header);

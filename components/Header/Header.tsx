import s from '@/styles/components/Header/Header.module.scss';

import { useEffect, useRef, useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import tapplaceLogo from '@/img/Logo/TapPlaceLogo/tapplace_logo.webp';

const Header = () => {
  const { viewType } = useAppSelector(state => state.common);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);

  // 메뉴 밖을 클릭 시 메뉴를 끔
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    // ref 밖 클릭 시
    if (menuRef && !menuRef.current?.contains(target)) setMenuToggle(false);
  };
  useEffect(() => {
    window.addEventListener('mouseover', handleClickOutside);
    return () => window.removeEventListener('mouseover', handleClickOutside);
  });

  return (
    <>
      <header className={s.container}>
        <Image className={s.logo} src={tapplaceLogo} alt='tapplceLogo' placeholder='blur' />
        {viewType === 'MOBILE' ? (
          // 모바일 화면일 시 햄버거 메뉴
          !menuToggle ? (
            <FontAwesomeIcon className={s.menuToggleButton} icon={faBars} onClick={() => setMenuToggle(true)} />
          ) : (
            <>
              <FontAwesomeIcon className={s.menuToggleButton} icon={faXmark} onClick={() => setMenuToggle(false)} />
              <ul ref={menuRef} className={s.menuContainer}>
                <Link href='/' className={s.menuList}>
                  서비스 소개
                </Link>
                <Link href='/' className={s.menuList}>
                  공지사항
                </Link>
                <Link href='/' className={s.menuList}>
                  FAQ
                </Link>
                <Link href='/' className={s.menuList}>
                  웹으로 이용하기
                </Link>
              </ul>
            </>
          )
        ) : (
          // 모바일 화면이 아닐 시 (tablet, desktop) 리스트 메뉴
          <ul className={s.menuContainer}>
            <Link href='/' className={s.menuList}>
              서비스 소개
            </Link>
            <Link href='/' className={s.menuList}>
              공지사항
            </Link>
            <Link href='/' className={s.menuList}>
              FAQ
            </Link>
            <Link href='/' className={s.menuList}>
              웹으로 이용하기
            </Link>
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;

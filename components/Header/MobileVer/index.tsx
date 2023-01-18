import s from './index.module.scss';

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import tapplaceLogo from '@/img/Logo/TapPlace/tapplace_logo.webp';
import Image from 'next/image';

const MobileHeader = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

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
        {!menuToggle ? (
          <FontAwesomeIcon className={s.menuToggleButton} icon={faBars} onClick={() => setMenuToggle(true)} />
        ) : (
          <>
            <FontAwesomeIcon className={s.menuToggleButton} icon={faXmark} onClick={() => setMenuToggle(false)} />
            <ul ref={menuRef} className={s.menuContainer}>
              <Link href='/' className={s.menuList}>
                서비스 소개
              </Link>
              <Link href='/notice' className={s.menuList}>
                공지사항
              </Link>
              <Link href='/faq' className={s.menuList}>
                FAQ
              </Link>
              <Link href='/useweb' className={s.menuList}>
                웹으로 이용하기
              </Link>
            </ul>
          </>
        )}
      </header>
    </>
  );
};

export default MobileHeader;

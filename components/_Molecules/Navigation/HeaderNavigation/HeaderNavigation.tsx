import { Dispatch, useEffect, useRef } from 'react';

import s from './HeaderNavigation.module.scss';

import XButton from '@/components/_Atoms/FontAwesome/Navigation/XButton';
import HamburgerButton from '@/components/_Atoms/FontAwesome/Navigation/HamburgerButton';
import NavList from '@/components/_Atoms/Link/NavList/NavList';
import { useAppSelector } from '@/redux/hooks';
import { IMPLEMENTING_SERVICE } from '@/constants/ALERT';

interface HeaderNavigation_I {
  pathname: string;
  navShowToggle: boolean;
  setNavShowToggle: Dispatch<boolean>;
}

const HeaderNavigation = ({ pathname, navShowToggle, setNavShowToggle }: HeaderNavigation_I) => {
  const { viewType } = useAppSelector(state => state.viewType);
  const navRef = useRef<HTMLElement>(null);

  const handleAlertImplementingService = () => alert(IMPLEMENTING_SERVICE);

  const handleClickNavOutsideArea = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (navRef && !navRef.current?.contains(target)) setNavShowToggle(false);
  };

  useEffect(() => {
    window.addEventListener('mouseover', handleClickNavOutsideArea);

    return () => window.removeEventListener('mouseover', handleClickNavOutsideArea);
  });

  return (
    <>
      {viewType === 'MOBILE' && navShowToggle && (
        <>
          <XButton onClickEvent={() => setNavShowToggle(false)} />
          <nav className={s.navigationContainer_mobile} ref={navRef}>
            <ul>
              <NavList text='서비스 소개' href='/' pathname={pathname} />
              <NavList text='공지사항' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
              <NavList text='FAQ' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
              <NavList text='웹으로 이용하기' href='/useweb' pathname={pathname} />
            </ul>
          </nav>
        </>
      )}

      {viewType === 'MOBILE' && !navShowToggle && <HamburgerButton onClickEvent={() => setNavShowToggle(true)} />}

      {viewType !== 'MOBILE' && (
        <nav className={s.navigationContainer}>
          <ul>
            <NavList text='서비스 소개' href='/' pathname={pathname} />
            <NavList text='공지사항' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
            <NavList text='FAQ' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
            <NavList text='웹으로 이용하기' href='/useweb' pathname={pathname} />
          </ul>
        </nav>
      )}
    </>
  );
};

export default HeaderNavigation;

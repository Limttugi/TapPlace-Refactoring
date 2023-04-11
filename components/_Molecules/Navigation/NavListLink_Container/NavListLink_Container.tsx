import { Dispatch, useEffect, useRef } from 'react';

import s from './NavListLink_Container.module.scss';

import X_Button from '@/components/_Atoms/FontAwesome/Navigation/X_Button';
import Hamburger_Button from '@/components/_Atoms/FontAwesome/Navigation/Hamburger_Button';
import NavList_Link from '@/components/_Atoms/Link/NavList_Link/NavList_Link';
import { useAppSelector } from '@/redux/hooks';
import { IMPLEMENTING_SERVICE } from '@/constants/ALERT';

interface NavListLink_Container_I {
  pathname: string;
  navShowToggle: boolean;
  setNavShowToggle: Dispatch<boolean>;
}

const NavListLink_Container = ({ pathname, navShowToggle, setNavShowToggle }: NavListLink_Container_I) => {
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
      {/* MOBILE */}
      {viewType === 'MOBILE' && navShowToggle && (
        <>
          <X_Button onClickEvent={() => setNavShowToggle(false)} />
          <nav className={s.navigationContainer_mobile} ref={navRef}>
            <ul>
              <NavList_Link text='서비스 소개' href='/' pathname={pathname} />
              <NavList_Link text='공지사항' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
              <NavList_Link text='FAQ' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
              <NavList_Link text='웹으로 이용하기' href='/useweb' pathname={pathname} />
            </ul>
          </nav>
        </>
      )}

      {viewType === 'MOBILE' && !navShowToggle && <Hamburger_Button onClickEvent={() => setNavShowToggle(true)} />}
      {/* !MOBILE */}

      {viewType !== 'MOBILE' && (
        <nav className={s.navigationContainer}>
          <ul>
            <NavList_Link text='서비스 소개' href='/' pathname={pathname} />
            <NavList_Link text='공지사항' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
            <NavList_Link text='FAQ' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
            <NavList_Link text='웹으로 이용하기' href='/useweb' pathname={pathname} />
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavListLink_Container;

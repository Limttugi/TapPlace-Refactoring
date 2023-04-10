import { Dispatch, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import s from './NavListLinkContainer.module.scss';

import NavListLink from '@/components/_Atoms/Link/NavList-Link/NavListLink';
import { useAppSelector } from '@/redux/hooks';
import { IMPLEMENTING_SERVICE } from '@/constants/ALERT';

interface NavListLinkContainer_I {
  pathname: string;
  navShowToggle: boolean;
  setNavShowToggle: Dispatch<boolean>;
}

const NavListLinkContainer = ({ pathname, navShowToggle, setNavShowToggle }: NavListLinkContainer_I) => {
  const viewType = useAppSelector(state => state.common.viewType);
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
          <FontAwesomeIcon className={s.menuToggleButton} icon={faXmark} onClick={() => setNavShowToggle(false)} />
          <nav className={s.navigationContainer_mobile} ref={navRef}>
            <ul>
              <NavListLink text='서비스 소개' href='/' pathname={pathname} />
              <NavListLink text='공지사항' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
              <NavListLink text='FAQ' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
              <NavListLink text='웹으로 이용하기' href='/useweb' pathname={pathname} />
            </ul>
          </nav>
        </>
      )}

      {viewType === 'MOBILE' && !navShowToggle && (
        <FontAwesomeIcon className={s.menuToggleButton} icon={faBars} onClick={() => setNavShowToggle(true)} />
      )}
      {/* !MOBILE */}

      {viewType !== 'MOBILE' && (
        <nav className={s.navigationContainer}>
          <ul>
            <NavListLink text='서비스 소개' href='/' pathname={pathname} />
            <NavListLink text='공지사항' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
            <NavListLink text='FAQ' href='' pathname={pathname} onClickEvent={handleAlertImplementingService} />
            <NavListLink text='웹으로 이용하기' href='/useweb' pathname={pathname} />
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavListLinkContainer;

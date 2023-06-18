import { useState } from 'react';
import { useRouter } from 'next/router';

import s from './Header.module.scss';
import MainLogoLink from '@/components/_Atoms/Link/MainLogo/MainLogo';
import HeaderNavigation from '@/components/_Molecules/Navigation/HeaderNavigation/HeaderNavigation';

const Header = () => {
  const pathname: string = useRouter().pathname;
  const [navShowToggle, setNavShowToggle] = useState<boolean>(false);

  return (
    <>
      {pathname === '/useweb' ? (
        <header
          id={s.useWebHeader}
          className={navShowToggle ? `${s.headerContainer} ${s.shadow}` : `${s.headerContainer}`}
        >
          <MainLogoLink />
          <HeaderNavigation pathname={pathname} navShowToggle={navShowToggle} setNavShowToggle={setNavShowToggle} />
        </header>
      ) : (
        <header className={navShowToggle ? `${s.headerContainer} ${s.shadow}` : `${s.headerContainer}`}>
          <MainLogoLink />
          <HeaderNavigation pathname={pathname} navShowToggle={navShowToggle} setNavShowToggle={setNavShowToggle} />
        </header>
      )}
    </>
  );
};

export default Header;

import { useState } from 'react';
import { useRouter } from 'next/router';

import s from './Header.module.scss';

import MainLogo_Link from '@/components/_Atoms/Link/MainLogo_Link/MainLogo_Link';
import NavListLink_Container from '@/components/_Molecules/Navigation/NavListLink_Container/NavListLink_Container';

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
          <MainLogo_Link />
          <NavListLink_Container
            pathname={pathname}
            navShowToggle={navShowToggle}
            setNavShowToggle={setNavShowToggle}
          />
        </header>
      ) : (
        <header className={navShowToggle ? `${s.headerContainer} ${s.shadow}` : `${s.headerContainer}`}>
          <MainLogo_Link />
          <NavListLink_Container
            pathname={pathname}
            navShowToggle={navShowToggle}
            setNavShowToggle={setNavShowToggle}
          />
        </header>
      )}
    </>
  );
};

export default Header;

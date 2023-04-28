import { useRecoilValue } from 'recoil';

import s from './Footer.module.scss';

import Copyright from '@/components/_Atoms/Text/Copyright/Copyright';
import ShortCutListContainer from '@/components/_Molecules/Container/ShortCutList/ShortCutList';
import FooterMainLogoLink from '@/components/_Atoms/Link/FooterMainLogo/FooterMainLogo';
import { breakpointState } from '@/recoil/atoms/breakpoint';

const Footer = () => {
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <footer className={s.container}>
      <div className={s.tapplaceInfoContainer}>
        <FooterMainLogoLink />
        <ShortCutListContainer />
      </div>
      {BREAKPOINT !== 'MOBILE' && <hr className={s.dividingLine} />}
      <Copyright />
    </footer>
  );
};

export default Footer;

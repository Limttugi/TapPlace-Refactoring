import s from './Footer.module.scss';

import { useAppSelector } from '@/redux/hooks';
import Copyright from '@/components/_Atoms/Text/Copyright/Copyright';
import ShortCutListContainer from '@/components/_Molecules/Container/ShortCutList/ShortCutList';
import FooterMainLogoLink from '@/components/_Atoms/Link/FooterMainLogo/FooterMainLogo';

const Footer = () => {
  const viewType = useAppSelector(state => state.viewType.viewType);

  return (
    <footer className={s.container}>
      <div className={s.tapplaceInfoContainer}>
        <FooterMainLogoLink />
        <ShortCutListContainer />
      </div>
      {viewType !== 'MOBILE' && <hr className={s.dividingLine} />}
      <Copyright />
    </footer>
  );
};

export default Footer;

import Link from 'next/link';

import s from './NavListLink.module.scss';
import { useAppSelector } from '@/redux/hooks';

interface NavListLink_I {
  text: string;
  href: string;
  pathname: string;
  onClickEvent?: () => void;
}

const NavListLink = ({ text, href, pathname, onClickEvent }: NavListLink_I) => {
  const viewType = useAppSelector(state => state.common.viewType);

  return (
    <>
      {viewType === 'MOBILE' && (
        <li className={s.list} onClick={onClickEvent}>
          <Link href={`${href}`}>{text}</Link>
        </li>
      )}

      {viewType !== 'MOBILE' && (
        <li className={pathname !== href ? `${s.list}` : `${s.list} ${s.active}`} onClick={onClickEvent}>
          <Link href={`${href}`}>{text}</Link>
        </li>
      )}
    </>
  );
};

export default NavListLink;

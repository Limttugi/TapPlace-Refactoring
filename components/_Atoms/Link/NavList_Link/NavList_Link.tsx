import Link from 'next/link';

import s from './NavList_Link.module.scss';

import { useAppSelector } from '@/redux/hooks';

interface NavList_Link_I {
  text: string;
  href: string;
  pathname: string;
  onClickEvent?: () => void;
}

const NavList_Link = ({ text, href, pathname, onClickEvent }: NavList_Link_I) => {
  const { viewType } = useAppSelector(state => state.viewType);

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

export default NavList_Link;

import Link from 'next/link';

import s from './NavList.module.scss';

import { useAppSelector } from '@/redux/hooks';
import { useRecoilValue } from 'recoil';
import { breakpointState } from '@/recoil/atoms/breakpoint';

interface NavListLink_I {
  text: string;
  href: string;
  pathname: string;
  onClickEvent?: () => void;
}

const NavListLink = ({ text, href, pathname, onClickEvent }: NavListLink_I) => {
  // const { viewType } = useAppSelector(state => state.viewType);
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <>
      {BREAKPOINT === 'MOBILE' && (
        <li className={s.list} onClick={onClickEvent}>
          <Link href={`${href}`}>{text}</Link>
        </li>
      )}

      {BREAKPOINT !== 'MOBILE' && (
        <li className={pathname !== href ? `${s.list}` : `${s.list} ${s.active}`} onClick={onClickEvent}>
          <Link href={`${href}`}>{text}</Link>
        </li>
      )}
    </>
  );
};

export default NavListLink;

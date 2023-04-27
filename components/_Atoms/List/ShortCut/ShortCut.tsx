import Link from 'next/link';

import s from './ShortCut.module.scss';

interface ShortCutList_I {
  type?: 'Link';
  text: '서비스 이용약관' | '개인정보 처리방침' | 'E-mail : https://tapplace.co.kr';
  href: string;
}

const ShortCutList = ({ type, text, href }: ShortCutList_I) => {
  return <li className={s.shorcutList}>{type ? <Link href={href}>{text}</Link> : <>{text}</>}</li>;
};

export default ShortCutList;

import s from './ShortCutList.module.scss';

import ShortCutList from '@/components/_Atoms/List/ShortCut/ShortCut';

const ShortCutListContainer = () => {
  return (
    <ul className={s.container}>
      <ShortCutList type='Link' text='개인정보 처리방침' href='/' />
      <ShortCutList type='Link' text='서비스 이용약관' href='/' />
      <ShortCutList text='E-mail : https://tapplace.co.kr' href='/' />
    </ul>
  );
};

export default ShortCutListContainer;

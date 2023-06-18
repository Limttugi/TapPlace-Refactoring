import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

import s from './ShowMapOrMerchantList.module.scss';

import { isShowFilteringMenuAtom } from '@/recoil/atoms/filter';

interface ShowMapOrMerchantListButton_I {
  onClickEvent: () => void;
  children: ReactNode;
}

const ShowMapOrMerchantListButton = ({ onClickEvent, children }: ShowMapOrMerchantListButton_I) => {
  const isShowFilteringMenu = useRecoilValue(isShowFilteringMenuAtom);

  return (
    <button
      type='button'
      className={!isShowFilteringMenu ? `${s.button}` : `${s.button} ${s.inActive}`}
      onClick={onClickEvent}
    >
      {children}
    </button>
  );
};

export default ShowMapOrMerchantListButton;

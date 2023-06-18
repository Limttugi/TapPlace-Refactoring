import { useSetRecoilState } from 'recoil';
import Image from 'next/image';

import s from './ShowFilterMenu.module.scss';

import { isShowFilteringMenuAtom } from '@/recoil/atoms/filter';
import filterNotCheckedImageSrc from '@/img/Filter/filter_check.webp';

interface ShowFilterMenuButton_I {
  text: '매장선택' | '결제수단';
  active: boolean;
  numberOfFilter: number;
}

const ShowFilterMenuButton = ({ text, active, numberOfFilter }: ShowFilterMenuButton_I) => {
  const setIsShowFilteringMenu = useSetRecoilState(isShowFilteringMenuAtom);

  const handleShowFilteringMenu = () => {
    setIsShowFilteringMenu(true);
  };

  return (
    <>
      {!active ? (
        <button className={s.button} type='button' onClick={handleShowFilteringMenu}>
          {text}
          <Image src={filterNotCheckedImageSrc} alt='filterNotCheckedImage' />
        </button>
      ) : (
        <button className={`${s.button} ${s.active}`} type='button' onClick={handleShowFilteringMenu}>
          {text} {numberOfFilter}
        </button>
      )}
    </>
  );
};

export default ShowFilterMenuButton;

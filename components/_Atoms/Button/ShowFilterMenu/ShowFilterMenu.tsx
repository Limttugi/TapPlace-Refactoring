import s from './ShowFilterMenu.module.scss';

import Image from 'next/image';
import filterNotCheckedImageSrc from '@/img/Filter/filter_check.webp';

interface ShowFilterMenuButton_I {
  text: '매장선택' | '결제수단';
}

const ShowFilterMenuButton = ({ text }: ShowFilterMenuButton_I) => {
  return (
    <button className={s.button} type='button'>
      {text}
      <Image src={filterNotCheckedImageSrc} alt='filterNotCheckedImage' />
    </button>
  );
};

export default ShowFilterMenuButton;

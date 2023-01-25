import s from './FilterButton.module.scss';

import filterCheck from '@/img/Filter/filter_check.webp';
import filterReset from '@/img/Filter/filter_reset.webp';
import Image from 'next/image';

const FilterButton = () => {
  return (
    <div className={s.container}>
      <button className={s.button}>
        <p className={s.buttonText}>매장선택</p>
        <Image className={s.filterImg} src={filterCheck} alt="filterCheck" />
      </button>
      <button className={s.button}>
        <p className={s.buttonText}>결제수단</p>
        <Image className={s.filterImg} src={filterCheck} alt="filterCheck" />
      </button>
    </div>
  );
};

export default FilterButton;

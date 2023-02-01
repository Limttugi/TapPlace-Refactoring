import s from './FilterButton.module.scss';

import filterCheck from '@/img/Filter/filter_check.webp';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { SET_SHOW_FILTERING_FLAG } from '@/redux/slices/showMenu';

const FilterButton = () => {
  const dispatch = useAppDispatch();

  const handleShowFilterMenu = () => {
    dispatch(SET_SHOW_FILTERING_FLAG(true));
  };

  return (
    <div className={s.container}>
      <button className={s.button} onClick={handleShowFilterMenu}>
        <p className={s.buttonText}>매장선택</p>
        <Image className={s.filterImg} src={filterCheck} alt="filterCheck" />
      </button>
      <button className={s.button} onClick={handleShowFilterMenu}>
        <p className={s.buttonText}>결제수단</p>
        <Image className={s.filterImg} src={filterCheck} alt="filterCheck" />
      </button>
    </div>
  );
};

export default FilterButton;

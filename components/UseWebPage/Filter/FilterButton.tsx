import s from './FilterButton.module.scss';
import filterMenu from './FilterMenu/FilteringMenu.module.scss';

import filterCheck from '@/img/Filter/filter_check.webp';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { SET_SHOW_FILTERING_FLAG } from '@/redux/slices/showMenu';

const FilterButton = () => {
  const dispatch = useAppDispatch();
  const { showFilteringFlag } = useAppSelector(state => state.showMenu);

  const onChangeFlag = () => {
    dispatch(SET_SHOW_FILTERING_FLAG(!showFilteringFlag));
  };

  return (
    <div className={s.container}>
      <button className={s.button} onClick={onChangeFlag}>
        <p className={s.buttonText}>매장선택</p>
        <Image className={s.filterImg} src={filterCheck} alt="filterCheck" />
      </button>
      <button className={s.button} onClick={onChangeFlag}>
        <p className={s.buttonText}>결제수단</p>
        <Image className={s.filterImg} src={filterCheck} alt="filterCheck" />
      </button>
    </div>
  );
};

export default FilterButton;

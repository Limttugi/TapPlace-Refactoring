import s from './FilterButton.module.scss';

import filterCheck from '@/img/Filter/filter_check.webp';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { SET_SHOW_FILTERING_FLAG } from '@/redux/slices/showMenu';
import close from '@/img/Filter/filter_close.webp';

const FilterButton = () => {
  const dispatch = useAppDispatch();
  const { filteringStore, filteringPayment } = useAppSelector(state => state.store);

  const handleShowFilterMenu = () => {
    dispatch(SET_SHOW_FILTERING_FLAG(true));
  };

  return (
    <div className={s.container}>
      {filteringStore.length === 0 ? (
        <button className={s.button} onClick={handleShowFilterMenu}>
          <p className={s.buttonText}>매장선택</p>
          <Image className={s.filterImg} src={filterCheck} alt="filterCheck" />
        </button>
      ) : (
        <button className={`${s.button} ${s.active}`} onClick={handleShowFilterMenu}>
          <p className={s.buttonText}>매장선택 {filteringStore.length}</p>
          <Image className={s.filterImg} src={close} alt="filterCheck" />
        </button>
      )}

      {filteringPayment.length === 0 ? (
        <button className={s.button} onClick={handleShowFilterMenu}>
          <p className={s.buttonText}>결제수단{filteringPayment.length !== 0 && ' ' + filteringPayment.length}</p>
          <Image className={s.filterImg} src={filterCheck} alt="filterReset" />
        </button>
      ) : (
        <button className={`${s.button} ${s.active}`} onClick={handleShowFilterMenu}>
          <p className={s.buttonText}>결제수단{filteringPayment.length !== 0 && ' ' + filteringPayment.length}</p>
          <Image className={s.filterImg} src={close} alt="filterCheck" />
        </button>
      )}
    </div>
  );
};

export default FilterButton;

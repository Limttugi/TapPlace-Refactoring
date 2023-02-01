import s from './FilterSection.module.scss';

import back from '@/img/back.webp';
import Image from 'next/image';
import { PAYS_APPLE, PAYS_CONTACTLESS, PAYS_GOOGLE, PAYS_KOR } from '@/constants/PAYS';
import { STORE_TYPE } from '@/constants/STORE';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { SET_SHOW_FILTERING_FLAG } from '@/redux/slices/showMenu';
import { SET_APPLY_FILTER } from '@/redux/slices/store';

const FilterSection = () => {
  const dispatch = useAppDispatch();
  const { showFilteringFlag } = useAppSelector(state => state.showMenu);

  const handleCloseFilterMenu = () => {
    dispatch(SET_SHOW_FILTERING_FLAG(false));
  };

  const handleActiveFilter = (e: React.MouseEvent | any) => {
    e.target.className === `${s.filterList}`
      ? (e.currentTarget.className = `${s.filterList} ${s.filterActive}`)
      : (e.currentTarget.className = `${s.filterList}`);
  };

  const handleApplyFilter = () => {
    const filterStore: Array<string> = [];
    const filterPayment: Array<string> = [];
    const filtersNodeArray = document.querySelectorAll(`.${s.filterActive}`);
    filtersNodeArray.forEach(filter => {
      if (filter.id.includes('store')) filterStore.push(filter.id);
      else filterPayment.push(filter.id);
    });

    dispatch(SET_APPLY_FILTER([filterStore, filterPayment]));
  };

  return (
    <section id={showFilteringFlag ? `${s.active}` : ''} className={s.container}>
      <div className={s.topContainer}>
        <Image className={s.backImg} src={back} alt="backBtn" onClick={handleCloseFilterMenu} />
        <h1 className={s.headerText}>필터</h1>
      </div>
      <h4 className={s.filterTypeText}>매장선택</h4>
      <ul className={s.listContainer}>
        {STORE_TYPE.map((item, idx) => (
          <li onClick={handleActiveFilter} id={'store' + idx} className={s.filterList} key={item + idx}>
            {item}
          </li>
        ))}
      </ul>
      <hr />
      <h4 className={s.filterTypeText}>결제수단</h4>
      <ul className={s.listContainer}>
        {PAYS_KOR.map((item, idx) => (
          <li onClick={handleActiveFilter} id={'pay' + idx} className={s.filterList} key={item + idx}>
            {item}
          </li>
        ))}
      </ul>
      <h4 className={s.payTypeText}>애플페이</h4>
      <ul className={s.listContainer}>
        {PAYS_APPLE.map((item, idx) => (
          <li onClick={handleActiveFilter} id={'apple' + idx} className={s.filterList} key={item + idx}>
            {item}
          </li>
        ))}
      </ul>
      <h4 className={s.payTypeText}>구글페이</h4>
      <ul className={s.listContainer}>
        {PAYS_GOOGLE.map((item, idx) => (
          <li onClick={handleActiveFilter} id={'google' + idx} className={s.filterList} key={item + idx}>
            {item}
          </li>
        ))}
      </ul>
      <h4 className={s.payTypeText}>컨택리스 카드</h4>
      <ul className={s.listContainer}>
        {PAYS_CONTACTLESS.map((item, idx) => (
          <li onClick={handleActiveFilter} id={'conless' + idx} className={s.filterList} key={item + idx}>
            {item}
          </li>
        ))}
      </ul>
      <button
        className={s.filterApplyButton}
        onClick={() => {
          handleCloseFilterMenu();
          handleApplyFilter();
        }}>
        적용
      </button>
    </section>
  );
};

export default FilterSection;

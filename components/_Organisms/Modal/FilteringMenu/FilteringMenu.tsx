import { useRecoilState, useSetRecoilState } from 'recoil';

import s from './FilteringMenu.module.scss';

import {
  FILTER_CATEGORY,
  FILTER_PAYMENT,
  FILTER_PAYMENT_APPLE,
  FILTER_PAYMENT_CONLESS,
  FILTER_PAYMENT_GOOGLE,
} from '@/constants/FILTER';
import { categoryFilterAtom, isShowFilteringMenuAtom, paymentFilterAtom } from '@/recoil/atoms/filter';

const FilteringMenuModal = () => {
  const [isShowFilteringMenu, setIsShowFilteringMenu] = useRecoilState(isShowFilteringMenuAtom);
  const setCategoryFilter = useSetRecoilState(categoryFilterAtom);
  const setPaymentFilter = useSetRecoilState(paymentFilterAtom);

  const handleActiveFilter = (e: React.MouseEvent<HTMLUListElement> | any) => {
    const target = e.target as HTMLUListElement;
    target.className === `${s.filterList}`
      ? (target.className = `${s.filterList} ${s.active}`)
      : (target.className = `${s.filterList}`);
  };

  const handleApplyFilter = () => {
    const categoryFilterArray: Array<string> = [];
    const paymentFilterArray: Array<string> = [];
    const activeFilterArray = document.querySelectorAll(`.${s.active}`);

    activeFilterArray.forEach(filter =>
      filter.id.includes('category') ? categoryFilterArray.push(filter.innerHTML) : paymentFilterArray.push(filter.id),
    );

    setCategoryFilter({ clickedCategoryFilter: categoryFilterArray.length !== 0, categoryFilter: categoryFilterArray });
    setPaymentFilter({ clickedPaymentFilter: paymentFilterArray.length !== 0, paymentFilter: paymentFilterArray });
  };

  return (
    <dialog className={isShowFilteringMenu ? `${s.container} ${s.show}` : s.container}>
      <h2 className={s.title}>필터</h2>
      <button onClick={() => setIsShowFilteringMenu(false)}>x</button>
      <section className={s.filterCategory}>
        <h3 className={s.filterType}>매장선택</h3>
        <ul className={s.filterListContainer}>
          {FILTER_CATEGORY.map(filter => (
            <li key={filter.id} id={filter.id} className={s.filterList} onClick={handleActiveFilter}>
              {filter.text}
            </li>
          ))}
        </ul>
      </section>
      <section className={s.filterCategory}>
        <h3 className={s.filterType}>결제수단</h3>
        <ul className={s.filterListContainer}>
          {FILTER_PAYMENT.map(filter => (
            <li key={filter.id} id={filter.id} className={s.filterList} onClick={handleActiveFilter}>
              {filter.text}
            </li>
          ))}
        </ul>
        <h4 className={s.filterSubType}>애플페이</h4>
        <ul className={s.filterListContainer}>
          {FILTER_PAYMENT_APPLE.map(filter => (
            <li key={filter.id} id={filter.id} className={s.filterList} onClick={handleActiveFilter}>
              {filter.text}
            </li>
          ))}
        </ul>
        <h4 className={s.filterSubType}>구글페이</h4>
        <ul className={s.filterListContainer}>
          {FILTER_PAYMENT_GOOGLE.map(filter => (
            <li key={filter.id} id={filter.id} className={s.filterList} onClick={handleActiveFilter}>
              {filter.text}
            </li>
          ))}
        </ul>
        <h4 className={s.filterSubType}>컨택리스 카드</h4>
        <ul className={s.filterListContainer}>
          {FILTER_PAYMENT_CONLESS.map(filter => (
            <li key={filter.id} id={filter.id} className={s.filterList} onClick={handleActiveFilter}>
              {filter.text}
            </li>
          ))}
        </ul>
      </section>
      <button
        className={s.applyButton}
        onClick={() => {
          handleApplyFilter();
          setIsShowFilteringMenu(false);
        }}
      >
        적용
      </button>
    </dialog>
  );
};

export default FilteringMenuModal;

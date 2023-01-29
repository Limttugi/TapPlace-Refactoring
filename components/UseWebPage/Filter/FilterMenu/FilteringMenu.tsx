import s from './FilteringMenu.module.scss';

import back from '@/img/back.webp';
import Image from 'next/image';
import { PAYS_APPLE, PAYS_CONTACTLESS, PAYS_GOOGLE, PAYS_KOR } from '@/constants/PAYS';
import { STORE_TYPE } from '@/constants/STORE';
import { useAppDispatch } from '@/redux/hooks';
import { SET_SHOW_FILTERING_FLAG } from '@/redux/slices/\bshowMenu';

const FilteringMenu = () => {
  const dispatch = useAppDispatch();

  const onChangeFlag = () => {
    dispatch(SET_SHOW_FILTERING_FLAG(false));
  };

  const onClickToggleFilter = (e: React.MouseEvent | any) => {
    e.target.className === `${s.filterList}`
      ? (e.currentTarget.className = `${s.filterList} ${s.filterActive}`)
      : (e.currentTarget.className = `${s.filterList}`);
  };

  return (
    <section className={s.container}>
      <div className={s.topContainer}>
        <Image className={s.backImg} src={back} alt="backBtn" onClick={onChangeFlag} />
        <h1 className={s.headerText}>필터</h1>
      </div>
      <h4 className={s.filterTypeText}>매장선택</h4>
      <ul className={s.listContainer}>
        {STORE_TYPE.map((item, idx) => (
          <li onClick={onClickToggleFilter} className={s.filterList} key={item + idx}>
            {item}
          </li>
        ))}
      </ul>
      <hr />
      <h4 className={s.filterTypeText}>결제수단</h4>
      <ul className={s.listContainer}>
        {PAYS_KOR.map((item, idx) => (
          <li onClick={onClickToggleFilter} className={s.filterList} key={item + idx}>
            {item}
          </li>
        ))}
      </ul>
      <h4 className={s.payTypeText}>애플페이</h4>
      <ul className={s.listContainer}>
        {PAYS_APPLE.map((item, idx) => (
          <li onClick={onClickToggleFilter} className={s.filterList} key={item + idx}>
            {item}
          </li>
        ))}
      </ul>
      <h4 className={s.payTypeText}>구글페이</h4>
      <ul className={s.listContainer}>
        {PAYS_GOOGLE.map((item, idx) => (
          <li onClick={onClickToggleFilter} className={s.filterList} key={item + idx}>
            {item}
          </li>
        ))}
      </ul>
      <h4 className={s.payTypeText}>컨택리스 카드</h4>
      <ul className={s.listContainer}>
        {PAYS_CONTACTLESS.map((item, idx) => (
          <li onClick={onClickToggleFilter} className={s.filterList} key={item + idx}>
            {item}
          </li>
        ))}
      </ul>
      <button className={s.filterApplyButton} onClick={onChangeFlag}>
        적용
      </button>
    </section>
  );
};

export default FilteringMenu;

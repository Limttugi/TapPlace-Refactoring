import s from './FilterFlagButton.module.scss';

import showList from '@/img/Filter/FilterFlag/show_list.webp';
import showMap from '@/img/Filter/FilterFlag/show_map.webp';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { SET_SHOW_LIST_FLAG } from '@/redux/slices/sideMenu';

const FilterFlagButton = () => {
  const dispatch = useAppDispatch();
  const { showListFlag } = useAppSelector(state => state.sideMenu);

  const onChangeFlag = () => {
    dispatch(SET_SHOW_LIST_FLAG(!showListFlag));
  };

  return (
    <button className={s.flag} onClick={onChangeFlag}>
      {showListFlag ? (
        <>
          <Image className={s.flagImg} src={showMap} alt="showList" />
          <p className={s.flagText}>지도보기</p>
        </>
      ) : (
        <>
          <Image className={s.flagImg} src={showList} alt="showList" />
          <p className={s.flagText}>목록보기</p>
        </>
      )}
    </button>
  );
};

export default FilterFlagButton;

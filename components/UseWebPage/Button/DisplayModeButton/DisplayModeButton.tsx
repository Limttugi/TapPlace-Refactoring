import s from './DisplayModeButton.module.scss';

import showList from '@/img/Filter/FilterFlag/show_list.webp';
import showMap from '@/img/Filter/FilterFlag/show_map.webp';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { SET_SHOW_LIST_FLAG } from '@/redux/slices/showMenu';

const DisplayModeButton = () => {
  const dispatch = useAppDispatch();
  const { showListFlag } = useAppSelector(state => state.showMenu);

  const handleToggleShowList = () => {
    dispatch(SET_SHOW_LIST_FLAG(!showListFlag));
  };

  return (
    <button className={s.flag} onClick={handleToggleShowList}>
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

export default DisplayModeButton;

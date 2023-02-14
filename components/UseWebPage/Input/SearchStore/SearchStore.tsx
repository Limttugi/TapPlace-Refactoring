import s from './SearchStore.module.scss';

import { ChangeEvent, useCallback, useState } from 'react';
import Image from 'next/image';
import search from '@/img/SearchInput/search_list.webp';
import search_close from '@/img/SearchInput/search_close.webp';
import { useAppDispatch } from '@/redux/hooks';
import { SET_SEARCH_WORD } from '@/redux/slices/store';

const SearchStore = () => {
  const dispatch = useAppDispatch();
  const [searchWord, setSearchWord] = useState<string>('');

  const changeSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const pressEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearchWord();
  };

  const handleSearchWord = () => {
    dispatch(SET_SEARCH_WORD(searchWord));
  };

  const handleResetSearchWord = useCallback(() => {
    dispatch(SET_SEARCH_WORD(''));
    setSearchWord('');
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Image className={s.searchImg} src={search} alt="search" />
      <input
        className={s.searchInput}
        type="text"
        placeholder="가맹점을 찾아보세요"
        value={searchWord || ''}
        onChange={changeSearchWord}
        onKeyDown={pressEnterKey}
      />
      {searchWord && <Image src={search_close} alt="searchReset" onClick={handleResetSearchWord} />}
    </div>
  );
};

export default SearchStore;

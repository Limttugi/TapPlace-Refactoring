import s from './StoreSearch.module.scss';

import { useState } from 'react';
import Image from 'next/image';
import search from '@/img/SearchInput/search_list.webp';
import search_close from '@/img/SearchInput/search_close.webp';

const StoreSearch = () => {
  const [searchWord, setSearchWord] = useState<string>();

  const onChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <div className={s.container}>
      <Image className={s.searchImg} src={search} alt="search" />
      <input
        className={s.searchInput}
        type="text"
        placeholder="가맹점을 찾아보세요"
        value={searchWord}
        onChange={onChangeWord}
      />
      {searchWord && <Image src={search_close} alt="searchReset" />}
    </div>
  );
};

export default StoreSearch;

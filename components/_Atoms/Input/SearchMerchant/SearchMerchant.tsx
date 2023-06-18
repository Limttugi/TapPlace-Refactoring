import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import Image from 'next/image';

import s from './SearchMerchantInput.module.scss';

import searchImageSrc from '@/img/SearchInput/search_list.webp';
import searchCloseImageSrc from '@/img/X.webp';
import { searchFilterAtom } from '@/recoil/atoms/filter';

const SearchMerchantInput = () => {
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilterAtom);
  const [searchWord, setSearchWord] = useState('');

  const handleChangeSearchWord = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  }, []);

  const handleSearchMerchant = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchWord === ''
        ? setSearchFilter({ isMerchantSearch: false, searchWord: '' })
        : setSearchFilter({ isMerchantSearch: true, searchWord: searchWord });
    }
  };

  const handleResetSearch = useCallback(() => {
    setSearchWord('');
    setSearchFilter({ isMerchantSearch: false, searchWord: '' });
  }, [setSearchFilter]);

  return (
    <div className={s.container}>
      <Image src={searchImageSrc} alt='가맹점 검색 버튼 이미지' />
      <input
        type='text'
        placeholder='가맹점을 찾아보세요'
        value={searchWord}
        onChange={handleChangeSearchWord}
        onKeyUp={handleSearchMerchant}
      />
      {searchFilter.searchWord && (
        <button type='button'>
          <Image
            className={s.closeButton}
            src={searchCloseImageSrc}
            alt='가맹점 검색 취소 버튼 이미지'
            onClick={handleResetSearch}
          />
        </button>
      )}
    </div>
  );
};

export default SearchMerchantInput;

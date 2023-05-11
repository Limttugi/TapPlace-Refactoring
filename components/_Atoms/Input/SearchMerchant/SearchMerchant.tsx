import Image from 'next/image';
import s from './SearchMerchantInput.module.scss';

import searchImageSrc from '@/img/SearchInput/search_list.webp';

const SearchMerchantInput = () => {
  return (
    <div className={s.container}>
      <Image src={searchImageSrc} alt='' />
      <input type='text' placeholder='가맹점을 찾아보세요' />
    </div>
  );
};

export default SearchMerchantInput;

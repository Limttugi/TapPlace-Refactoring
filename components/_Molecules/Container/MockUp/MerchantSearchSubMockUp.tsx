import s from './MerchantSearchSubMockUp.module.scss';

import {
  MerchantSearchSubImage_1,
  MerchantSearchSubImage_2,
} from '@/components/_Atoms/Image/MockUp/MerchantSearch/MerchantSearch';

const MerchantSearchSubMockUpContainer = () => {
  return (
    <div className={s.wrapper}>
      <MerchantSearchSubImage_1 />
      <MerchantSearchSubImage_2 />
    </div>
  );
};

export default MerchantSearchSubMockUpContainer;

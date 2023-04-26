import s from './MerchantSearch_SubMockUp_Container.module.scss';

import {
  MerchantSearch_SubMockUp_1_Image,
  MerchantSearch_SubMockUp_2_Image,
} from '@/components/_Atoms/Image/MockUp/MerchantSearch_MockUp_Image';

const MerchantSearch_SubMockUp_Container = () => {
  return (
    <div className={s.wrapper}>
      <MerchantSearch_SubMockUp_1_Image />
      <MerchantSearch_SubMockUp_2_Image />
    </div>
  );
};

export default MerchantSearch_SubMockUp_Container;

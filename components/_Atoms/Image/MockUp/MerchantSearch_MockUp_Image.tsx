import Image from 'next/image';

import s from './MerchantSearch_MockUp_Image.module.scss';

import MerchantSearch_MockUp_ImageSrc from '@/img/MockUp/MerchantSearch_MockUp_Image.webp';
import MerchantSearch_SubMockUp_1_ImageSrc from '@/img/MockUp/MerchantSearch_SubMockUp_1_Image.webp';
import MerchantSearch_SubMockUp_2_ImageSrc from '@/img/MockUp/MerchantSearch_SubMockUp_2_Image.webp';

const MerchantSearch_MockUp_Image = () => {
  return <Image className={`${s.img}`} src={MerchantSearch_MockUp_ImageSrc} alt='MerchantSearchMockUpImage' />;
};

const MerchantSearch_SubMockUp_1_Image = () => {
  return <Image className={s.subImg} src={MerchantSearch_SubMockUp_1_ImageSrc} alt='MerchantSearchSubMockUpImage_1' />;
};

const MerchantSearch_SubMockUp_2_Image = () => {
  return <Image className={s.subImg} src={MerchantSearch_SubMockUp_2_ImageSrc} alt='MerchantSearchSubMockUpImage_2' />;
};

export { MerchantSearch_MockUp_Image, MerchantSearch_SubMockUp_1_Image, MerchantSearch_SubMockUp_2_Image };

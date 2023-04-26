import Image from 'next/image';

import s from './MerchantSearch.module.scss';

import MerchantSearchImageSrc from '@/img/MockUp/MerchantSearch_MockUp_Image.webp';
import MerchantSearchSubImageSrc_1 from '@/img/MockUp/MerchantSearch_SubMockUp_1_Image.webp';
import MerchantSearchSubImageSrc_2 from '@/img/MockUp/MerchantSearch_SubMockUp_2_Image.webp';

const MerchantSearchImage = () => {
  return <Image className={`${s.img}`} src={MerchantSearchImageSrc} alt='MerchantSearchMockUpImage' />;
};

const MerchantSearchSubImage_1 = () => {
  return <Image className={s.subImg} src={MerchantSearchSubImageSrc_1} alt='MerchantSearchSubMockUpImage_1' />;
};

const MerchantSearchSubImage_2 = () => {
  return <Image className={s.subImg} src={MerchantSearchSubImageSrc_2} alt='MerchantSearchSubMockUpImage_2' />;
};

export { MerchantSearchImage, MerchantSearchSubImage_1, MerchantSearchSubImage_2 };

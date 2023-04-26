import Image from 'next/image';

import s from './FeedbackPayment_MockUp_Image.module.scss';

import FeedbackPayment_MockUp_ImageSrc from '@/img/MockUp/FeedBackOnPayment_MockUp_Image.webp';
import FeedBackOnPayment_SubMockUp_ImageSrc from '@/img/MockUp/FeedBackOnPayment_SubMockUp_Image.webp';

const FeedbackPayment_MockUp_Image = () => {
  return (
    <Image className={`${s.img} ${s.right}`} src={FeedbackPayment_MockUp_ImageSrc} alt='MerchantSearchMockUpImage' />
  );
};

const FeedbackPayment_SubMockUp_Image = () => {
  return <Image className={s.subImg} src={FeedBackOnPayment_SubMockUp_ImageSrc} alt='MerchantSearchMockUpImage' />;
};

export { FeedbackPayment_MockUp_Image, FeedbackPayment_SubMockUp_Image };

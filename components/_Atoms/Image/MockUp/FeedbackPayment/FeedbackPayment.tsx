import Image from 'next/image';

import s from './FeedbackPayment.module.scss';

import FeedbackPaymentImageSrc from '@/img/MockUp/FeedBackOnPayment_MockUp_Image.webp';
import FeedBackOnPaymentSubImageSrc from '@/img/MockUp/FeedBackOnPayment_SubMockUp_Image.webp';

const FeedbackPaymentImage = () => {
  return (
    <Image className={`${s.img} ${s.right}`} src={FeedbackPaymentImageSrc} alt='MerchantSearchMockUpImage' priority />
  );
};

const FeedbackPaymentSubImage = () => {
  return <Image className={s.subImg} src={FeedBackOnPaymentSubImageSrc} alt='MerchantSearchMockUpImage' />;
};

export { FeedbackPaymentImage, FeedbackPaymentSubImage };

import Image from 'next/image';

import s from './Payment.module.scss';

import appleImageSrc from '@/img/Logo/Payment/Rectangle/apple.webp';
import contactlessImageSrc from '@/img/Logo/Payment/Rectangle/contactless.webp';
import googleImageSrc from '@/img/Logo/Payment/Rectangle/google.webp';
import kakaoImageSrc from '@/img/Logo/Payment/Rectangle/kakao.webp';
import naverImageSrc from '@/img/Logo/Payment/Rectangle/naver.webp';
import paycoImageSrc from '@/img/Logo/Payment/Rectangle/payco.webp';
import zeroImageSrc from '@/img/Logo/Payment/Rectangle/zero.webp';

interface PaymentImage_I {
  payment: 'apple' | 'contactless' | 'google' | 'kakao' | 'naver' | 'payco' | 'zero';
}

const PaymentImage = ({ payment }: PaymentImage_I) => {
  const src = {
    apple: appleImageSrc,
    contactless: contactlessImageSrc,
    google: googleImageSrc,
    kakao: kakaoImageSrc,
    naver: naverImageSrc,
    payco: paycoImageSrc,
    zero: zeroImageSrc,
  };

  return <Image className={s.paymentImage} src={src[payment]} alt='paymentImage' />;
};

export default PaymentImage;

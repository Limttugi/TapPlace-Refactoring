import Image, { StaticImageData } from 'next/image';

import s from './Payment.module.scss';

import appleImageSrc from '@/img/Logo/Payment/Rectangle/apple.webp';
import contactlessImageSrc from '@/img/Logo/Payment/Rectangle/contactless.webp';
import googleImageSrc from '@/img/Logo/Payment/Rectangle/google.webp';
import kakaoImageSrc from '@/img/Logo/Payment/Rectangle/kakao.webp';
import naverImageSrc from '@/img/Logo/Payment/Rectangle/naver.webp';
import paycoImageSrc from '@/img/Logo/Payment/Rectangle/payco.webp';
import zeroImageSrc from '@/img/Logo/Payment/Rectangle/zero.webp';

interface PaymentImage_I {
  payment: string;
}

interface SrcType {
  [key: string]: StaticImageData;
}

const PaymentImage = ({ payment }: PaymentImage_I) => {
  const src: SrcType = {
    kakaopay: kakaoImageSrc,
    naverpay: naverImageSrc,
    payco: paycoImageSrc,
    zeropay: zeroImageSrc,
    apple: appleImageSrc,
    google: googleImageSrc,
    conless: contactlessImageSrc,
  };

  return <Image className={s.paymentImage} src={src[payment]} alt='paymentImage' />;
};

export default PaymentImage;

import { StaticImageData } from 'next/image';

import appleImageSrc from '@/img/Logo/Payment/Rectangle/apple.webp';
import contactlessImageSrc from '@/img/Logo/Payment/Rectangle/contactless.webp';
import googleImageSrc from '@/img/Logo/Payment/Rectangle/google.webp';
import kakaoImageSrc from '@/img/Logo/Payment/Rectangle/kakao.webp';
import naverImageSrc from '@/img/Logo/Payment/Rectangle/naver.webp';
import paycoImageSrc from '@/img/Logo/Payment/Rectangle/payco.webp';
import zeroImageSrc from '@/img/Logo/Payment/Rectangle/zero.webp';

interface IMAGE_SRC_I {
  [key: string]: StaticImageData;
}

export const PAYMENT_SRC: IMAGE_SRC_I = {
  kakaopay: kakaoImageSrc,
  naverpay: naverImageSrc,
  payco: paycoImageSrc,
  zeropay: zeroImageSrc,
  apple: appleImageSrc,
  google: googleImageSrc,
  conless: contactlessImageSrc,
};

interface MARKER_SRC_I {
  [key: string]: string;
}

export const MARKER_SRC: MARKER_SRC_I = {
  음식점: '/img/Marker/restaurant.webp',
  카페: '/img/Marker/cafe.webp',
  편의점: '/img/Marker/convenienceStore.webp',
  마트: '/img/Marker/mart.webp',
  주유소: '/img/Marker/gasStation.webp',
  주차장: '/img/Marker/parking.webp',
  병원: '/img/Marker/hospital.webp',
  약국: '/img/Marker/drugstore.webp',
  숙박: '/img/Marker/accommodation.webp',
  공공기관: '/img/Marker/institutions.webp',
  기타: '/img/Marker/etc.webp',
  '': '/img/Marker/etc.webp',
};

export const PAYMENT_FEEDBACK_SRC: IMAGE_SRC_I = {
  kakaopay: kakaoImageSrc,
  naverpay: naverImageSrc,
  payco: paycoImageSrc,
  zeropay: zeroImageSrc,
  apple_visa: appleImageSrc,
  apple_master: appleImageSrc,
  apple_jcb: appleImageSrc,
  apple_amex: appleImageSrc,
  google_visa: googleImageSrc,
  google_master: googleImageSrc,
  google_maestro: googleImageSrc,
  google_amex: googleImageSrc,
  conless_visa: contactlessImageSrc,
  conless_master: contactlessImageSrc,
  conless_union: contactlessImageSrc,
  conless_jcb: contactlessImageSrc,
  conless_amex: contactlessImageSrc,
};

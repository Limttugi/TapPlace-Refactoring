import { StaticImageData } from 'next/image';

import appleImageSrc from '@/img/Logo/Payment/Rectangle/apple.webp';
import contactlessImageSrc from '@/img/Logo/Payment/Rectangle/contactless.webp';
import googleImageSrc from '@/img/Logo/Payment/Rectangle/google.webp';
import kakaoImageSrc from '@/img/Logo/Payment/Rectangle/kakao.webp';
import naverImageSrc from '@/img/Logo/Payment/Rectangle/naver.webp';
import paycoImageSrc from '@/img/Logo/Payment/Rectangle/payco.webp';
import zeroImageSrc from '@/img/Logo/Payment/Rectangle/zero.webp';

interface PAYMENT_SRC_I {
  [key: string]: StaticImageData;
}

export const PAYMENT_SRC: PAYMENT_SRC_I = {
  kakaopay: kakaoImageSrc,
  naverpay: naverImageSrc,
  payco: paycoImageSrc,
  zeropay: zeroImageSrc,
  apple: appleImageSrc,
  google: googleImageSrc,
  conless: contactlessImageSrc,
};

interface MARKER_SRC_I {
  [key: string]: Array<string>;
}

export const MARKER_SRC: MARKER_SRC_I = {
  음식점: ['/img/Marker/restaurant.webp', '/img/Marker/restaurant_big.webp'],
  카페: ['/img/Marker/cafe.webp', '/img/Marker/cafe_big.webp'],
  편의점: ['/img/Marker/convenienceStore.webp', '/img/Marker/convenienceStore_big.webp'],
  마트: ['/img/Marker/mart.webp', '/img/Marker/mart_big.webp'],
  주유소: ['/img/Marker/gasStation.webp', '/img/Marker/gasStation_big.webp'],
  주차장: ['/img/Marker/parking.webp', '/img/Marker/parking_big.webp'],
  병원: ['/img/Marker/hospital.webp', '/img/Marker/hospital_big.webp'],
  약국: ['/img/Marker/drugstore.webp', '/img/Marker/drugstore_big.webp'],
  숙박: ['/img/Marker/accommodation.webp', '/img/Marker/accommodation_big.webp'],
  공공기관: ['/img/Marker/institutions.webp', '/img/Marker/institutions_big.webp'],
  기타: ['/img/Marker/etc.webp', '/img/Marker/etc_big.webp'],
  '': ['/img/Marker/etc.webp', '/img/Marker/etc_big.webp'],
};

// export const PAYMENT_DETAIL_SRC = {
//   kakaopay: '',
//   naverpay: '',
//   payco: '',
//   zeropay: '',
//   apple_visa: '',
//   apple_master: '',
//   apple_jcb: '',
//   apple_amex: '',
//   google_visa: '',
//   google_master: '',
//   google_maestro: '',
//   google_amex: '',
//   conless_visa: '',
//   conless_master: '',
//   conless_union: '',
//   conless_jcb: '',
//   conless_amex: '',
// };

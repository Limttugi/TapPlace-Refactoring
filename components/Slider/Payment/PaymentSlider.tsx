import s from './PaymentSlider.module.scss';

import Image from 'next/image';
import visa from '@/img/Logo/Payment/visa.webp';
import payco from '@/img/Logo/Payment/payco.webp';
import apple from '@/img/Logo/Payment/apple.webp';
import zero from '@/img/Logo/Payment/zero.webp';
import google from '@/img/Logo/Payment/google.webp';
import kakao from '@/img/Logo/Payment/kakao.webp';
import naver from '@/img/Logo/Payment/naver.webp';
import master from '@/img/Logo/Payment/master.webp';
import { useAppSelector } from '@/redux/hooks';

const PaymentSlider = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <div className={s.container}>
      <Image className={s.image} src={visa} alt='paymentLogo_visa' />
      <Image className={s.image} src={payco} alt='paymentLogo_payco' />
      <Image className={s.image} src={apple} alt='paymentLogo_apple' />
      <Image className={s.image} src={zero} alt='paymentLogo_zero' />
      <Image className={s.image} src={google} alt='paymentLogo_google' />
      <Image className={s.image} src={kakao} alt='paymentLogo_kakao' />
      <Image className={s.image} src={naver} alt='paymentLogo_naver' />
      <Image className={s.image} src={master} alt='paymentLogo_master' />
      {viewType !== 'MOBILE' && (
        <>
          <Image className={s.image} src={visa} alt='paymentLogo_visa' />
          <Image className={s.image} src={payco} alt='paymentLogo_payco' />
          <Image className={s.image} src={apple} alt='paymentLogo_apple' />
          <Image className={s.image} src={zero} alt='paymentLogo_zero' />
          <Image className={s.image} src={google} alt='paymentLogo_google' />
          <Image className={s.image} src={kakao} alt='paymentLogo_kakao' />
          <Image className={s.image} src={naver} alt='paymentLogo_naver' />
          <Image className={s.image} src={master} alt='paymentLogo_master' />
        </>
      )}
    </div>
  );
};

export default PaymentSlider;

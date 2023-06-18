import Image from 'next/image';
import { useRecoilValue } from 'recoil';

import s from './Payment.module.scss';

import PaymentSliderText from '@/components/_Atoms/Text/PaymentSlider/PaymentSlider';
import { PAYMENT_SLIDER, PAYMENT_SLIDER_IMAGE_SRC } from '@/constants/IMAGE_SOURCE';
import { breakpointState } from '@/recoil/atoms/breakpoint';

const PaymentSlider = () => {
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <div>
      <PaymentSliderText />
      <div className={s.container}>
        {PAYMENT_SLIDER.map(payment => {
          return (
            <Image
              key={payment}
              className={s.image}
              src={PAYMENT_SLIDER_IMAGE_SRC[payment]}
              alt={`${payment} 슬라이드 이미지`}
            />
          );
        })}
        {BREAKPOINT !== 'MOBILE' && (
          <>
            {PAYMENT_SLIDER.map(payment => {
              return (
                <Image
                  key={payment}
                  className={s.image}
                  src={PAYMENT_SLIDER_IMAGE_SRC[payment]}
                  alt={`${payment} 슬라이드 이미지`}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSlider;

import s from './DisplayPayment.module.scss';

import { useAppSelector } from '@/redux/hooks';
import PaymentSlider from '@/components/Slider/Payment/PaymentSlider';

const DisplayPayment = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <section className={s.container}>
      <p className={s.text_line_2}>
        {viewType === 'MOBILE' ? (
          <>
            탭플레이스와 함께라면
            <br />이 모든 간편결제 가맹점을
            <br />
            쉽게 확인할 수 있어요
          </>
        ) : viewType === 'TABLET' ? (
          <>
            탭플레이스와 함께라면
            <br />이 모든 간편결제 가맹점을 쉽게 확인할 수 있어요
          </>
        ) : (
          viewType === 'DESKTOP' && '탭플레이스와 함께라면 이 모든 간편결제 가맹점을 쉽게 확인할 수 있어요'
        )}
      </p>
      <PaymentSlider />
    </section>
  );
};

export default DisplayPayment;

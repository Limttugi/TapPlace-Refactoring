import { useAppSelector } from '@/redux/hooks';
import s from '@/styles/components/Container/DisplayPayment.module.scss';
import PaymentGroup from '../Payment/PaymentGroup';

const DisplayPayment = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <article className={s.container}>
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
      <PaymentGroup />
    </article>
  );
};

export default DisplayPayment;

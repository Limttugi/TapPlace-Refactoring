import { useRecoilValue } from 'recoil';

import s from './PaymentSlider.module.scss';

import { breakpointState } from '@/recoil/atoms/breakpoint';

const PaymentSliderText = () => {
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <div className={s.text}>
      탭플레이스와 함께라면&nbsp;{BREAKPOINT !== 'DESKTOP' && <br />}이 모든 간편결제 가맹점을 &nbsp;
      {BREAKPOINT === 'MOBILE' && <br />}
      쉽게 확인할 수 있어요
    </div>
  );
};

export default PaymentSliderText;

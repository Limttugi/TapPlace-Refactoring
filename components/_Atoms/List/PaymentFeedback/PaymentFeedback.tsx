import Image from 'next/image';

import s from './PaymentFeedback.module.scss';

import { FeedbackInfo_I } from '@/types/merchant';
import { PAYMENT_FEEDBACK_SRC } from '@/constants/IMAGE_SOURCE';
import { FEEDBACK_PAY_NAME } from '@/constants/PAYS';

const PaymentFeedbackList = ({ feedback }: { feedback: FeedbackInfo_I }) => {
  const { pay, last_state, last_time, success, fail } = feedback;

  const SUCCESS_PERCENT = Math.round((100 / success + fail) * success);
  const FAILURE_PERCENT = Math.round((100 / success + fail) * fail);
  const LAST_TIME = last_time.split(' ')[0];
  const LAST_STATE_FLAG = last_state === 'success';

  return (
    <li className={s.container}>
      <div className={s.paymentWrapper}>
        <Image className={s.paymentImage} src={PAYMENT_FEEDBACK_SRC[pay]} alt='paymentImage' />
        <h5 className={s.paymentName}>{FEEDBACK_PAY_NAME[pay]}</h5>
      </div>
      <div className={s.currentFeedbackWrapper}>
        <span className={LAST_STATE_FLAG ? `${s.success}` : `${s.fail}`}>
          최근결제: {LAST_STATE_FLAG ? '성공' : '실패'}
        </span>
        <time>{LAST_TIME}</time>
      </div>
      <progress className={s.progress} value={SUCCESS_PERCENT} max={100} />
      <ul className={s.progressPercent}>
        <li>성공 {SUCCESS_PERCENT}%</li>
        <li>실패 {FAILURE_PERCENT}%</li>
      </ul>
    </li>
  );
};

export default PaymentFeedbackList;

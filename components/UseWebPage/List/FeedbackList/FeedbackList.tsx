import s from './FeedbackList.module.scss';

import apple from '@/img/Logo/Payment/Rectangle/apple.webp';
import contactless from '@/img/Logo/Payment/Rectangle/contactless.webp';
import google from '@/img/Logo/Payment/Rectangle/google.webp';
import kakao from '@/img/Logo/Payment/Rectangle/kakao.webp';
import naver from '@/img/Logo/Payment/Rectangle/naver.webp';
import payco from '@/img/Logo/Payment/Rectangle/payco.webp';
import zero from '@/img/Logo/Payment/Rectangle/zero.webp';
import { feedbackI } from '@/redux/slices/store';
import Image from 'next/image';

const FeedbackList = ({ feedback }: feedbackI | any) => {
  const all = feedback.success + feedback.fail;
  const success = Math.round((100 / all) * feedback.success);
  const failure = Math.round((100 / all) * feedback.fail);

  return (
    <li className={s.container}>
      <div className={s.paymentWrapper}>
        {feedback.pay === 'kakaopay' ? (
          <>
            <Image className={s.paymentLogo} src={kakao} alt="logo" />
            <p className={s.paymentKind}>카카오페이</p>
          </>
        ) : feedback.pay === 'naverpay' ? (
          <>
            <Image className={s.paymentLogo} src={naver} alt="logo" />
            <p className={s.paymentKind}>네이버페이</p>
          </>
        ) : feedback.pay === 'payco' ? (
          <>
            <Image className={s.paymentLogo} src={payco} alt="logo" />
            <p className={s.paymentKind}>페이코페이</p>
          </>
        ) : feedback.pay === 'zeropay' ? (
          <>
            <Image className={s.paymentLogo} src={zero} alt="logo" />
            <p className={s.paymentKind}>제로페이</p>
          </>
        ) : feedback.pay === 'apple_visa' ? (
          <>
            <Image className={s.paymentLogo} src={apple} alt="logo" />
            <p className={s.paymentKind}>애플페이 - VISA</p>
          </>
        ) : feedback.pay === 'apple_master' ? (
          <>
            <Image className={s.paymentLogo} src={apple} alt="logo" />
            <p className={s.paymentKind}>애플페이 - MASTER</p>
          </>
        ) : feedback.pay === 'apple_jcb' ? (
          <>
            <Image className={s.paymentLogo} src={apple} alt="logo" />
            <p className={s.paymentKind}>애플페이 - JCB</p>
          </>
        ) : feedback.pay === 'conless_visa' ? (
          <>
            <Image className={s.paymentLogo} src={contactless} alt="logo" />
            <p className={s.paymentKind}>컨택리스 - VISA</p>
          </>
        ) : feedback.pay === 'conless_master' ? (
          <>
            <Image className={s.paymentLogo} src={contactless} alt="logo" />
            <p className={s.paymentKind}>컨택리스 - MASTER</p>
          </>
        ) : feedback.pay === 'conless_amex' ? (
          <>
            <Image className={s.paymentLogo} src={contactless} alt="logo" />
            <p className={s.paymentKind}>컨택리스 - AMEX</p>
          </>
        ) : feedback.pay === 'conless_union' ? (
          <>
            <Image className={s.paymentLogo} src={contactless} alt="logo" />
            <p className={s.paymentKind}>컨택리스 - UNION</p>
          </>
        ) : feedback.pay === 'conless_jcb' ? (
          <>
            <Image className={s.paymentLogo} src={contactless} alt="logo" />
            <p className={s.paymentKind}>컨택리스 - JCB</p>
          </>
        ) : feedback.pay === 'google_visa' ? (
          <>
            <Image className={s.paymentLogo} src={google} alt="logo" />
            <p className={s.paymentKind}>구글페이 - VISA</p>
          </>
        ) : feedback.pay === 'google_master' ? (
          <>
            <Image className={s.paymentLogo} src={google} alt="logo" />
            <p className={s.paymentKind}>구글페이 - MASTER</p>
          </>
        ) : (
          feedback.pay === 'google_maestro' && (
            <>
              <Image className={s.paymentLogo} src={google} alt="logo" />
              <p className={s.paymentKind}>구글페이 - MAESTRO</p>
            </>
          )
        )}
      </div>
      <div className={s.currentDateWrapper}>
        <p className={feedback.exist ? `${s.currentSuccess}` : `${s.currentFailure}`}>
          최근결제: {feedback.exist ? '성공' : '실패'}
        </p>
        <p className={s.date}>2022.08.20</p>
      </div>
      <progress className={s.percentProgressbar} value={success} max="100"></progress>
      <div className={s.percentContainer}>
        <p>성공 {success}%</p>
        <p>실패 {failure}%</p>
      </div>
    </li>
  );
};

export default FeedbackList;

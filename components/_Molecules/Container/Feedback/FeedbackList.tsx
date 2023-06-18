import { useRecoilValueLoadable } from 'recoil';

import s from './FeedbackList.module.scss';

import { FeedbackInfo_I } from '@/types/merchant';
import PaymentFeedbackList from '@/components/_Atoms/List/PaymentFeedback/PaymentFeedback';
import { clickedMerchantFeedbackSelector } from '@/recoil/selector/merchant';
import LoadingSpinner from '@/components/_Atoms/LoadingSpinner/LoadingSpinner';

const FeedbackListContainer = () => {
  const { state, contents: feedbacks } = useRecoilValueLoadable(clickedMerchantFeedbackSelector);

  switch (state) {
    case 'hasValue':
      return (
        <ul className={s.container}>
          <h4 className={s.title}>결제수단</h4>
          {feedbacks.map((feedback: FeedbackInfo_I) => {
            if (feedback.exist) return <PaymentFeedbackList key={feedback.num + 'feedback'} feedback={feedback} />;
          })}
        </ul>
      );
    case 'loading':
      return <LoadingSpinner type='default' />;
    case 'hasError':
      console.error(feedbacks);
      throw feedbacks;
  }
};

export default FeedbackListContainer;

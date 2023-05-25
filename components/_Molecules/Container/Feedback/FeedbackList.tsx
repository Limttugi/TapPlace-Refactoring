import s from './FeedbackList.module.scss';

import { FeedbackInfo_I } from '@/types/merchant';
import PaymentFeedbackList from '@/components/_Atoms/List/PaymentFeedback/PaymentFeedback';

const FeedbackListContainer = ({ feedbacks }: { feedbacks: Array<FeedbackInfo_I> }) => {
  return (
    <ul className={s.container}>
      <h4 className={s.title}>결제수단</h4>
      {feedbacks.map(feedback => {
        if (feedback.exist) return <PaymentFeedbackList key={feedback.num + 'feedback'} feedback={feedback} />;
      })}
    </ul>
  );
};

export default FeedbackListContainer;

import s from './FeedbackInApp.module.scss';

import { handleOpenAppStore } from '@/utils/handleOpenAppStore';

const FeedbackInAppButton = () => {
  return (
    <button className={s.button} onClick={handleOpenAppStore}>
      앱에서 사용여부 피드백하기
    </button>
  );
};

export default FeedbackInAppButton;

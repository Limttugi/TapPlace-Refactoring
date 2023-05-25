import s from './FeedbackInApp.module.scss';

const FeedbackInAppButton = () => {
  const handleOpenAppStore = () => {
    window.open('https://apps.apple.com/app/%ED%83%AD%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4/id1643830783');
  };

  return (
    <button className={s.button} onClick={handleOpenAppStore}>
      앱에서 사용여부 피드백하기
    </button>
  );
};

export default FeedbackInAppButton;

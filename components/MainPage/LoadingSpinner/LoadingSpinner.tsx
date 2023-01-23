import s from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={s.container}>
      <div className={s.spinnerWrapper}>
        <div className={s.spinner}></div>
      </div>
      <p className={s.text}>
        위치
        <br />
        로딩중
      </p>
    </div>
  );
};

export default LoadingSpinner;

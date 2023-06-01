import s from './LoadingSpinner.module.scss';

const LoadingSpinner = ({ type }: { type: 'location' | 'default' }) => {
  return (
    <div className={s.container}>
      <div className={s.spinnerWrapper}>
        <div className={s.spinner}></div>
      </div>
      <p className={s.text}>
        {type === 'default' ? (
          <>로딩중</>
        ) : (
          <>
            위치
            <br />
            로딩중
          </>
        )}
      </p>
    </div>
  );
};

export default LoadingSpinner;

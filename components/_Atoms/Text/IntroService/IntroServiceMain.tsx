import s from './IntroServiceMain.module.scss';

const IntroServiceMainText = () => {
  return (
    <div className={s.text}>
      <h2 className='a11y-hidden'>서비스 소개</h2>
      간편결제 가맹점 확인
      <br />
      한곳에서 간편하게
    </div>
  );
};

export default IntroServiceMainText;

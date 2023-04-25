import s from './MainSection_Text_Line_1.module.scss';

interface MainSection_Text_Line_1_I {}

const MainSection_Text_Line_1 = () => {
  return (
    <h3 className={s.text}>
      간편결제 가맹점 확인
      <br />
      한곳에서 간편하게
    </h3>
  );
};

export default MainSection_Text_Line_1;

import s from './SubSection_Line1_Text.module.scss';

interface SubSection_Line1_Text_I {
  text: Array<string | JSX.Element>;
}

const SubSection_Line1_Text = ({ text }: SubSection_Line1_Text_I) => {
  return <div className={s.text}>{text}</div>;
};

export default SubSection_Line1_Text;

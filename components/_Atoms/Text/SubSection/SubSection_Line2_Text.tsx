import s from './SubSection_Line2_Text.module.scss';

interface SubSection_Line2_Text_I {
  text: Array<string | JSX.Element>;
}

const SubSection_Line2_Text = ({ text }: SubSection_Line2_Text_I) => {
  return <p className={s.text}>{text}</p>;
};

export default SubSection_Line2_Text;

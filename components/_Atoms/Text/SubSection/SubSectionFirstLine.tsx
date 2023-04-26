import s from './SubSectionFirstLine.module.scss';

interface SubSectionFirstLineText_I {
  text: Array<string | JSX.Element>;
}

const SubSectionFirstLineText = ({ text }: SubSectionFirstLineText_I) => {
  return <div className={s.text}>{text}</div>;
};

export default SubSectionFirstLineText;

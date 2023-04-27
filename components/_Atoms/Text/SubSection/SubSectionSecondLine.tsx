import s from './SubSectionSecondLine.module.scss';

interface SubSectionSecondLineText_I {
  text: Array<string | JSX.Element> | string;
}

const SubSectionSecondLineText = ({ text }: SubSectionSecondLineText_I) => {
  return <p className={s.text}>{text}</p>;
};

export default SubSectionSecondLineText;

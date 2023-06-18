import { ReactNode } from 'react';

import s from './SubSectionSecondLine.module.scss';

interface SubSectionSecondLineText_I {
  children: ReactNode;
}

const SubSectionSecondLineText = ({ children }: SubSectionSecondLineText_I) => {
  return <p className={s.text}>{children}</p>;
};

export default SubSectionSecondLineText;

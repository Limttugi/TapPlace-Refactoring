import { ReactNode } from 'react';

import s from './SubSectionFirstLine.module.scss';

interface SubSectionFirstLineText_I {
  children: ReactNode;
}

const SubSectionFirstLineText = ({ children }: SubSectionFirstLineText_I) => {
  return <div className={s.text}>{children}</div>;
};

export default SubSectionFirstLineText;

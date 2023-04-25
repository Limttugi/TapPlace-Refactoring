import s from './MainTemplates.module.scss';

import Header from '@/components/_Organisms/Header/Header';
import { useAppSelector } from '@/redux/hooks';

interface MainTemplates_I {
  children: React.ReactNode;
}

const MainTemplates = ({ children }: MainTemplates_I) => {
  return (
    <>
      <Header />
      <main className={s.mainContainer}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default MainTemplates;

import s from './AppLayout.module.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={s.mainContainer}>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;

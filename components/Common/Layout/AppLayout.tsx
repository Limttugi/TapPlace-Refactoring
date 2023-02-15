import s from './AppLayout.module.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const pathname: string = useRouter().pathname;

  return (
    <>
      <Header />
      <main className={pathname !== '/useweb' ? `${s._mainContainer}` : `${s.mainContainer}`}>{children}</main>
      {pathname !== '/useweb' && <Footer />}
    </>
  );
};

export default AppLayout;

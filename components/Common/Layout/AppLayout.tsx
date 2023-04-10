import s from './AppLayout.module.scss';

import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '@/components/_Organisms/Header/Header';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const pathname: string = useRouter().pathname;
  const [userAgent, setUserAgent] = useState<boolean>();

  useEffect(() => {
    setUserAgent(!navigator.userAgent.includes('TAPPLACE_APP'));
  }, []);

  return (
    <>
      {/* {userAgent && <Header />} */}
      <Header />
      <main className={pathname !== '/useweb' ? `${s._mainContainer}` : `${s.mainContainer}`}>{children}</main>
      {pathname !== '/useweb' && userAgent && <Footer />}
    </>
  );
};

export default AppLayout;

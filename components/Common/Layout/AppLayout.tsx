import s from './AppLayout.module.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  // const [userAgent, setUserAgent] = useState<boolean | null>(null);
  const pathname: string = useRouter().pathname;

  // useEffect(() => {
  //   setUserAgent(window.navigator.userAgent.includes('TAPPLACE_APP'));
  // }, []);

  return (
    <>
      <Header />
      <main className={pathname !== '/useweb' ? `${s._mainContainer}` : `${s.mainContainer}`}>{children}</main>
      {pathname !== '/useweb' && <Footer />}
    </>
  );
};

// AppLayout.getInitialProps = async ({ req }: any) => {
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
//   return { userAgent };
// };

export default AppLayout;

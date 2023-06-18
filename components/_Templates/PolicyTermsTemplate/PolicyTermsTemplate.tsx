import { ReactNode } from 'react';

import s from './PolicyTermsTemplate.module.scss';

import Header from '@/components/_Organisms/Header/Header';
import Footer from '@/components/_Organisms/Footer/Footer';

interface PolicyTermsTemplate_I {
  children: ReactNode;
}

const PolicyTermsTemplate = ({ children }: PolicyTermsTemplate_I) => {
  const userAgent = window.navigator.userAgent.includes('TAPPLACE_APP');

  return (
    <>
      {!userAgent && <Header />}
      <main className={s.mainContainer}>{children}</main>
      {!userAgent && <Footer />}
    </>
  );
};

export default PolicyTermsTemplate;

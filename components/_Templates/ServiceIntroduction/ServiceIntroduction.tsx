import Footer from '@/components/_Organisms/Footer/Footer';
import s from './ServiceIntroduction.module.scss';

import Header from '@/components/_Organisms/Header/Header';

interface ServiceIntroductionTemplate_I {
  children: React.ReactNode;
}

const ServiceIntroductionTemplate = ({ children }: ServiceIntroductionTemplate_I) => {
  return (
    <>
      <Header />
      <main className={s.mainContainer}>{children}</main>
      <Footer />
    </>
  );
};

export default ServiceIntroductionTemplate;

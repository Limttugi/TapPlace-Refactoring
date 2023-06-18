import s from './UseWeb.module.scss';

import Header from '@/components/_Organisms/Header/Header';

interface UseWebTemplate_I {
  children: React.ReactNode;
}

const UseWebTemplate = ({ children }: UseWebTemplate_I) => {
  return (
    <>
      <Header />
      <main className={s.mainContainer}>{children}</main>
    </>
  );
};

export default UseWebTemplate;

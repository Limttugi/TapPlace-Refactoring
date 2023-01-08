import Header from '../Header/Header';

interface childrenI {
  children: React.ReactNode;
}

const AppLayout = ({ children }: childrenI) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AppLayout;

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const pathname: string = useRouter().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;

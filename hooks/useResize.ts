import { breakpointState } from '@/recoil/atoms/breakpoint';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const useResize = () => {
  const SET_BREAKPOINT = useSetRecoilState(breakpointState);

  useEffect(() => {
    const resizeWindow = () => {
      const width = window.innerWidth;

      if (width < 768) SET_BREAKPOINT('MOBILE');
      else if (width >= 768 && width < 1024) SET_BREAKPOINT('TABLET');
      else SET_BREAKPOINT('DESKTOP');
    };

    window.addEventListener('resize', resizeWindow);

    return () => window.removeEventListener('resize', resizeWindow);
  }, [SET_BREAKPOINT]);
};

export default useResize;

import { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import wrapper from '@/redux/store';

import '@/styles/globals.scss';

import { useAppDispatch } from '@/redux/hooks';
import setViewType from '@/utils/setViewType';
import GlobalContext, { GlobalContextValue } from '@/context/GlobalContext';
import { SET_VIEW_TYPE } from '@/redux/slices/viewType';

function App({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();

  // Window Reszie 이벤트 추가
  useEffect(() => {
    const width = window.innerWidth;
    // dispatch(SET_VIEW_TYPE(setViewType(width)));
    dispatch(SET_VIEW_TYPE(width));

    const resizeWindow = () => {
      const width = window.innerWidth;
      // dispatch(SET_VIEW_TYPE(setViewType(width)));
      dispatch(SET_VIEW_TYPE(width));
    };

    window.addEventListener('resize', resizeWindow);

    return () => window.removeEventListener('resize', resizeWindow);
  });

  return (
    <>
      <Head>
        <title>TapPlace</title>
        <link rel='icon' href='/img/Logo/tapplace_icon.webp' />
      </Head>
      <GlobalContext.Provider value={GlobalContextValue}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

export default wrapper.withRedux(App);

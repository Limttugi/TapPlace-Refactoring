import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppLayout from '@/components/Layout/AppLayout';

import '@/styles/globals.scss';
import wrapper from '@/redux/store';
import { useAppDispatch } from '@/redux/hooks';
import { useEffect } from 'react';
import { SET_VIEW_TYPE } from '@/redux/slices/common';

function App({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();

  // Window Reszie 이벤트 추가
  useEffect(() => {
    const width = window.innerWidth;
    // 첫 렌더링 시 모바일 | 태블릿 | 데스크톱 구분
    if (width <= 375) dispatch(SET_VIEW_TYPE('MOBILE'));
    else if (width <= 768) dispatch(SET_VIEW_TYPE('TABLET'));
    else dispatch(SET_VIEW_TYPE('DESKTOP'));

    const resizeWindow = () => {
      if (width <= 375) dispatch(SET_VIEW_TYPE('MOBILE'));
      else if (width <= 768) dispatch(SET_VIEW_TYPE('TABLET'));
      else dispatch(SET_VIEW_TYPE('DESKTOP'));
    };

    window.addEventListener('resize', resizeWindow);

    return () => window.removeEventListener('resize', resizeWindow);
  });

  return (
    <AppLayout>
      <Head>
        <title>TapPlace</title>
        <link rel='icon' href='/tapplace_icon.webp' />
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default wrapper.withRedux(App);

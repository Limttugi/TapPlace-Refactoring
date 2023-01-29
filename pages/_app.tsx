import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useAppDispatch } from '@/redux/hooks';
import { useEffect } from 'react';
import { SET_VIEW_TYPE } from '@/redux/slices/common';
import setViewType from '@/utils/setViewType';
import wrapper from '@/redux/store';
import AppLayout from '@/components/Common/Layout/AppLayout';
import Script from 'next/script';

function App({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();

  // Window Reszie 이벤트 추가
  useEffect(() => {
    const width = window.innerWidth;
    dispatch(SET_VIEW_TYPE(setViewType(width)));

    const resizeWindow = () => {
      const width = window.innerWidth;
      dispatch(SET_VIEW_TYPE(setViewType(width)));
    };

    window.addEventListener('resize', resizeWindow);

    return () => window.removeEventListener('resize', resizeWindow);
  });

  return (
    <AppLayout>
      <Head>
        <title>TapPlace</title>
        <link rel="icon" href="/img/Logo/tapplace_icon.webp" />
      </Head>
      <Script
        strategy="beforeInteractive"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=5iahchagdx&submodules=geocoder"></Script>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default wrapper.withRedux(App);

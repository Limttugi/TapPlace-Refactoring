import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.scss';

import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import useResize from '@/hooks/useResize';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TapPlace</title>
        <link rel='icon' href='/img/Logo/tapplace_icon.webp' />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;

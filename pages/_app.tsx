import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.scss';

import { RecoilRoot } from 'recoil';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TapPlace</title>
        <link rel='icon' href='/img/Logo/tapplace_icon.webp' />
        <meta
          name='description'
          content='탭플레이스에서 내 주변에 있는 간편결제 가맹점을 지도로 간편하게 확인해보세요'
        />
        <meta property='og:site_name' content='탭플레이스' />
        <meta property='og:title' content='탭플레이스 - 내 주변 간편결제 가맹점 지도' />
        <meta
          property='og:description'
          content='탭플레이스는 주변에 있는 간편결제 가맹점들을 지도에 표시해주는 웹서비스입니다.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.tapplace.co.kr/' />
        <meta property='og:image' content='/img/Logo/tapplace_icon.webp' />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;

import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppLayout from '@/components/Layout/AppLayout';

import '@/styles/global.scss';
import wrapper from '@/redux/store';

function App({ Component, pageProps }: AppProps) {
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

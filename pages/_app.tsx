import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.scss';

import wrapper from '@/redux/store';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <title>TapPlace</title>
        <link rel='icon' href='/img/Logo/tapplace_icon.webp' />
      </Head>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </>
  );
}

export default App;

import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          strategy="beforeInteractive"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=5iahchagdx&libraries=services&submodules=geocoder"></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

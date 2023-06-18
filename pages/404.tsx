import Head from 'next/head';
import s from './404.module.scss';

import ServiceIntroductionTemplate from '@/components/_Templates/ServiceIntroduction/ServiceIntroduction';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>탭플레이스 - 404NotFound</title>
      </Head>

      <ServiceIntroductionTemplate>
        <strong className={s.error}>잘못된 경로 입니다.</strong>
      </ServiceIntroductionTemplate>
    </>
  );
};

export default Custom404;

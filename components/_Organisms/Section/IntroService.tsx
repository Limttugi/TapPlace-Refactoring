import { useRecoilValue } from 'recoil';
import Link from 'next/link';

import s from './IntroService.module.scss';

import IntroServiceMainText from '@/components/_Atoms/Text/IntroService/IntroServiceMain';
import IntroServiceSubText from '@/components/_Atoms/Text/IntroService/IntroServiceSub';
import IntroServiceImage from '@/components/_Atoms/Image/MockUp/IntroService/IntroService';
import AppDownloadButton from '@/components/_Atoms/Button/AppDownload/AppDownload';
import AppStoreButtonContainer from '@/components/_Molecules/Container/AppStoreButton/AppStoreButtonContainer';
import { breakpointState } from '@/recoil/atoms/breakpoint';

const IntroServiceSection = () => {
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <section className={s.container}>
      <div className={s.subContainer}>
        <IntroServiceMainText />
        <IntroServiceSubText />

        {BREAKPOINT === 'MOBILE' ? (
          <>
            <AppDownloadButton page='main' />
            <Link href='/useweb'>웹으로 이용하기</Link>
          </>
        ) : (
          <AppStoreButtonContainer />
        )}
      </div>

      <IntroServiceImage />
    </section>
  );
};

export default IntroServiceSection;

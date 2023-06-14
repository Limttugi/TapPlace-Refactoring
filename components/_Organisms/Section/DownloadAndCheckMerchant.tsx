import { useRecoilValue } from 'recoil';

import s from './DownloadAndCheckMerchant.module.scss';

import SubSectionFirstLineText from '@/components/_Atoms/Text/SubSection/SubSectionFirstLine';
import SubSectionSecondLineText from '@/components/_Atoms/Text/SubSection/SubSectionSecondLine';
import { breakpointState } from '@/recoil/atoms/breakpoint';
import AppDownloadButton from '@/components/_Atoms/Button/AppDownload/AppDownload';
import AppStoreButtonContainer from '@/components/_Molecules/Container/AppStoreButton/AppStoreButtonContainer';

const DownloadAndCheckMerchantSection = () => {
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <section className={s.container}>
      <SubSectionFirstLineText
        text={
          BREAKPOINT === 'MOBILE'
            ? [
                '지금 탭플레이스를 다운받고',
                <br key='' />,
                '내 주변 간편결제 가맹점을',
                <br key=' ' />,
                '바로 확인해보세요',
              ]
            : ['지금 탭플레이스를 다운받고', <br key='  ' />, '내 주변 간편결제 가맹점을 바로 확인해보세요']
        }
      />
      <SubSectionSecondLineText text='지금 내 주변의 간편결제 가맹점을 찾아보세요' />
      {BREAKPOINT === 'MOBILE' ? <AppDownloadButton page='main' /> : <AppStoreButtonContainer />}
    </section>
  );
};

export default DownloadAndCheckMerchantSection;

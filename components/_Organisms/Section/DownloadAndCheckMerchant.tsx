import { useRecoilValue } from 'recoil';

import s from './DownloadAndCheckMerchant.module.scss';

import { breakpointState } from '@/recoil/atoms/breakpoint';
import SubSectionFirstLineText from '@/components/_Atoms/Text/SubSection/SubSectionFirstLine';
import SubSectionSecondLineText from '@/components/_Atoms/Text/SubSection/SubSectionSecondLine';
import AppDownloadButton from '@/components/_Atoms/Button/AppDownload/AppDownload';
import AppStoreButtonContainer from '@/components/_Molecules/Container/AppStoreButton/AppStoreButtonContainer';

const DownloadAndCheckMerchantSection = () => {
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <section className={s.container}>
      <SubSectionFirstLineText>
        지금 탭플레이스를 다운받고
        <br />내 주변 간편결제 가맹점을
        {BREAKPOINT === 'MOBILE' ? (
          <>
            <br />
            바로 확인해보세요
          </>
        ) : (
          <> 바로 확인해보세요</>
        )}
      </SubSectionFirstLineText>
      <SubSectionSecondLineText>지금 내 주변의 간편결제 가맹점을 찾아보세요.</SubSectionSecondLineText>

      {BREAKPOINT === 'MOBILE' ? <AppDownloadButton page='main' /> : <AppStoreButtonContainer />}
    </section>
  );
};

export default DownloadAndCheckMerchantSection;

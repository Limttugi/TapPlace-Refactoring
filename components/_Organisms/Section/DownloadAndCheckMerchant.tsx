import AppStoreButtonContainer from '@/components/_Molecules/Container/AppStoreButton/AppStoreButton';
import s from './DownloadAndCheckMerchant.module.scss';
import SubSectionFirstLineText from '@/components/_Atoms/Text/SubSection/SubSectionFirstLine';
import SubSectionSecondLineText from '@/components/_Atoms/Text/SubSection/SubSectionSecondLine';
import { useAppSelector } from '@/redux/hooks';

const DownloadAndCheckMerchantSection = () => {
  const viewType = useAppSelector(state => state.viewType.viewType);

  return (
    <section className={s.container}>
      <SubSectionFirstLineText
        text={
          viewType === 'MOBILE'
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
      <AppStoreButtonContainer marginTop='DownloadSection' />
    </section>
  );
};

export default DownloadAndCheckMerchantSection;

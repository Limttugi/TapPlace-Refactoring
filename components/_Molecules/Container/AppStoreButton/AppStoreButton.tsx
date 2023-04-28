import s from './AppStoreButton.module.scss';

import { useAppSelector } from '@/redux/hooks';
import OpenMobileAppStoreButton from '@/components/_Atoms/Button/OpenMobileAppStore/OpenMobileAppStore';
import OpenMobileAppStoreButton_MobileVersion from '@/components/_Atoms/Button/OpenMobileAppStore/OpenMobileAppStore_MobileVersion';
import store_apple from '@/img/StoreButton/store_apple.webp';
import store_google from '@/img/StoreButton/store_google.webp';
import { useRecoilValue } from 'recoil';
import { breakpointState } from '@/recoil/atoms/breakpoint';

const AppStoreButtonContainer = ({ marginTop }: { marginTop: 'DownloadSection' }) => {
  // const { viewType } = useAppSelector(state => state.viewType);
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <div className={`${s.container} ${s[marginTop]}`}>
      {BREAKPOINT === 'MOBILE' && <OpenMobileAppStoreButton_MobileVersion version='normal' />}

      {BREAKPOINT !== 'MOBILE' && (
        <>
          <OpenMobileAppStoreButton text='App Store' src={store_apple} />
          <OpenMobileAppStoreButton text='Google Play' src={store_google} />
        </>
      )}
    </div>
  );
};

export default AppStoreButtonContainer;

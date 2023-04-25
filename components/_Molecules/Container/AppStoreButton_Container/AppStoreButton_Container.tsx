import s from './AppStoreButton_Container.module.scss';

import OpenMobileAppStore_MobileVersion_Button from '@/components/_Atoms/Button/OpenMobileAppStore_Button/OpenMobileAppStore_MobileVersion_Button';
import OpenMobileAppStore_Button from '@/components/_Atoms/Button/OpenMobileAppStore_Button/OpenMobileAppStore_Button';
import store_apple from '@/img/StoreButton/store_apple.webp';
import store_google from '@/img/StoreButton/store_google.webp';
import { useAppSelector } from '@/redux/hooks';

const AppStoreButton_Container = () => {
  const { viewType } = useAppSelector(state => state.viewType);

  return (
    <div className={s.container}>
      {viewType === 'MOBILE' && <OpenMobileAppStore_MobileVersion_Button version='normal' />}

      {viewType !== 'MOBILE' && (
        <>
          <OpenMobileAppStore_Button text='App Store' src={store_apple} />
          <OpenMobileAppStore_Button text='Google Play' src={store_google} />
        </>
      )}
    </div>
  );
};

export default AppStoreButton_Container;

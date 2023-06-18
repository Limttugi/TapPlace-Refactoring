import Image from 'next/image';

import s from './AppStoreButtonContainer.module.scss';

import appleImageSrc from '@/img/StoreButton/store_apple.webp';
import galaxyImageSrc from '@/img/StoreButton/store_google.webp';
import { handleOpenAppStore } from '@/utils/handleOpenAppStore';

const AppStoreButtonContainer = () => {
  return (
    <div className={s.container}>
      <button type='button' onClick={handleOpenAppStore}>
        <Image src={appleImageSrc} alt='앱스토어로 가는 버튼' />
        App Store
      </button>
      <button
        type='button'
        onClick={() => {
          alert('서비스 준비중입니다.');
        }}
      >
        <Image src={galaxyImageSrc} alt='구글플레이스토어로 가는 버튼' />
        Google Play
      </button>
    </div>
  );
};

export default AppStoreButtonContainer;

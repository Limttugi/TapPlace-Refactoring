import Image from 'next/image';

import s from './AppStoreButtonContainer.module.scss';

import appleImageSrc from '@/img/StoreButton/store_apple.webp';
import galaxyImageSrc from '@/img/StoreButton/store_google.webp';

const AppStoreButtonContainer = () => {
  return (
    <div className={s.container}>
      <button
        type='button'
        onClick={() => {
          window.open('https://apps.apple.com/app/%ED%83%AD%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4/id1643830783');
        }}
      >
        <Image src={appleImageSrc} alt='앱스토어로 가는 버튼' />
        App Store
      </button>
      <button type='button' onClick={() => {}}>
        <Image src={galaxyImageSrc} alt='구글플레이스토어로 가는 버튼' />
        Google Play
      </button>
    </div>
  );
};

export default AppStoreButtonContainer;

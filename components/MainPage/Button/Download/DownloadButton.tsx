import s from './DownloadButton.module.scss';

import store_apple from '@/img/StoreButton/store_apple.webp';
import store_google from '@/img/StoreButton/store_google.webp';
import Image from 'next/image';

const DownloadButton = () => {
  const handleMoveAppStore = () => {
    window.open('https://apps.apple.com/app/%ED%83%AD%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4/id1643830783');
  };

  return (
    <div className={s.buttonContainer}>
      <button className={s.button} onClick={handleMoveAppStore}>
        <Image className={s.buttonImage} src={store_apple} alt="store_apple" />
        <p className={s.buttonText}>App Store</p>
      </button>
      <button className={s.button} onClick={() => alert('서비스 준비중입니다')}>
        <Image className={s.buttonImage} src={store_google} alt="store_google" />
        <p className={s.buttonText}>Google Play</p>
      </button>
    </div>
  );
};

export default DownloadButton;

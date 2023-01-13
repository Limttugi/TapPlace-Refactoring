import s from '@/styles/components/Button/Download.module.scss';

import store_apple from '@/img/StoreButton/store_apple.webp';
import store_google from '@/img/StoreButton/store_google.webp';
import Image from 'next/image';

const DownloadButton = () => {
  return (
    <div className={s.buttonContainer}>
      <button className={s.button}>
        <Image className={s.buttonImage} src={store_apple} alt='store_apple' />
        <p className={s.buttonText}>App Store</p>
      </button>
      <button className={s.button}>
        <Image className={s.buttonImage} src={store_google} alt='store_google' />
        <p className={s.buttonText}>Google Play</p>
      </button>
    </div>
  );
};

export default DownloadButton;

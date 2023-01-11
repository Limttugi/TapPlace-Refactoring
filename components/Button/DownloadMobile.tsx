import s from '@/styles/components/Button/DownloadMobile.module.scss';

import store_download from '@/img/StoreButton/store_download.webp';
import Image from 'next/image';

const DownloadMobile = () => {
  return (
    <button className={s.buttonContainer}>
      <Image className={s.buttonImage} src={store_download} alt='store_download' />
      <p className={s.buttonText}>앱 다운로드</p>
    </button>
  );
};

export default DownloadMobile;

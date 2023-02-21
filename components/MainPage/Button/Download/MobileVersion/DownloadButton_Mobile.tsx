import s from './DownloadButton_Mobile.module.scss';

import store_download from '@/img/StoreButton/store_download.webp';
import Image from 'next/image';

interface DownloadMobile_ButtonI {
  visit?: any;
}

const DownloadMobile_Button = ({ visit }: DownloadMobile_ButtonI) => {
  return (
    <button
      className={s.buttonContainer}
      style={visit && { width: '100%', borderRadius: '0.4rem' }}
      onClick={() => {
        window.open('https://apps.apple.com/app/%ED%83%AD%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4/id1643830783');
      }}>
      <Image className={s.buttonImage} src={store_download} alt="store_download" />
      <p className={s.buttonText}>앱 다운로드</p>
    </button>
  );
};

export default DownloadMobile_Button;

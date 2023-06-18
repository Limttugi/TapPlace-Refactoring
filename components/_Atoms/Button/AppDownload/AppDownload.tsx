import Image from 'next/image';

import s from './AppDownload.module.scss';

import store_download from '@/img/StoreButton/store_download.webp';
import { handleOpenAppStore } from '@/utils/handleOpenAppStore';

interface AppDownloadButton_I {
  page: 'main' | 'useweb';
}

const AppDownloadButton = ({ page }: AppDownloadButton_I) => {
  return (
    <button
      type='button'
      className={page === 'main' ? `${s.button} ${s.main}` : `${s.button} ${s.useweb}`}
      onClick={handleOpenAppStore}
    >
      <Image className={s.buttonImage} src={store_download} alt='store_download' />앱 다운로드
    </button>
  );
};

export default AppDownloadButton;

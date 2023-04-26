import Link from 'next/link';
import Image from 'next/image';

import s from './OpenMobileAppStore_MobileVersion.module.scss';

import store_download from '@/img/StoreButton/store_download.webp';

interface OpenMobileAppStoreButton_MobileVersion_I {
  version: 'normal' | 'onlyBtn';
}

const OpenMobileAppStoreButton_MobileVersion = ({ version }: OpenMobileAppStoreButton_MobileVersion_I) => {
  return (
    <>
      <button type='button' className={version === 'normal' ? s.button : `${s.button} ${s.onlylBtn}`}>
        <Image className={s.buttonImage} src={store_download} alt='store_download' />앱 다운로드
      </button>

      {version !== 'onlyBtn' && (
        <Link href='/useweb' className={s.goUseWeb}>
          웹으로 이용하기
        </Link>
      )}
    </>
  );
};

export default OpenMobileAppStoreButton_MobileVersion;

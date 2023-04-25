import Link from 'next/link';
import Image from 'next/image';

import s from './OpenMobileAppStore_MobileVersion_Button.module.scss';

import store_download from '@/img/StoreButton/store_download.webp';

interface OpenMobileAppStore_MobileVersion_Button_I {
  version: 'normal' | 'onlyBtn';
}

const OpenMobileAppStore_MobileVersion_Button = ({ version }: OpenMobileAppStore_MobileVersion_Button_I) => {
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

export default OpenMobileAppStore_MobileVersion_Button;

import { ReactNode } from 'react';
import Image from 'next/image';

import s from './AppDownloadModalContent.module.scss';

import checkImageSrc from '@/img/VisitModal/check.webp';

interface AppDownloadModalContent_I {
  children: ReactNode;
}

const AppDownloadModalContent = ({ children }: AppDownloadModalContent_I) => {
  return (
    <li className={s.list}>
      <Image src={checkImageSrc} alt='check image' />
      {children}
    </li>
  );
};

export default AppDownloadModalContent;

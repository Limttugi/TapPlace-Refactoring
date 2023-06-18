import s from './AppDownloadModalContentList.module.scss';

import AppDownloadModalContent from '@/components/_Atoms/List/AppDownloadModalContent/AppDownloadModalContent';
import { APP_DOWNLOAD_MODAL_CONTENT } from '@/constants/APP_DOWNLOAD_MODAL_CONTENT';

const AppDownloadModalContentList = () => {
  return (
    <ul className={s.container}>
      {APP_DOWNLOAD_MODAL_CONTENT.map(content => {
        return <AppDownloadModalContent key={content}>{content}</AppDownloadModalContent>;
      })}
    </ul>
  );
};

export default AppDownloadModalContentList;

import s from './CheckAfterDownload.module.scss';

import { useAppSelector } from '@/redux/hooks';
import DownloadButton from '../../Button/Download/DownloadButton';
import CheckAfterDownload_Mobile from './MobileVer/CheckAfterDownload_Mobile';

const CheckAfterDownlaod = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <>
      {viewType === 'MOBILE' ? (
        <CheckAfterDownload_Mobile />
      ) : (
        <section className={s.container}>
          <h1 className={s.line_0}>
            지금 탭플레이스를 다운받고
            <br />내 주변 간편결제 가맹점을 바로 확인해보세요
          </h1>
          <p className={s.line_1}>지금 내 주변의 간편결제 가맹점을 찾아보세요</p>
          <DownloadButton />
        </section>
      )}
    </>
  );
};

export default CheckAfterDownlaod;

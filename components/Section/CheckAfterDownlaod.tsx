import { useAppSelector } from '@/redux/hooks';
import s from '@/styles/components/Section/CheckAfterDownlaod.module.scss';
import DownloadButton from '../Button/DownloadButton';
import DownloadMobileButton from '../Button/DownloadMobileButton';

const CheckAfterDownlaod = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <section className={s.container}>
      {viewType === 'MOBILE' ? (
        <>
          <h1 className={s.line_0}>
            지금 탭플레이스를 다운받고
            <br />
            내 주변 간편결제 가맹점을
            <br />
            바로 확인해보세요
          </h1>
          <p className={s.line_1}>지금 내 주변의 간편결제 가맹점을 찾아보세요</p>
          <DownloadMobileButton />
        </>
      ) : (
        <>
          <h1 className={s.line_0}>
            지금 탭플레이스를 다운받고
            <br />내 주변 간편결제 가맹점을 바로 확인해보세요
          </h1>
          <p className={s.line_1}>지금 내 주변의 간편결제 가맹점을 찾아보세요</p>
          <DownloadButton />
        </>
      )}
    </section>
  );
};

export default CheckAfterDownlaod;

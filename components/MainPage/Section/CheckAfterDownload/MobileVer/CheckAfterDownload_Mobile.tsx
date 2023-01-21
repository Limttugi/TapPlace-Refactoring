import s from './CheckAfterDownload_Mobile.module.scss';

import DownloadMobile_Button from '@/components/MainPage/Button/Download/MobileVersion/DownloadButton_Mobile';

const CheckAfterDownload_Mobile = () => {
  return (
    <section className={s.container}>
      <h1 className={s.line_0}>
        지금 탭플레이스를 다운받고
        <br />
        내 주변 간편결제 가맹점을
        <br />
        바로 확인해보세요
      </h1>
      <p className={s.line_1}>지금 내 주변의 간편결제 가맹점을 찾아보세요</p>
      <DownloadMobile_Button />
    </section>
  );
};

export default CheckAfterDownload_Mobile;

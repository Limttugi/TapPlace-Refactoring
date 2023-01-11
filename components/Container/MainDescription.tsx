import { useAppSelector } from '@/redux/hooks';
import s from '@/styles/components/Container/MainDescription.module.scss';
import Image from 'next/image';
import Download from '../Button/Download';
import DownloadMobile from '../Button/DownloadMobile';
import mock_1_mobile from '@/img/MockUp/mock_1_mobile.webp';
import mock_1_desktop from '@/img/MockUp/mock_1_desktop.webp';

const MainDescription = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <article className={s.mainDescriptionContainer}>
      <div className={s.textBtnContainer}>
        <h1 className={s.text_line_1}>
          간편결제 가맹점 확인
          <br />
          한곳에서 간편하게
        </h1>
        <p className={s.text_line_2}>
          힘들게 찾아다닐 필요없이 한번에 확인할 수 있어요
          <br />
          탭플레이스에서 내 주변 간편결제 가맹점을
          <br />
          조회해보세요
        </p>
        {viewType === 'MOBILE' ? (
          <>
            <DownloadMobile />
            <button className={s.goWebButton}>웹으로 이용하기</button>
          </>
        ) : (
          <Download />
        )}
      </div>
      <Image className={s.mockImage} src={viewType === 'MOBILE' ? mock_1_mobile : mock_1_desktop} alt='mockup_1' />
    </article>
  );
};

export default MainDescription;

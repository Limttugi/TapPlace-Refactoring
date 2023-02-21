import s from './VisitModal.module.scss';

import Image from 'next/image';
import visit from '@/img/VisitModal/visit.webp';
import check from '@/img/VisitModal/check.webp';
import DownloadMobile_Button from '@/components/MainPage/Button/Download/MobileVersion/DownloadButton_Mobile';
import { useAppDispatch } from '@/redux/hooks';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useEffect } from 'react';
import { SET_SHOW_VISIT_MODAL_FLAG } from '@/redux/slices/showMenu';

const VisitModal = () => {
  const dispatch = useAppDispatch();
  const { setItemWithExpireTime, getItemWithExpireTime } = useLocalStorage();

  // localStorage 확인
  useEffect(() => {
    getItemWithExpireTime('noShowToday');
  });

  const handleContinueWeb = () => {
    dispatch(SET_SHOW_VISIT_MODAL_FLAG(false));
  };

  const handleNotSeeingModal = () => {
    dispatch(SET_SHOW_VISIT_MODAL_FLAG(false));
    setItemWithExpireTime('noShowToday', 'true', 24 * 60 * 60);
  };

  return (
    <section className={s.container}>
      <h1 className={s.mainTitle}>
        앱을 통해 내 주변의 간편결제 가맹점을
        <br />
        더욱 편리하게 확인해보세요!
      </h1>
      <Image src={visit} alt="mainImage" className={s.mainImage} />
      <ul className={s.checkContainer}>
        <li className={s.checkList}>
          <Image src={check} alt="check" />
          <p>간편결제 가맹점 확인</p>
        </li>
        <li className={s.checkList}>
          <Image src={check} alt="check" />
          <p>결제수단 별 사용여부 피드백</p>
        </li>
        <li className={s.checkList}>
          <Image src={check} alt="check" />
          <p>쉽고 빠른 가맹점 등록</p>
        </li>
      </ul>
      <DownloadMobile_Button visit={true} />
      <button className={s.continueButton} onClick={handleContinueWeb}>
        웹으로 계속하기
      </button>
      <button className={s.notSeeingButton} onClick={handleNotSeeingModal}>
        오늘 하루 보지 않기
      </button>
    </section>
  );
};

export default VisitModal;

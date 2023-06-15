import Image from 'next/image';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import s from './AppDownload.module.scss';

import visitImgSrc from '@/img/VisitModal/visit.webp';
import useLocalStorage from '@/hooks/useLocalStorage';
import { showAppDownloadModalAtom } from '@/recoil/atoms/localstorage';
import AppDownloadModalContentList from '@/components/_Molecules/Container/AppDownloadModalContentList/AppDownloadModalContentList';
import AppDownloadButton from '@/components/_Atoms/Button/AppDownload/AppDownload';

const AppDownloadModal = () => {
  const setShowAppDownloadModal = useSetRecoilState(showAppDownloadModalAtom);
  const { setItemWithExpireTime, getItemWithExpireTime } = useLocalStorage();

  // localStorage 확인
  useEffect(() => {
    getItemWithExpireTime('noShowToday');
  });

  const handleContinueWeb = () => {
    setShowAppDownloadModal(false);
  };

  const handleNotSeeingModal = () => {
    setShowAppDownloadModal(false);
    setItemWithExpireTime('noShowToday', 'true', 24 * 60 * 60);
  };

  return (
    <dialog className={s.container}>
      <h2 className='a11y-hidden'>앱 다운로드 요청 모달</h2>
      <div className={s.requestContent}>
        앱을 통해 내 주변의 간편결제 가맹점을
        <br />
        더욱 편리하게 확인해보세요!
      </div>
      <Image className={s.mainImage} src={visitImgSrc} alt='AppDownloadModal Main Image' />
      <AppDownloadModalContentList />
      <AppDownloadButton page='useweb' />

      <button type='button' className={s.usingWebButton} onClick={handleContinueWeb}>
        웹으로 계속하기
      </button>

      <button type='button' className={s.notSeeingTodayButton} onClick={handleNotSeeingModal}>
        오늘 하루 보지 않기
      </button>
    </dialog>
  );
};

export default AppDownloadModal;

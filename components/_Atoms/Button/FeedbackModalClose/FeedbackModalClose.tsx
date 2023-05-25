import Image from 'next/image';

import s from './FeedbackModalClose.module.scss';

import closeImg from '@/img/X.webp';
import { markerStateAtom } from '@/recoil/atoms/marker';
import { useSetRecoilState } from 'recoil';

const FeedbackModalCloseButton = () => {
  const setShowMarkerDetail = useSetRecoilState(markerStateAtom);

  const handleCloseModal = () => {
    setShowMarkerDetail(prev => ({ ...prev, showMarkerDetail: false }));
  };

  return (
    <button type='button' className={s.button} onClick={handleCloseModal}>
      <Image src={closeImg} alt='FeedbackModalCloseImage' />
    </button>
  );
};

export default FeedbackModalCloseButton;

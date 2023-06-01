import Image from 'next/image';

import s from './FeedbackModalClose.module.scss';

import closeImg from '@/img/X.webp';
import { markerStateAtom } from '@/recoil/atoms/marker';
import { useSetRecoilState } from 'recoil';
import useMarker from '@/hooks/useMarker';

const FeedbackModalCloseButton = () => {
  const changeSmallMarker = useMarker().changeSmallMarker;
  const setShowMarkerDetail = useSetRecoilState(markerStateAtom);

  const handleCloseModal = () => {
    setShowMarkerDetail({ markerID: '', showMarkerDetail: false });
    changeSmallMarker();
  };

  return (
    <button type='button' className={s.button} onClick={handleCloseModal}>
      <Image src={closeImg} alt='FeedbackModalCloseImage' />
    </button>
  );
};

export default FeedbackModalCloseButton;

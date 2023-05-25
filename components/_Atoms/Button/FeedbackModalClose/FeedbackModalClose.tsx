import Image from 'next/image';

import s from './FeedbackModalClose.module.scss';

import closeImg from '@/img/X.webp';
import { markerStateAtom } from '@/recoil/atoms/marker';
import { useSetRecoilState } from 'recoil';
import useMap from '@/hooks/useMap';
import { useEffect } from 'react';
import useMarker from '@/hooks/useMarker';

const FeedbackModalCloseButton = ({ title }: { title: string | undefined }) => {
  const setShowMarkerDetail = useSetRecoilState(markerStateAtom);
  const { markersRef, clickedMarker } = useMap();

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

import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Image from 'next/image';

import s from './MerchantDetail.module.scss';

import { markerStateAtom } from '@/recoil/atoms/marker';
import { getMerchantFeedback, getMerchantInfo } from '@/api/merchant';
import { PAYS } from '@/constants/PAYS';
import { FeedbackInfo_I, merchantInfo_I } from '@/types/merchant';
import addressImgSrc from '@/img/StoreDetail/location_black.webp';
import phoneImgSrc from '@/img/StoreDetail/phone.webp';
import pencilImgSrc from '@/img/StoreDetail/pencil.webp';
import FeedbackListContainer from '@/components/_Molecules/Container/Feedback/FeedbackList';
import FindRouteButton from '@/components/_Atoms/Button/FindRoute/FindRoute';
import FeedbackInAppButton from '@/components/_Atoms/Button/FeedbackInApp/FeedbackInApp';
import FeedbackModalCloseButton from '@/components/_Atoms/Button/FeedbackModalClose/FeedbackModalClose';

const MerchantDetailModal = () => {
  const markerState = useRecoilValue(markerStateAtom);
  const { markerID, showMarkerDetail } = markerState;

  const [info, setInfo] = useState<merchantInfo_I>();
  const [feedbacks, setFeedbacks] = useState<Array<FeedbackInfo_I>>([]);

  const handleGetFeedback = useCallback(async () => {
    const feedbacks = await getMerchantFeedback({ store_id: markerID, pays: PAYS });
    setFeedbacks(feedbacks);
  }, [markerID]);

  const handleGetMerchantInfo = useCallback(async () => {
    const info = await getMerchantInfo(markerID);
    setInfo(info);
  }, [markerID]);

  useEffect(() => {
    showMarkerDetail && Promise.all([handleGetMerchantInfo(), handleGetFeedback()]);
  }, [handleGetFeedback, handleGetMerchantInfo, showMarkerDetail]);

  return (
    <>
      <dialog className={s.container}>
        <h2 className='a11y-hidden'>가맹점 정보 모달창</h2>

        <div className={s.placeCategoryNameWrapper}>
          <h3>{info?.place_name}</h3>
          <h4>{info?.category_group_name}</h4>
        </div>

        <FeedbackModalCloseButton />

        <FindRouteButton x={info?.x} y={info?.y} place_name={info?.place_name} />

        <div className={s.addressAndPhonWrapper}>
          <address>
            <Image src={addressImgSrc} alt='addressImage' />
            {info?.road_address_name}
          </address>
          <span>
            <Image src={phoneImgSrc} alt='phoneImage' />
            {info?.phone ? info.phone : '정보가 없습니다'}
          </span>
        </div>

        <div className={s.modifyInfoWrapper}>
          <Image src={pencilImgSrc} alt='reqModifyInfoImg' />
          정보 수정 요청
        </div>

        <hr className={s.divideLine} />
        <FeedbackListContainer feedbacks={feedbacks} />
        <FeedbackInAppButton />
      </dialog>

      <dialog className={s.infoWindow}>{info?.place_name}</dialog>
    </>
  );
};

export default MerchantDetailModal;

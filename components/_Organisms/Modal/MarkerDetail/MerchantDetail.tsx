import { useRecoilValueLoadable } from 'recoil';
import Image from 'next/image';

import s from './MerchantDetail.module.scss';

import addressImgSrc from '@/img/StoreDetail/location_black.webp';
import phoneImgSrc from '@/img/StoreDetail/phone.webp';
import pencilImgSrc from '@/img/StoreDetail/pencil.webp';
import FeedbackListContainer from '@/components/_Molecules/Container/Feedback/FeedbackList';
import FindRouteButton from '@/components/_Atoms/Button/FindRoute/FindRoute';
import FeedbackInAppButton from '@/components/_Atoms/Button/FeedbackInApp/FeedbackInApp';
import FeedbackModalCloseButton from '@/components/_Atoms/Button/FeedbackModalClose/FeedbackModalClose';
import { clickedMerchantInfoSelector } from '@/recoil/selector/merchant';
import LoadingSpinner from '@/components/_Atoms/LoadingSpinner/LoadingSpinner';

const MerchantDetailModal = () => {
  const { state, contents: infoContent } = useRecoilValueLoadable(clickedMerchantInfoSelector);

  switch (state) {
    case 'hasValue':
      return (
        <dialog className={s.container}>
          <h2 className='a11y-hidden'>가맹점 정보 모달창</h2>

          <div className={s.placeCategoryNameWrapper}>
            <h3>{infoContent.place_name}</h3>
            <h4>{infoContent.category_group_name}</h4>
          </div>

          <FeedbackModalCloseButton />

          <FindRouteButton x={infoContent.x} y={infoContent.y} place_name={infoContent.place_name} />

          <div className={s.addressAndPhonWrapper}>
            <address>
              <Image src={addressImgSrc} alt='addressImage' />
              {infoContent.road_address_name}
            </address>
            <span>
              <Image src={phoneImgSrc} alt='phoneImage' />
              {infoContent.phone ? infoContent.phone : '정보가 없습니다'}
            </span>
          </div>

          <div className={s.modifyInfoWrapper}>
            <Image src={pencilImgSrc} alt='reqModifyInfoImg' />
            정보 수정 요청
          </div>

          <hr className={s.divideLine} />
          <FeedbackListContainer />
          <FeedbackInAppButton />
        </dialog>
      );

    case 'loading':
      return <LoadingSpinner type='default' />;

    case 'hasError':
      console.error(infoContent);
      throw infoContent;
  }
};

export default MerchantDetailModal;

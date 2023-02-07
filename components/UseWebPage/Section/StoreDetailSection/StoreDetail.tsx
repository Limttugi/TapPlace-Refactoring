import s from './StoreDetailSection.module.scss';

import close from '@/img/SearchInput/search_close.webp';
import findWay from '@/img/StoreDetail/navigation.webp';
import location from '@/img/StoreDetail/location_black.webp';
import phone from '@/img/StoreDetail/phone.webp';
import pencil from '@/img/StoreDetail/pencil.webp';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import FeedbackList from '../../List/FeedbackList/FeedbackList';
import { feedbackI, SET_STORE_DETAIL_INFO } from '@/redux/slices/store';
import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import proj4 from 'proj4';

const StoreDetailSection = () => {
  const dispatch = useAppDispatch();
  const { currentLocation } = useAppSelector(state => state.location);
  const GlobalContextValue = useContext(GlobalContext);

  const { storeDetailInfo, storeFeedbackInfo } = useAppSelector(state => state.store);

  const handleCloseStoreDetailInfo = () => {
    const clickedMarker: naver.maps.Marker | any = GlobalContextValue.currentClickedMarker;

    console.log(clickedMarker);
    clickedMarker.setIcon({
      url: clickedMarker.icon.url.replace('_big', ''),
    });

    dispatch(SET_STORE_DETAIL_INFO(null));
  };

  const handleMoveAppStore = () => {};

  const handleFindWay = () => {
    if (storeDetailInfo) {
      const start = proj4('EPSG:4326', 'EPSG:3857', [
        Number(currentLocation.longitude),
        Number(currentLocation.latitude),
      ]);
      const arrive = proj4('EPSG:4326', 'EPSG:3857', [Number(storeDetailInfo.x), Number(storeDetailInfo.y)]);
      window.open(
        `https://map.naver.com/v5/directions/${start[0]},${start[1]},내위치,,/${arrive[0]},${arrive[1]},${storeDetailInfo.place_name},,/~/transit?c=${arrive[0]},${arrive[1]},13,0,0,0,dh`,
      );
    }
  };

  return (
    <section className={s.detailContainer}>
      <div className={s.topContainer}>
        <div className={s.nameWrapper}>
          <h4 className={s.placeName}>{storeDetailInfo?.place_name}</h4>
          <p className={s.categoryName}>{storeDetailInfo?.category_group_name}</p>
        </div>
        <Image className={s.closeImage} src={close} alt="closeImage" onClick={handleCloseStoreDetailInfo} />
      </div>
      <button className={s.findWayWrapper} onClick={handleFindWay}>
        <Image className={s.findWayImage} src={findWay} alt="findWay" />
        <p className={s.findWayText}>길찾기</p>
      </button>
      <ul className={s.midContainer}>
        <li className={s.locationWrapper}>
          <Image className={s.locationImage} src={location} alt="locationImage" />
          <div className={s.distanceAddressContainer}>
            <p className={s.disAddrText}>{storeDetailInfo && storeDetailInfo?.distance * 1000}m&nbsp;・&nbsp;</p>
            <p className={s.disAddrText}>
              {storeDetailInfo?.road_address_name ? storeDetailInfo?.road_address_name : storeDetailInfo?.address_name}
            </p>
          </div>
        </li>
        <li className={s.callWrapper}>
          <Image className={s.callImage} src={phone} alt="phoneImage" />
          <p className={s.callText}>
            {storeDetailInfo?.phone === '' ? '가맹점의 번호가 등록되어있지 않습니다' : storeDetailInfo?.phone}
          </p>
        </li>
      </ul>
      <hr className={s.lightHr} />
      <div className={s.requestModifyWrapper}>
        <Image className={s.requestModifyImage} src={pencil} alt="modifyImage" />
        <p className={s.requestModifyText}>정보 수정 요청</p>
      </div>
      <hr className={s.midHr} />
      <ul className={s.paymentContainer}>
        <h4 className={s.paymentTitle}>결제수단</h4>
        {storeFeedbackInfo.map((feedback: feedbackI, index) => (
          <FeedbackList key={feedback.store_id + index} feedback={feedback} />
        ))}
      </ul>
      <button className={s.goAppStoreButton} onClick={handleMoveAppStore}>
        앱에서 사용여부 피드백하기
      </button>
    </section>
  );
};

export default StoreDetailSection;

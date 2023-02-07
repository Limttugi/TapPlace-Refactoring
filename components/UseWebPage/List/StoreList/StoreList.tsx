import s from './StoreList.module.scss';

import kakaopay from '@/img/Logo/Payment/Rectangle/kakao.webp';
import naverpay from '@/img/Logo/Payment/Rectangle/naver.webp';
import payco from '@/img/Logo/Payment/Rectangle/payco.webp';
import zeropay from '@/img/Logo/Payment/Rectangle/zero.webp';
import applepay from '@/img/Logo/Payment/Rectangle/apple.webp';
import conless from '@/img/Logo/Payment/Rectangle/contactless.webp';
import googlepay from '@/img/Logo/Payment/Rectangle/google.webp';
import Image from 'next/image';
import { storeI } from '@/hooks/useMap';
import { SET_STORE_DETAIL_INFO, SET_STORE_FEEDBACK_INFO } from '@/redux/slices/store';
import { getStoreFeedback } from '@/api/store';
import { useAppDispatch } from '@/redux/hooks';
import { SET_SHOW_LIST_FLAG } from '@/redux/slices/showMenu';
import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import useMarker from '@/hooks/useMarker';

const StoreList = ({ store }: storeI | any) => {
  const dispatch = useAppDispatch();
  const GlobalContextValue = useContext(GlobalContext);
  const { mapRef, marker } = GlobalContextValue;
  const { handleMapSetCenter } = useMarker();

  const handleShowStoreDetailInfo = async () => {
    const feedback = await getStoreFeedback(store.store_id, store.pays);

    marker.forEach(marker => {
      // 마커들 중 선택한 마커 찾기
      if (marker.title === store.store_id) {
        // 큰 아이콘으로 변경 후 센터로 이동
        const split = marker.icon.url.split('.');
        if (marker.icon.url.includes('big') === false) {
          console.log('big');
          marker.setIcon({
            url: split[0] + '_big.' + split[1],
          });
        }
        handleMapSetCenter({ mapRef, marker });

        // 클릭한 마커 설정
        if (GlobalContextValue.currentClickedMarker === null) {
          GlobalContextValue.currentClickedMarker = marker;
        } else {
          if (marker !== GlobalContextValue.currentClickedMarker) {
            GlobalContextValue.currentClickedMarker.setIcon({
              url: GlobalContextValue.currentClickedMarker.icon.url.replace('_big', ''),
            });
          }
          GlobalContextValue.currentClickedMarker = marker;
        }
      }
    });

    dispatch(SET_SHOW_LIST_FLAG(false));
    dispatch(SET_STORE_FEEDBACK_INFO(feedback.data.feedback));
    dispatch(SET_STORE_DETAIL_INFO(store));
  };

  return (
    <li id={store.store_id} className={s.list} onClick={handleShowStoreDetailInfo}>
      <div className={s.nameContainer}>
        <h4 className={s.placeName}>{store.place_name}</h4>
        <p className={s.categoryName}>{store.category_group_name}</p>
      </div>
      <div className={s.locationContainer}>
        <p className={s.distance}>{store.distance * 1000}m&nbsp;・&nbsp;</p>
        <p className={s.addressName}>{store.road_address_name ? store.road_address_name : store.address_name}</p>
      </div>
      <div className={s.logoContainer}>
        {store.pays.map((pay: string, index: number) => {
          if (pay === 'kakaopay') {
            return <Image className={s.payRectangleLogo} key={pay} src={kakaopay} alt="kakao" />;
          } else if (pay === 'naverpay') {
            return <Image className={s.payRectangleLogo} key={pay} src={naverpay} alt="naver" />;
          } else if (pay === 'payco') {
            return <Image className={s.payRectangleLogo} key={pay} src={payco} alt="payco" />;
          } else if (pay === 'zeropay') {
            return <Image className={s.payRectangleLogo} key={pay} src={zeropay} alt="zero" />;
          } else if (pay === ('apple_visa' || 'apple_master' || 'apple_jcb')) {
            return <Image className={s.payRectangleLogo} key={pay} src={applepay} alt="apple" />;
          } else if (pay === ('conless_visa' || 'conless_master' || 'conless_jcb')) {
            return <Image className={s.payRectangleLogo} key={pay} src={conless} alt="conless" />;
          } else if (pay === ('google_visa' || 'google_master' || 'google_jcb')) {
            return <Image className={s.payRectangleLogo} key={pay} src={googlepay} alt="google" />;
          }
        })}
      </div>
    </li>
  );
};

export default StoreList;

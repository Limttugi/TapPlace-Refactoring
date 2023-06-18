import { useSetRecoilState } from 'recoil';

import s from './Merchant.module.scss';

import PaymentImage from '../../Image/Payment/Payment';
import { MerchantInfo_I } from '@/types/merchant';
import { NaverContextValue } from '@/context/naver';
import { markerStateAtom } from '@/recoil/atoms/marker';
import { MARKER_SRC } from '@/constants/IMAGE_SOURCE';
import useMap from '@/hooks/useMap';
import useMarker from '@/hooks/useMarker';
import { showMapOrMerchantListAtom } from '@/recoil/atoms/showMapOrList';

const MerchantList = (info: MerchantInfo_I) => {
  const { num, place_name, road_address_name, address_name, category_group_name, distance, pays, store_id, x, y } =
    info;
  const { setMapCenter } = useMap();
  const changeSmallMarker = useMarker().changeSmallMarker;
  const setMarkerState = useSetRecoilState(markerStateAtom);
  const setShowMapOrMerchantList = useSetRecoilState(showMapOrMerchantListAtom);

  const findMarkerOfClickedMerchantList = () => {
    for (let i = 0; i < NaverContextValue.markers.length; i++) {
      if (info.place_name === NaverContextValue.markers[i].getTitle()) {
        return NaverContextValue.markers[i];
      }
    }
  };

  const handleShowMerchantDetailInfo = () => {
    setShowMapOrMerchantList('map');
    const marker = findMarkerOfClickedMerchantList();
    const IMG_URL = MARKER_SRC[category_group_name];

    if (marker !== NaverContextValue.currentClickedMarker) {
      marker?.setIcon({ url: IMG_URL[1] });
      changeSmallMarker();
      setMarkerState({ showMarkerDetail: true, markerID: store_id });
      setMapCenter({ x: parseFloat(info.x), y: parseFloat(info.y) });
    }

    NaverContextValue.currentClickedMarker = marker;
  };

  return (
    <li className={s.container} onClick={handleShowMerchantDetailInfo}>
      <div className={s.merchantInfoWrapper}>
        <h3 className={s.merchantName}>{place_name}</h3>
        <h4 className={s.merchantCategory}>{category_group_name}</h4>
      </div>
      <div className={s.merchantInfoWrapper}>
        <p className={s.merchantDistance}>{distance * 1000}m ·&nbsp;</p>
        <p className={s.merchantAddress}>{road_address_name ? road_address_name : address_name}</p>
      </div>
      <ul className={s.paymentImageListContainer}>
        {info.pays?.map(pay => {
          return <PaymentImage key={pay + num} payment={pay} />;
        })}
      </ul>
    </li>
  );
};

export default MerchantList;

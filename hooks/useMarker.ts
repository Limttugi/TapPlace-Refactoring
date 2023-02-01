import { getStoreFeedback } from '@/api/store';
import { SET_STORE_DETAIL_INFO, SET_STORE_FEEDBACK_INFO } from '@/redux/slices/store';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { storeI } from './useMap';

const useMarker = () => {
  const dispatch = useDispatch();
  let priorClickedMarker: naver.maps.Marker | null = null;

  // 가맹점 카테고리에 따른 마커 이미지 분류
  const markerImageDivideByCategory = useCallback((store: storeI) => {
    let imageSrc, imageSrc_big;
    switch (store.category_group_name) {
      case '음식점':
        imageSrc = '/img/Marker/restaurant.webp';
        imageSrc_big = '/img/Marker/restaurant_big.webp';
        return { imageSrc, imageSrc_big };
      case '카페':
        imageSrc = '/img/Marker/cafe.webp';
        imageSrc_big = '/img/Marker/cafe_big.webp';
        return { imageSrc, imageSrc_big };
      case '편의점':
        imageSrc = '/img/Marker/store.webp';
        imageSrc_big = '/img/Marker/store_big.webp';
        return { imageSrc, imageSrc_big };
      case '마트':
        imageSrc = '/img/Marker/mart.webp';
        imageSrc_big = '/img/Marker/mart_big.webp';
        return { imageSrc, imageSrc_big };
      case '주유소':
        imageSrc = '/img/Marker/gasStation.webp';
        imageSrc_big = '/img/Marker/gasStation_big.webp';
        return { imageSrc, imageSrc_big };
      case '주차장':
        imageSrc = '/img/Marker/parking.webp';
        imageSrc_big = '/img/Marker/parking_big.webp';
        return { imageSrc, imageSrc_big };
      case '병원':
        imageSrc = '/img/Marker/hospital.webp';
        imageSrc_big = '/img/Marker/hospital_big.webp';
        return { imageSrc, imageSrc_big };
      case '약국':
        imageSrc = '/img/Marker/drugstore.webp';
        imageSrc_big = '/img/Marker/drugstore_big.webp';
        return { imageSrc, imageSrc_big };
      case '숙박':
        imageSrc = '/img/Marker/accommodation.webp';
        imageSrc_big = '/img/Marker/accommodation_big.webp';
        return { imageSrc, imageSrc_big };
      case '공공기관':
        imageSrc = '/img/Marker/institutions.webp';
        imageSrc_big = '/img/Marker/institutions_big.webp';
        return { imageSrc, imageSrc_big };
      default:
        imageSrc = '/img/Marker/etc.webp';
        imageSrc_big = '/img/Marker/etc_big.webp';
        return { imageSrc, imageSrc_big };
    }
  }, []);

  // 마커 클릭 이벤트
  const markerAddClickEvent = useCallback(({ marker, storeImage, storeInfo }: any) => {
    return naver.maps.Event.addListener(marker, 'click', async () => {
      dispatch(SET_STORE_DETAIL_INFO(storeInfo));
      // 전에 클릭 된 마커랑 현재 클릭한 마커가 같지 않은 경우
      if (priorClickedMarker !== null && marker !== priorClickedMarker) {
        const src: any = priorClickedMarker;
        priorClickedMarker.setIcon({
          url: src.icon.url.replace('_big', ''),
        });
      }
      priorClickedMarker = marker;
      marker.setIcon({
        url: storeImage.imageSrc_big,
      });
      // 가맹점 피드백 정보 저장
      const feedback = await getStoreFeedback(storeInfo.store_id, storeInfo.pays);
      dispatch(SET_STORE_FEEDBACK_INFO(feedback.data.feedback));
      console.log(feedback.data.feedback);
    });
  }, []);

  return {
    markerImageDivideByCategory,
    markerAddClickEvent,
  };
};

export default useMarker;
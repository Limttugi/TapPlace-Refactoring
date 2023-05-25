import { useSetRecoilState } from 'recoil';

import { markerStateAtom } from '@/recoil/atoms/marker';
import { merchantMarker_I } from '@/types/merchant';

const useShowMerchantDetailInfo = ({ map, marker, store_id, x, y }: merchantMarker_I) => {
  const setMarkerState = useSetRecoilState(markerStateAtom);

  setMarkerState({ showMarkerDetail: true, markerID: store_id });
  map?.setOptions({ zoom: 18 });
  map?.setCenter(new naver.maps.LatLng(y, x - window.innerWidth / 1600000));
};

export default useShowMerchantDetailInfo;

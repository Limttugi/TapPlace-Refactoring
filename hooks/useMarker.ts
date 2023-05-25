import { useCallback, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { markerStateAtom, markersAtom } from '@/recoil/atoms/marker';
import { merchantMarker_I } from '@/types/merchant';

const useMarker = () => {
  const setMarkerState = useSetRecoilState(markerStateAtom);

  const clickedMarker = useRef<naver.maps.Marker | null | any>(null);
  // const setMarker = useSetRecoilState(markersAtom);
  const [marker, setMarker] = useState<naver.maps.Marker>();

  const markerClickEvent = useCallback(
    ({ marker, bigImg, store_id }: merchantMarker_I) => {
      // 마커 클릭 이벤트
      naver.maps.Event.addListener(marker, 'click', () => {
        setMarkerState({ showMarkerDetail: true, markerID: store_id });
        marker.setIcon({ url: bigImg });
        // 클릭되어있는 마커와 같은 마커가 아닌 경우
        if (clickedMarker.current && clickedMarker.current !== marker) {
          clickedMarker.current.setIcon({
            url: clickedMarker.current.icon.url.replace('_big', ''),
          });
        }
        clickedMarker.current = marker;
      });
    },
    [setMarkerState],
  );

  return { clickedMarker, markerClickEvent };
};

export default useMarker;

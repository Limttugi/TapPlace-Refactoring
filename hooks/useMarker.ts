import { NaverContextValue } from '@/context/naver';
import { useCallback } from 'react';

const useMarker = () => {
  const changeSmallMarker = useCallback(() => {
    if (NaverContextValue.currentClickedMarker) {
      const img = NaverContextValue.currentClickedMarker.getIcon() as { url: string };
      const smallImg = img.url.replace('_big', '');
      NaverContextValue.currentClickedMarker.setIcon({ url: smallImg });
    }
  }, []);

  return { changeSmallMarker };
};

export default useMarker;

import LoadingSpinner from '@/components/MainPage/LoadingSpinner/LoadingSpinner';
import useMap from '@/hooks/useMap';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Useweb = () => {
  const dispatch = useAppDispatch();
  const { bringMyLocation, mapRendering } = useMap();
  const { myLocation, LOADING_MY_LOCATION } = useAppSelector(state => state.location);

  useEffect(() => {
    bringMyLocation();
  });

  useEffect(() => {
    mapRendering();
  }, [myLocation]);

  return (
    <>
      {LOADING_MY_LOCATION && <LoadingSpinner />}
      <div id="map" style={{ width: '100vw', height: '100%' }}></div>
    </>
  );
};

export default Useweb;

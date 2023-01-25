import LoadingSpinner from '@/components/UseWebPage/LoadingSpinner/LoadingSpinner';
import Map from '@/components/UseWebPage/Map/Map';
import { useAppSelector } from '@/redux/hooks';

const Useweb = () => {
  const { LOADING_MY_LOCATION } = useAppSelector(state => state.location);

  return (
    <>
      {LOADING_MY_LOCATION && <LoadingSpinner />}
      <Map />
    </>
  );
};

export default Useweb;

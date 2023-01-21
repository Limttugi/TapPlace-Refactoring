import useMap from '@/hooks/useMap';

const Useweb = () => {
  useMap();

  return <div id='map' style={{ width: '100vw', height: 'calc(100vh - 6rem)' }}></div>;
};

export default Useweb;

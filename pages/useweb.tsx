import s from './useweb.module.scss';

import UseWebTemplate from '@/components/_Templates/UseWeb/UseWeb';
import useResize from '@/hooks/useResize';

const UseWeb = () => {
  useResize();

  return (
    <UseWebTemplate>
      <></>
    </UseWebTemplate>
  );
};

export default UseWeb;

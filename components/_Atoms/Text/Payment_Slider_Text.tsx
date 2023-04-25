import { useAppSelector } from '@/redux/hooks';

import s from './Payment_Slider_Text.module.scss';

const Payment_Slider_Text = () => {
  const viewType = useAppSelector(state => state.viewType.viewType);

  return (
    <div className={s.text}>
      탭플레이스와 함께라면&nbsp;{viewType !== 'DESKTOP' && <br />}이 모든 간편결제 가맹점을 &nbsp;
      {viewType === 'MOBILE' && <br />}
      쉽게 확인할 수 있어요
    </div>
  );
};

export default Payment_Slider_Text;

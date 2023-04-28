import { useRecoilValue } from 'recoil';
import s from './IntroServiceSub.module.scss';

import { useAppSelector } from '@/redux/hooks';
import { breakpointState } from '@/recoil/atoms/breakpoint';

const IntroServiceSubText = () => {
  // const viewType = useAppSelector(state => state.viewType.viewType);
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <p className={s.text}>
      힘들게 찾아다닐 필요없이 한번에 확인할 수 있어요.
      <br />
      탭플레이스에서 내 주변 간편결제 가맹점을&nbsp;
      {BREAKPOINT === 'MOBILE' && <br />}
      조회해보세요.
    </p>
  );
};

export default IntroServiceSubText;

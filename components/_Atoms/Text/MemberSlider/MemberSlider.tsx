import { useRecoilValue } from 'recoil';

import s from './MemberSlider.module.scss';

import { breakpointState } from '@/recoil/atoms/breakpoint';

const MemberSliderText = () => {
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <div className={s.text}>
      {BREAKPOINT === 'MOBILE' ? (
        <>
          탭플레이스 멤버들을
          <br />
          소개합니다
        </>
      ) : (
        '탭플레이스 멤버들을 소개합니다'
      )}
    </div>
  );
};

export default MemberSliderText;

import s from './MemberSlider.module.scss';

import { useAppSelector } from '@/redux/hooks';

const MemberSliderText = () => {
  const viewType = useAppSelector(state => state.viewType.viewType);

  return (
    <div className={s.text}>
      {viewType === 'MOBILE' ? (
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

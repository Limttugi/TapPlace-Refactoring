import s from './MemberIntroduction.module.scss';

import { useAppSelector } from '@/redux/hooks';
import MemberSlider from '@/components/Slider/Member/MemberSlider';

const MemberIntroduction = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <section className={s.container}>
      <h1 className={s.title}>
        {viewType === 'MOBILE' ? (
          <>
            탭플레이스 멤버들을
            <br />
            소개합니다
          </>
        ) : (
          '탭플레이스 멤버들을 소개합니다'
        )}
      </h1>
      <MemberSlider />
    </section>
  );
};

export default MemberIntroduction;

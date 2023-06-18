import s from './Member.module.scss';

import MemberSliderText from '@/components/_Atoms/Text/MemberSlider/MemberSlider';
import MemberIntroductionListContainer from '@/components/_Molecules/Container/MemberIntroductionList/MemberIntroductionList';

const MemberSlider = () => {
  return (
    <section className={s.container}>
      <h2 className='a11y-hidden'>멤버 소개</h2>
      <MemberSliderText />
      <MemberIntroductionListContainer />
    </section>
  );
};

export default MemberSlider;

import s from './MemberIntroduction.module.scss';

import MemberSliderText from '@/components/_Atoms/Text/MemberSlider/MemberSlider';
import MemberSlider from '../../Slider/Member/MemberSlider';

const MemberIntroduction = () => {
  return (
    <section className={s.container}>
      <h2 className='a11y-hidden'>멤버 소개</h2>
      <MemberSliderText />
      <MemberSlider />
    </section>
  );
};

export default MemberIntroduction;

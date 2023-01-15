import s from '@/styles/components/Section/MemberIntroduction.module.scss';

import { useAppSelector } from '@/redux/hooks';
import MemberInfo from '../MemberSlide/MemberInfo';

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
      <ul className={s.memberSlider}>
        <MemberInfo name='박상현' imgSrc='img/Memoji/ios1.webp' position='IOS 개발' />
        <MemberInfo name='이상준' imgSrc='img/Memoji/ios2.webp' position='IOS 개발' />
        <MemberInfo name='지경희' imgSrc='img/Memoji/android1.webp' position='Android 개발' />
        <MemberInfo name='김진욱' imgSrc='img/Memoji/android2.webp' position='Android 개발' />
        <MemberInfo name='김지훈' imgSrc='img/Memoji/web_back.webp' position='Web BackEnd 개발' />
        <MemberInfo name='임준혁' imgSrc='img/Memoji/web_front.webp' position='Web FrontEnd 개발' />
        <MemberInfo name='고은혜' imgSrc='img/Memoji/uiux.webp' position='UIUX 디자인' />
      </ul>
    </section>
  );
};

export default MemberIntroduction;

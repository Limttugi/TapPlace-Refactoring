import s from './MemberSlider.module.scss';

import MemberInfo from './MemberInfo/MemberInfo';

const MemberSlider = () => {
  return (
    <ul className={s.container}>
      <MemberInfo name='박상현' imgSrc='img/Memoji/ios1.webp' position='IOS 개발' />
      <MemberInfo name='이상준' imgSrc='img/Memoji/ios2.webp' position='IOS 개발' />
      <MemberInfo name='지경희' imgSrc='img/Memoji/android1.webp' position='Android 개발' />
      <MemberInfo name='김진욱' imgSrc='img/Memoji/android2.webp' position='Android 개발' />
      <MemberInfo name='김지훈' imgSrc='img/Memoji/web_back.webp' position='Web BackEnd 개발' />
      <MemberInfo name='임준혁' imgSrc='img/Memoji/web_front.webp' position='Web FrontEnd 개발' />
      <MemberInfo name='고은혜' imgSrc='img/Memoji/uiux.webp' position='UIUX 디자인' />
    </ul>
  );
};

export default MemberSlider;

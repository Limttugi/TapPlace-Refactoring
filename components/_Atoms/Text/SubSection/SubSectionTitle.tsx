import Image, { StaticImageData } from 'next/image';

import s from './SubSectionTitle.module.scss';

interface SubSectionTitle_I {
  imgSrc: StaticImageData;
  text: '가맹점 조회' | '결제수단 피드백' | '가맹점 등록';
  alignItems: 'center' | 'baseLine';
}

const SubSectionTitle = ({ imgSrc, text, alignItems }: SubSectionTitle_I) => {
  return (
    <h2 className={`${s.title} ${s[alignItems]}`}>
      <Image src={imgSrc} alt={`${text}이미지`} aria-hidden='true' />
      <p>{text}</p>
    </h2>
  );
};

export default SubSectionTitle;

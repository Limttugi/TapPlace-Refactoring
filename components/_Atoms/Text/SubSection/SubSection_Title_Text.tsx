import Image, { StaticImageData } from 'next/image';

import s from './SubSection_Title_Text.module.scss';

interface SubSection_Title_Text_I {
  imgSrc: StaticImageData;
  text: '가맹점 조회' | '결제수단 피드백' | '가맹점 등록';
  alignItems: 'flexEnd' | 'center';
}

const SubSection_Title_Text = ({ imgSrc, text, alignItems }: SubSection_Title_Text_I) => {
  return (
    <h2 className={`${s.title} ${s[alignItems]}`}>
      <Image src={imgSrc} alt='subSectionTitleImage' />
      <p>{text}</p>
    </h2>
  );
};

export default SubSection_Title_Text;

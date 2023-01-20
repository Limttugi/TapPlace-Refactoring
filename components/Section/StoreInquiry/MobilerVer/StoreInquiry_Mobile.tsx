import s from './StoreInquiry_Mobile.module.scss';

import Image from 'next/image';
import titleImage from '@/img/MockUp/mock_2_titleImg.webp';
import mockup from '@/img/MockUp/mock_2.webp';
import ex_1 from '@/img/MockUp/mock_2_ex1.webp';
import ex_2 from '@/img/MockUp/mock_2_ex2.webp';

const StoreInquiry_Mobile = () => {
  return (
    <section className={s.container}>
      <div className={s.descriptionContainer}>
        <h1 className={s.line_0}>
          <Image src={titleImage} alt='titleImage' />
          가맹점 조회
        </h1>
        <h1 className={s.line_1}>
          내 주변 간편결제 가맹점을
          <br />
          한눈에 확인하세요
        </h1>
        <p className={s.line_2}>
          이제 간편결제 안될까봐 걱정하지 마세요
          <br />
          결제 가능여부를 미리 알려드릴께요
        </p>
      </div>
      <Image className={s.mockupImage} src={mockup} alt='mock_2' />
      <div className={s.exampleContainer}>
        <Image src={ex_1} alt='ex_1' />
        <Image src={ex_2} alt='ex_2' />
      </div>
    </section>
  );
};

export default StoreInquiry_Mobile;

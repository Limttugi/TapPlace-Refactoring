import s from '@/styles/components/Section/StoreRegistering.module.scss';

import Image from 'next/image';
import titleImage from '@/img/MockUp/mock_4_titleImg.webp';
import mockup from '@/img/MockUp/mock_4.webp';
import { useAppSelector } from '@/redux/hooks';

const StoreRegistering = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <section className={s.container}>
      {viewType === 'DESKTOP' && <Image className={s.mockupImage} src={mockup} alt='mockupImage' />}
      <div className={s.textContainer}>
        <h1 className={s.line_0}>
          <Image src={titleImage} alt='titleImg' />
          <p>가맹점 등록</p>
        </h1>
        <h1 className={s.line_1}>
          새로운 가맹점을 발견하면
          <br />
          검색하여 등록해보세요
        </h1>
        <p className={s.line_2}>
          언제 어디서든, 새로운 가맹점을 발견하면
          <br />
          검색 한번으로 간편하게 등록할 수 있어요
        </p>
        <div className={s.functionOrderContainer}>
          <ul className={s.orderNumber}>
            <li className={s.number}>1</li>
            <li className={s.number}>2</li>
            <li className={s.number}>3</li>
          </ul>
          <ul className={s.orderText}>
            <li className={s.text}>가맹점 검색</li>
            <li className={s.text}>결제수단 피드백</li>
            <li className={s.text}>등록완료</li>
          </ul>
        </div>
      </div>
      {viewType !== 'DESKTOP' && <Image className={s.mockupImage} src={mockup} alt='mockupImage' />}
    </section>
  );
};

export default StoreRegistering;

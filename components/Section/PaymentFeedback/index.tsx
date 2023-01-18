import s from './index.module.scss';

import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import mockup from '@/img/MockUp/mock_3.webp';
import titleImage from '@/img/MockUp/mock_3_titleImg.webp';
import ex from '@/img/MockUp/mock_3_ex.webp';

const PaymentFeedback = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <section className={s.container}>
      {viewType === 'MOBILE' ? (
        <>
          <div className={s.textContainer}>
            <h1 className={s.line_0}>
              <Image src={titleImage} alt='titleImage' />
              <p>결제수단 피드백</p>
            </h1>
            <h1 className={s.line_1}>
              최근 결제기록을 통해 확인하는
              <br />
              정확한 사용여부
            </h1>
            <p className={s.line_2}>
              직접 이용했던 사용자들의 피드백으로
              <br />
              원하는 결제수단의 정확한 사용여부를 확인할 수<br />
              있어요
            </p>
          </div>
          <Image className={s.mockupImage} src={mockup} alt='mockupImage' />
          <Image className={s.exImage} src={ex} alt='exImage' />
        </>
      ) : (
        <>
          <div className={s.leftContainer}>
            <div className={s.textContainer}>
              <h1 className={s.line_0}>
                <Image src={titleImage} alt='titleImage' />
                <p>결제수단 피드백</p>
              </h1>
              <h1 className={s.line_1}>
                최근 결제기록을 통해
                <br />
                확인하는 정확한 사용여부
              </h1>
              <p className={s.line_2}>
                {viewType === 'TABLET' ? (
                  <>
                    직접 이용했던 사용자들의 피드백으로
                    <br />
                    원하는 결제수단의 정확한 사용여부를 확인할 수<br />
                    있어요
                  </>
                ) : (
                  <>
                    직접 이용했던 사용자들의 피드백으로
                    <br />
                    원하는 결제수단의 사용여부를 확인할 수 있어요
                  </>
                )}
              </p>
            </div>
            <Image className={s.exImage} src={ex} alt='exImage' />
          </div>
          <Image className={s.mockupImage} src={mockup} alt='mockupImage' />
        </>
      )}
    </section>
  );
};

export default PaymentFeedback;

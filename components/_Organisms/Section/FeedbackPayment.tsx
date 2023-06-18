import s from './FeedbackPayment.module.scss';

import FeedBackOnPayment_Title_Image from '@/img/MockUp/FeedBackOnPayment_Title_Image.webp';
import SubSectionSecondLineText from '@/components/_Atoms/Text/SubSection/SubSectionSecondLine';
import SubSectionFirstLineText from '@/components/_Atoms/Text/SubSection/SubSectionFirstLine';
import SubSectionTitle from '@/components/_Atoms/Text/SubSection/SubSectionTitle';
import {
  FeedbackPaymentImage,
  FeedbackPaymentSubImage,
} from '@/components/_Atoms/Image/MockUp/FeedbackPayment/FeedbackPayment';

const FeedbackPaymentSection = () => {
  return (
    <section className={s.container}>
      <div>
        <SubSectionTitle imgSrc={FeedBackOnPayment_Title_Image} text='결제수단 피드백' alignItems='center' />
        <SubSectionFirstLineText>
          최근 결제기록을 통해
          <br />
          확인하는 정확한 사용여부
        </SubSectionFirstLineText>
        <SubSectionSecondLineText>
          직접 이용했던 사용자들의 피드백으로
          <br />
          원하는 결제수단의 사용여부를 확인할 수 있어요.
        </SubSectionSecondLineText>
      </div>
      <FeedbackPaymentImage />
      <FeedbackPaymentSubImage />
    </section>
  );
};

export default FeedbackPaymentSection;

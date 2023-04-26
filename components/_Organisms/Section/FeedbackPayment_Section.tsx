import s from './FeedbackPayment_Section.module.scss';

import FeedBackOnPayment_Title_Image from '@/img/MockUp/FeedBackOnPayment_Title_Image.webp';
import SubSection_Line1_Text from '@/components/_Atoms/Text/SubSection/SubSection_Line1_Text';
import SubSection_Line2_Text from '@/components/_Atoms/Text/SubSection/SubSection_Line2_Text';
import SubSection_Title_Text from '@/components/_Atoms/Text/SubSection/SubSection_Title_Text';
import {
  FeedbackPayment_MockUp_Image,
  FeedbackPayment_SubMockUp_Image,
} from '@/components/_Atoms/Image/MockUp/FeedbackPayment_MockUp_Image';

const FeedbackPayment_Section = () => {
  return (
    <section className={s.container}>
      <div>
        <SubSection_Title_Text imgSrc={FeedBackOnPayment_Title_Image} text='결제수단 피드백' alignItems='center' />
        <SubSection_Line1_Text text={['최근 결제기록을 통해', <br key='br' />, '확인하는 정확한 사용여부']} />
        <SubSection_Line2_Text
          text={[
            '직접 이용했던 사용자들의 피드백으로',
            <br key='br' />,
            '원하는 결제수단의 사용여부를 확인할 수 있어요.',
          ]}
        />
      </div>
      <FeedbackPayment_MockUp_Image />
      <FeedbackPayment_SubMockUp_Image />
    </section>
  );
};

export default FeedbackPayment_Section;

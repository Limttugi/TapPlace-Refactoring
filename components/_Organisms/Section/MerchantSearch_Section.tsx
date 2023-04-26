import s from './MerchantSearch_Section.module.scss';

import MerchantSearch_Title_Image from '@/img/MockUp/MerchantSearch_Title_Image.webp';
import SubSection_Line1_Text from '@/components/_Atoms/Text/SubSection/SubSection_Line1_Text';
import SubSection_Line2_Text from '@/components/_Atoms/Text/SubSection/SubSection_Line2_Text';
import SubSection_Title_Text from '@/components/_Atoms/Text/SubSection/SubSection_Title_Text';
import { MerchantSearch_MockUp_Image } from '@/components/_Atoms/Image/MockUp/MerchantSearch_MockUp_Image';
import MerchantSearch_SubMockUp_Container from '@/components/_Molecules/Container/MockUp_Container/MerchantSearch_SubMockUp_Container';

const MerchantSearch_Section = () => {
  return (
    <section className={s.container}>
      <div>
        <SubSection_Title_Text imgSrc={MerchantSearch_Title_Image} text='가맹점 조회' alignItems='center' />
        <SubSection_Line1_Text text={['내 주변 간편결제 가맹점을', <br key='br' />, '한눈에 확인하세요']} />
        <SubSection_Line2_Text
          text={['이제 간편결제 안될까봐 걱정하지 마세요.', <br key='br' />, '결제 가능여부를 미리 알려드릴게요.']}
        />
      </div>
      <MerchantSearch_MockUp_Image />
      <MerchantSearch_SubMockUp_Container />
    </section>
  );
};

export default MerchantSearch_Section;

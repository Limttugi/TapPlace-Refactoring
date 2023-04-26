import SubSectionTitle from '@/components/_Atoms/Text/SubSection/SubSectionTitle';
import s from './MerchantSearch.module.scss';

import MerchantSearch_Title_Image from '@/img/MockUp/MerchantSearch_Title_Image.webp';
import SubSectionFirstLineText from '@/components/_Atoms/Text/SubSection/SubSectionFirstLine';
import SubSectionSecondLineText from '@/components/_Atoms/Text/SubSection/SubSectionSecondLine';
import MerchantSearchSubMockUpContainer from '@/components/_Molecules/Container/MockUp/MerchantSearchSubMockUp';
import { MerchantSearchImage } from '@/components/_Atoms/Image/MockUp/MerchantSearch/MerchantSearch';

const MerchantSearchSection = () => {
  return (
    <section className={s.container}>
      <div>
        <SubSectionTitle imgSrc={MerchantSearch_Title_Image} text='가맹점 조회' alignItems='center' />
        <SubSectionFirstLineText text={['내 주변 간편결제 가맹점을', <br key='br' />, '한눈에 확인하세요']} />
        <SubSectionSecondLineText
          text={['이제 간편결제 안될까봐 걱정하지 마세요.', <br key='br' />, '결제 가능여부를 미리 알려드릴게요.']}
        />
      </div>
      <MerchantSearchImage />
      <MerchantSearchSubMockUpContainer />
    </section>
  );
};

export default MerchantSearchSection;

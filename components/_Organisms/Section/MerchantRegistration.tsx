import SubSectionTitle from '@/components/_Atoms/Text/SubSection/SubSectionTitle';
import s from './MerchantRegistration.module.scss';

import MerchantRegistration_Title_Image from '@/img/MockUp/MerchantRegistration_Title_Image.webp';
import SubSectionFirstLineText from '@/components/_Atoms/Text/SubSection/SubSectionFirstLine';
import SubSectionSecondLineText from '@/components/_Atoms/Text/SubSection/SubSectionSecondLine';
import MerchantRegisteringOrderContainer from '@/components/_Molecules/Container/MerchantRegisteringOrder/MerchantRegisteringOrder';
import MerchantRegistrationImage from '@/components/_Atoms/Image/MockUp/MerchantRegistration/MerchantRegistration';

const MerchantRegistrationSection = () => {
  return (
    <section className={s.container}>
      <div>
        <SubSectionTitle imgSrc={MerchantRegistration_Title_Image} text='가맹점 등록' alignItems='baseLine' />
        <SubSectionFirstLineText>
          새로운 가맹점을 발견하면
          <br />
          검색하여 등록해보세요.
        </SubSectionFirstLineText>
        <SubSectionSecondLineText>
          언제 어디서든, 새로운 가맹점을 발견하면
          <br />
          검색 한번으로 간편하게 등록할 수 있어요.
        </SubSectionSecondLineText>
      </div>
      <MerchantRegisteringOrderContainer />
      <MerchantRegistrationImage />
    </section>
  );
};

export default MerchantRegistrationSection;

import s from './IntroService_Section.module.scss';

import IntroService_Main_Text from '@/components/_Atoms/Text/MainSection/IntroService_Main_Text';
import IntroService_Sub_Text from '@/components/_Atoms/Text/MainSection/IntroService_Sub_Text';
import AppStoreButton_Container from '@/components/_Molecules/Container/AppStoreButton_Container/AppStoreButton_Container';
import IntroService_MockUp_Image from '@/components/_Atoms/Image/MockUp/IntroService_MockUp_Image';

const IntroService_Section = () => {
  return (
    <section className={s.container}>
      <div className={s.subContainer}>
        <IntroService_Main_Text />
        <IntroService_Sub_Text />
        <AppStoreButton_Container />
      </div>

      <IntroService_MockUp_Image />
    </section>
  );
};

export default IntroService_Section;

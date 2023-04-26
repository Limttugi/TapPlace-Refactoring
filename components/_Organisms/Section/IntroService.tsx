import s from './IntroService.module.scss';

import IntroServiceMainText from '@/components/_Atoms/Text/IntroService/IntroServiceMain';
import IntroServiceSubText from '@/components/_Atoms/Text/IntroService/IntroServiceSub';
import AppStoreButtonContainer from '@/components/_Molecules/Container/AppStoreButton/AppStoreButton';
import IntroServiceImage from '@/components/_Atoms/Image/MockUp/IntroService/IntroService';

const IntroServiceSection = () => {
  return (
    <section className={s.container}>
      <div className={s.subContainer}>
        <IntroServiceMainText />
        <IntroServiceSubText />
        <AppStoreButtonContainer />
      </div>

      <IntroServiceImage />
    </section>
  );
};

export default IntroServiceSection;

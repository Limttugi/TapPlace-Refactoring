import MainSection_Text_Line_1 from '@/components/_Atoms/Text/MainSection_Text_Line_1';

import s from './MainSection_1.module.scss';

import MainSection_Terxt_Line_2 from '@/components/_Atoms/Text/MainSection_Terxt_Line_2';
import AppStoreButton_Container from '@/components/_Molecules/Container/AppStoreButton_Container/AppStoreButton_Container';
import MockUp1_Image from '@/components/_Atoms/Image/MockUp1_Image';

const MainSection_1 = () => {
  return (
    <section className={s.container}>
      <div className={s.subContainer}>
        <MainSection_Text_Line_1 />
        <MainSection_Terxt_Line_2 />
        <AppStoreButton_Container />
      </div>

      <MockUp1_Image />
    </section>
  );
};

export default MainSection_1;

import Image from 'next/image';

import s from './IntroService_MockUp_Image.module.scss';

import { useAppSelector } from '@/redux/hooks';
import mockup_image_1_desktop from '@/img/MockUp/mock_1_desktop.webp';
import mockup_image_1_mobile from '@/img/MockUp/mock_1_mobile.webp';

const IntroService_MockUp_Image = () => {
  const viewType = useAppSelector(state => state.viewType.viewType);

  return (
    <>
      {viewType === 'MOBILE' ? (
        <Image src={mockup_image_1_mobile} alt='mockup_image_1' className={s.img} priority />
      ) : (
        <Image src={mockup_image_1_desktop} alt='mockup_image_1' className={s.img} priority />
      )}
    </>
  );
};

export default IntroService_MockUp_Image;

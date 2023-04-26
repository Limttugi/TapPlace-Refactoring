import Image from 'next/image';

import s from './IntroService.module.scss';

import { useAppSelector } from '@/redux/hooks';
import IntroService_MockUp_Desktop_Image from '@/img/MockUp/IntroService_MockUp_Desktop_Image.webp';
import IntroService_MockUp_Mobile_Image from '@/img/MockUp/IntroService_MockUp_Mobile_Image.webp';

const IntroServiceImage = () => {
  const viewType = useAppSelector(state => state.viewType.viewType);

  return (
    <>
      {viewType === 'MOBILE' ? (
        <Image src={IntroService_MockUp_Mobile_Image} alt='mockup_image_1' className={s.img} priority />
      ) : (
        <Image src={IntroService_MockUp_Desktop_Image} alt='mockup_image_1' className={s.img} priority />
      )}
    </>
  );
};

export default IntroServiceImage;

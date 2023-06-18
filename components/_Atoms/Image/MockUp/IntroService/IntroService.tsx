import { useRecoilValue } from 'recoil';
import Image from 'next/image';

import s from './IntroService.module.scss';

import IntroService_MockUp_Desktop_Image from '@/img/MockUp/IntroService_MockUp_Desktop_Image.webp';
import IntroService_MockUp_Mobile_Image from '@/img/MockUp/IntroService_MockUp_Mobile_Image.webp';
import { breakpointState } from '@/recoil/atoms/breakpoint';

const IntroServiceImage = () => {
  const BREAKPOINT = useRecoilValue(breakpointState);

  return (
    <>
      {BREAKPOINT === 'MOBILE' ? (
        <Image src={IntroService_MockUp_Mobile_Image} alt='mockup_image_1' className={s.img} priority />
      ) : (
        <Image src={IntroService_MockUp_Desktop_Image} alt='mockup_image_1' className={s.img} priority />
      )}
    </>
  );
};

export default IntroServiceImage;

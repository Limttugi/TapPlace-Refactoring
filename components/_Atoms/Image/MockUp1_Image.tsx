import Image from 'next/image';

import s from './MockUp1_Image.module.scss';

import { useAppSelector } from '@/redux/hooks';
import mockup_image_1_desktop from '@/img/MockUp/mock_1_desktop.webp';
import mockup_image_1_mobile from '@/img/MockUp/mock_1_mobile.webp';

const MockUp1_Image = () => {
  const viewType = useAppSelector(state => state.viewType.viewType);

  return (
    <>
      {viewType === 'MOBILE' ? (
        <Image src={mockup_image_1_mobile} alt='mockup_image_1' className={s.img} />
      ) : (
        <Image src={mockup_image_1_desktop} alt='mockup_image_1' className={s.img} />
      )}
    </>
  );
};

export default MockUp1_Image;

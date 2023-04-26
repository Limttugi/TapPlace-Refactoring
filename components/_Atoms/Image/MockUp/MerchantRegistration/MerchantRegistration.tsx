import Image from 'next/image';

import s from './MerchantRegistration.module.scss';

import MerchantRegistrationImageSrc from '@/img/MockUp/MerchantRegistration_MockUp_Image.webp';

const MerchantRegistrationImage = () => {
  return (
    <div className={s.wrapper}>
      <Image src={MerchantRegistrationImageSrc} alt='MerchantRegistrationhMockUpImage' />
    </div>
  );
};

export default MerchantRegistrationImage;

import Image, { StaticImageData } from 'next/image';

import s from './OpenMobileAppStore.module.scss';

interface OpenMobileAppStoreButton_I {
  text: string;
  src: StaticImageData;
}

const OpenMobileAppStoreButton = ({ text, src }: OpenMobileAppStoreButton_I) => {
  return (
    <button className={s.storeButton} type='button' aria-label={text + ' ShortCut'}>
      <Image src={src} alt={text + ' Image'} />
      {text}
    </button>
  );
};

export default OpenMobileAppStoreButton;

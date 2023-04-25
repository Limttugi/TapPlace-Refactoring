import Image, { StaticImageData } from 'next/image';

import s from './OpenMobileAppStore_Button.module.scss';

interface OpenMobileAppStore_Button_I {
  text: string;
  src: StaticImageData;
}

const OpenMobileAppStore_Button = ({ text, src }: OpenMobileAppStore_Button_I) => {
  return (
    <button className={s.storeButton} type='button' aria-label={text + ' ShortCut'}>
      <Image src={src} alt={text + ' Image'} />
      {text}
    </button>
  );
};

export default OpenMobileAppStore_Button;

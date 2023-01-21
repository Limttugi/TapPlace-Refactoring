import s from './SnsContainer.module.scss';

import Image from 'next/image';
import sns from '@/img/Logo/SNS/sns.png';
import mail from '@/img/Logo/SNS/mail.webp';
import instargram from '@/img/Logo/SNS/instargram.webp';
import facebook from '@/img/Logo/SNS/facebook.webp';
import twitter from '@/img/Logo/SNS/twitter.webp';

const SnsContainer = () => {
  return (
    <ul className={s.container}>
      <Image className={s.snsImage} src={sns} alt='sns' />
      <Image className={s.snsImage} src={mail} alt='mail' />
      <Image className={s.snsImage} src={instargram} alt='instargram' />
      <Image className={s.snsImage} src={facebook} alt='facebook' />
      <Image className={s.snsImage} src={twitter} alt='twitter' />
    </ul>
  );
};

export default SnsContainer;

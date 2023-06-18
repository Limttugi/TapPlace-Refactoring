import Image from 'next/image';

import s from './Payment.module.scss';

import { PAYMENT_SRC } from '@/constants/IMAGE_SOURCE';

interface PaymentImage_I {
  payment: string;
}

const PaymentImage = ({ payment }: PaymentImage_I) => {
  return <Image className={s.paymentImage} src={PAYMENT_SRC[payment]} alt='paymentImage' />;
};

export default PaymentImage;

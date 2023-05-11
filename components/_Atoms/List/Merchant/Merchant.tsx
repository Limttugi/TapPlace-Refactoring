import s from './Merchant.module.scss';

import PaymentImage from '../../Image/Payment/Payment';

const MerchantList = () => {
  return (
    <li className={s.container}>
      <div className={s.merchantInfoWrapper}>
        <h3 className={s.merchantName}>가게 이름</h3>
        <h4 className={s.merchantType}>가게 종류</h4>
      </div>
      <div className={s.merchantInfoWrapper}>
        <p className={s.merchantDistance}>50m ·&nbsp;</p>
        <p className={s.merchantAddress}>가게 주소</p>
      </div>
      <ul className={s.paymentImageListContainer}>
        <PaymentImage payment='kakao' />
        <PaymentImage payment='naver' />
        <PaymentImage payment='google' />
        <PaymentImage payment='apple' />
        <PaymentImage payment='zero' />
      </ul>
    </li>
  );
};

export default MerchantList;

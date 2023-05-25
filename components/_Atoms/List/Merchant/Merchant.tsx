import s from './Merchant.module.scss';

import PaymentImage from '../../Image/Payment/Payment';
import { merchantInfo_I } from '@/types/merchant';

const MerchantList = (info: merchantInfo_I) => {
  const { num, place_name, road_address_name, address_name, category_group_name, distance, pays } = info;

  return (
    <li className={s.container}>
      <div className={s.merchantInfoWrapper}>
        <h3 className={s.merchantName}>{place_name}</h3>
        <h4 className={s.merchantCategory}>{category_group_name}</h4>
      </div>
      <div className={s.merchantInfoWrapper}>
        <p className={s.merchantDistance}>{distance * 1000}m ·&nbsp;</p>
        <p className={s.merchantAddress}>{road_address_name ? road_address_name : address_name}</p>
      </div>
      <ul className={s.paymentImageListContainer}>
        {info.pays?.map(pay => {
          return <PaymentImage key={pay + num} payment={pay} />;
        })}
      </ul>
    </li>
  );
};

export default MerchantList;

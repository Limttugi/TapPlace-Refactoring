import s from './StoreList.module.scss';

import kakaopay from '@/img/Logo/Payment/Rectangle/kakao.webp';
import naverpay from '@/img/Logo/Payment/Rectangle/naver.webp';
import payco from '@/img/Logo/Payment/Rectangle/payco.webp';
import zeropay from '@/img/Logo/Payment/Rectangle/zero.webp';
import applepay from '@/img/Logo/Payment/Rectangle/apple.webp';
import conless from '@/img/Logo/Payment/Rectangle/contactless.webp';
import googlepay from '@/img/Logo/Payment/Rectangle/google.webp';
import { storeI } from '@/hooks/useMap';
import Image from 'next/image';

const StoreList = ({ store }: storeI | any) => {
  return (
    <li className={s.list}>
      <div className={s.nameContainer}>
        <h4 className={s.placeName}>{store.place_name}</h4>
        <p className={s.categoryName}>{store.category_group_name}</p>
      </div>
      <div className={s.locationContainer}>
        <p className={s.distance}>{store.distance * 1000}m&nbsp;・&nbsp;</p>
        <p className={s.addressName}>{store.road_address_name ? store.road_address_name : store.address_name}</p>
      </div>
      <div className={s.logoContainer}>
        {store.pays.map((pay: string, index: number) => {
          if (pay === 'kakaopay') {
            return <Image className={s.payRectangleLogo} key={pay} src={kakaopay} alt="kakao" />;
          } else if (pay === 'naverpay') {
            return <Image className={s.payRectangleLogo} key={pay} src={naverpay} alt="naver" />;
          } else if (pay === 'payco') {
            return <Image className={s.payRectangleLogo} key={pay} src={payco} alt="payco" />;
          } else if (pay === 'zeropay') {
            return <Image className={s.payRectangleLogo} key={pay} src={zeropay} alt="zero" />;
          } else if (pay === ('apple_visa' || 'apple_master' || 'apple_jcb')) {
            return <Image className={s.payRectangleLogo} key={pay} src={applepay} alt="apple" />;
          } else if (pay === ('conless_visa' || 'conless_master' || 'conless_jcb')) {
            return <Image className={s.payRectangleLogo} key={pay} src={conless} alt="conless" />;
          } else if (pay === ('google_visa' || 'google_master' || 'google_jcb')) {
            return <Image className={s.payRectangleLogo} key={pay} src={googlepay} alt="google" />;
          }
        })}
      </div>
    </li>
  );
};

export default StoreList;

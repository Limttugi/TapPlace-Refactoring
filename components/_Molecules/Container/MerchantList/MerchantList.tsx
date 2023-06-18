import { useRecoilValue } from 'recoil';

import s from './MerchantList.module.scss';

import MerchantList from '@/components/_Atoms/List/Merchant/Merchant';
import getUniquePayments from '@/utils/getUniquePayment';
import { MerchantInfo_I } from '@/types/merchant';
import { merchantListSelector } from '@/recoil/selector/merchant';

const MerchantListContainer = () => {
  const merchantList = useRecoilValue(merchantListSelector);

  return (
    <ul className={s.container}>
      <h2 className='a11y-hidden'>가맹점 리스트</h2>
      {merchantList?.map((merchantInfo: MerchantInfo_I) => {
        const payments = getUniquePayments(merchantInfo.pays);
        const info = { ...merchantInfo, pays: payments };

        return <MerchantList key={merchantInfo.num} {...info} />;
      })}
    </ul>
  );
};

export default MerchantListContainer;

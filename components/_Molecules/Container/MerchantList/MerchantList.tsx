import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import s from './MerchantList.module.scss';

import MerchantList from '@/components/_Atoms/List/Merchant/Merchant';
import getUniquePayments from '@/utils/getUniquePayment';
import { getMerchantList } from '@/api/merchant';
import { merchantListAtom } from '@/recoil/atoms/merchant';
import { searchLocationAtom } from '@/recoil/atoms/location';
import { MerchantInfo_I } from '@/types/merchant';

const MerchantListContainer = () => {
  const searchLocation = useRecoilValue(searchLocationAtom);
  const [merchantList, setMerchantList] = useRecoilState(merchantListAtom);

  useEffect(() => {
    const handleGetMerchantList = async () => {
      const stores = await getMerchantList(searchLocation);
      setMerchantList(stores);
    };

    handleGetMerchantList();
  }, [searchLocation, setMerchantList]);

  return (
    <ul className={s.container}>
      <h2 className='a11y-hidden'>가맹점 리스트</h2>
      {merchantList.map((merchantInfo: MerchantInfo_I) => {
        const payments = getUniquePayments(merchantInfo.pays);
        const info = { ...merchantInfo, pays: payments };

        return <MerchantList key={merchantInfo.num} {...info} />;
      })}
    </ul>
  );
};

export default MerchantListContainer;

import { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import s from './MerchantList.module.scss';

import MerchantList from '@/components/_Atoms/List/Merchant/Merchant';
import getUniquePayments from '@/utils/getUniquePayment';
import { getMerchantList } from '@/api/merchant';
import { merchantListAtom } from '@/recoil/atoms/merchant';
import { searchLocationAtom } from '@/recoil/atoms/location';
import { merchantInfo_I } from '@/types/merchant';

const MerchantListContainer = () => {
  const searchLocation = useRecoilValue(searchLocationAtom);
  const [merchantList, setMerchantList] = useRecoilState(merchantListAtom);

  const handleGetMerchantList = useCallback(async () => {
    try {
      const res = await getMerchantList(searchLocation);
      setMerchantList(res.data.stores);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }, [searchLocation, setMerchantList]);

  useEffect(() => {
    handleGetMerchantList();
  }, [handleGetMerchantList]);

  return (
    <ul className={s.container}>
      {merchantList.map((merchantInfo: merchantInfo_I) => {
        const payments = getUniquePayments(merchantInfo.pays);
        const info = { ...merchantInfo, pays: payments };

        return <MerchantList key={merchantInfo.num} {...info} />;
      })}
    </ul>
  );
};

export default MerchantListContainer;

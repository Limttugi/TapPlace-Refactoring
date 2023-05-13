import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import s from './MerchantList.module.scss';

import MerchantList from '@/components/_Atoms/List/Merchant/Merchant';
import { currentLocationState } from '@/recoil/atoms/location';
import { merchantListState } from '@/recoil/atoms/merchant';
import { merchantInfo_I } from '@/types/merchant';
import { getMerchantList } from '@/api/merchant';
import useMerchant from '@/hooks/useMerchant';

const MerchantListContainer = () => {
  const currentLocation = useRecoilValue(currentLocationState);
  const [merchantList, setMerchantList] = useRecoilState(merchantListState);
  const getUniquePayment = useMerchant().getUniquePayment;

  useEffect(() => {
    const handleGetMerchantList = async () => {
      const stores = await getMerchantList(currentLocation);
      setMerchantList(stores);
    };

    handleGetMerchantList();
  }, [currentLocation, setMerchantList]);

  return (
    <ul className={s.container}>
      {merchantList?.map((merchantInfo: merchantInfo_I) => {
        const payments = getUniquePayment(merchantInfo.pays);
        const info = { ...merchantInfo, pays: payments };

        return <MerchantList key={merchantInfo.num} {...info} />;
      })}
    </ul>
  );
};

export default MerchantListContainer;

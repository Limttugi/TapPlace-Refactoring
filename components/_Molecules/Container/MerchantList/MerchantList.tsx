import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import s from './MerchantList.module.scss';

import MerchantList from '@/components/_Atoms/List/Merchant/Merchant';
import { getMerchantList } from '@/api/merchant';
import { merchantInfo_I } from '@/types/merchant';
import { currentLocationState } from '@/recoil/atoms/location';

const MerchantListContainer = () => {
  const currentLocation = useRecoilValue(currentLocationState);
  const [merchantList, setMerchantList] = useState([]);

  useEffect(() => {
    const handleGetMerchantList = async () => {
      const stores = await getMerchantList(currentLocation);
      setMerchantList(stores);
    };

    handleGetMerchantList();
  }, [currentLocation]);

  return (
    <ul className={s.container}>
      {merchantList.map((merchantInfo: merchantInfo_I) => {
        return <MerchantList key={merchantInfo.num} {...merchantInfo} />;
      })}
    </ul>
  );
};

export default MerchantListContainer;

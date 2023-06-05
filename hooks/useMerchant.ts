import { getMerchantList } from '@/api/merchant';
import { searchLocationAtom } from '@/recoil/atoms/location';
import { merchantListAtom } from '@/recoil/atoms/merchant';
import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const useMerchant = () => {
  const searchLocation = useRecoilValue(searchLocationAtom);
  const setMerchantList = useSetRecoilState(merchantListAtom);

  const handleGetMerchantList = useCallback(async () => {
    const stores = await getMerchantList(searchLocation);
    setMerchantList(stores);
  }, [searchLocation, setMerchantList]);

  return { handleGetMerchantList };
};

export default useMerchant;

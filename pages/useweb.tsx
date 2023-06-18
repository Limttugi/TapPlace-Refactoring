import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Head from 'next/head';

import LoadingSpinner from '@/components/_Atoms/LoadingSpinner/LoadingSpinner';
import UseWebTemplate from '@/components/_Templates/UseWeb/UseWeb';
import { bringMyLocationAtom } from '@/recoil/atoms/location';
import useResize from '@/hooks/useResize';
import useLocation from '@/hooks/useLocation';
import useMerchant from '@/hooks/useMerchant';
import UseWebMain from '@/components/_Organisms/Main/UseWebMain/UseWebMain';

const UseWeb = () => {
  useResize();
  const handleSetCurrentLocation = useLocation().handleSetCurrentLocation;
  const handleGetMerchantList = useMerchant().handleGetMerchantList;
  const isBringMyLocation = useRecoilValue(bringMyLocationAtom).isBringMyLocation;

  // 현재 위치 가져오기
  useEffect(() => {
    handleSetCurrentLocation();
  }, [handleSetCurrentLocation]);

  // 가맹점 리스트 가져오기
  useEffect(() => {
    isBringMyLocation && handleGetMerchantList();
  }, [isBringMyLocation, handleGetMerchantList]);

  return (
    <>
      <Head>
        <title>탭플레이스 - 서비스 이용하기</title>
      </Head>

      <UseWebTemplate>{!isBringMyLocation ? <LoadingSpinner type='location' /> : <UseWebMain />}</UseWebTemplate>
    </>
  );
};

export default UseWeb;

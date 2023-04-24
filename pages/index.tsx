import AppStoreButton_Container from '@/components/_Molecules/Container/AppStoreButton_Container/AppStoreButton_Container';
import MainSection_1 from '@/components/_Organisms/Section/MainSection_1';
import MainTemplates from '@/components/_Templates/Main-Templates/MainTemplates';
import CheckAfterDownlaod from '@/components/MainPage/Section/CheckAfterDownload/CheckAfterDownload';
import DisplayPayment from '@/components/MainPage/Section/DisplayPayment/DisplayPayment';
import MainDescription from '@/components/MainPage/Section/MainDescription/MainDescription';
import MemberIntroduction from '@/components/MainPage/Section/MemberIntroduction/MemberIntroduction';
import PaymentFeedback from '@/components/MainPage/Section/PaymentFeedback/PaymentFeedback';
import StoreInquiry from '@/components/MainPage/Section/StoreInquiry/StoreInquiry';
import StoreRegistering from '@/components/MainPage/Section/StoreRegistering/StoreRegistering';
import { useAppDispatch } from '@/redux/hooks';
import { SET_VIEW_TYPE } from '@/redux/slices/viewType';
import { useEffect } from 'react';

const Index = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const width = window.innerWidth;
    dispatch(SET_VIEW_TYPE(width));

    const resizeWindow = () => {
      const width = window.innerWidth;
      dispatch(SET_VIEW_TYPE(width));
    };

    window.addEventListener('resize', resizeWindow);

    return () => window.removeEventListener('resize', resizeWindow);
  }, [dispatch]);

  return (
    <MainTemplates>
      <MainSection_1 />
      {/* <MainDescription />
      <DisplayPayment />
      <StoreInquiry />
      <PaymentFeedback />
      <StoreRegistering />
      <MemberIntroduction />
      <CheckAfterDownlaod /> */}
    </MainTemplates>
  );
};

export default Index;

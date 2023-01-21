import CheckAfterDownlaod from '@/components/MainPage/Section/CheckAfterDownload/CheckAfterDownload';
import DisplayPayment from '@/components/MainPage/Section/DisplayPayment/DisplayPayment';
import MainDescription from '@/components/MainPage/Section/MainDescription/MainDescription';
import MemberIntroduction from '@/components/MainPage/Section/MemberIntroduction/MemberIntroduction';
import PaymentFeedback from '@/components/MainPage/Section/PaymentFeedback/PaymentFeedback';
import StoreInquiry from '@/components/MainPage/Section/StoreInquiry/StoreInquiry';
import StoreRegistering from '@/components/MainPage/Section/StoreRegistering/StoreRegistering';

const Index = () => {
  return (
    <>
      <MainDescription />
      <DisplayPayment />
      <StoreInquiry />
      <PaymentFeedback />
      <StoreRegistering />
      <MemberIntroduction />
      <CheckAfterDownlaod />
    </>
  );
};

export default Index;

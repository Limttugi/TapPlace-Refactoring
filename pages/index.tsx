import CheckAfterDownlaod from '@/components/Section/CheckAfterDownload/CheckAfterDownload';
import DisplayPayment from '@/components/Section/DisplayPayment/DisplayPayment';
import MainDescription from '@/components/Section/MainDescription/MainDescription';
import MemberIntroduction from '@/components/Section/MemberIntroduction/MemberIntroduction';
import PaymentFeedback from '@/components/Section/PaymentFeedback/PaymentFeedback';
import StoreInquiry from '@/components/Section/StoreInquiry/StoreInquiry';
import StoreRegistering from '@/components/Section/StoreRegistering/StoreRegistering';

const Index = () => {
  return (
    <main>
      <MainDescription />
      <DisplayPayment />
      <StoreInquiry />
      <PaymentFeedback />
      <StoreRegistering />
      <MemberIntroduction />
      <CheckAfterDownlaod />
    </main>
  );
};

export default Index;

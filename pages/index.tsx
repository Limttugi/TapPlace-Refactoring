import MemberIntroduction from '@/components/Section/MemberIntroduction';
import CheckAfterDownlaod from '@/components/Section/CheckAfterDownload';
import DisplayPayment from '@/components/Section/DisplayPayment';
import MainDescription from '@/components/Section/MainDescription';
import PaymentFeedback from '@/components/Section/PaymentFeedback';
import StoreInquiry from '@/components/Section/StoreInquiry';
import StoreRegistering from '@/components/Section/StoreRegistering';

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

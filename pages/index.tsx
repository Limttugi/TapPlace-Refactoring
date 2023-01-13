import DisplayPayment from '@/components/Section/DisplayPayment';
import MainDescription from '@/components/Section/MainDescription';
import PaymentFeedback from '@/components/Section/PaymentFeedback';
import StoreInquiry from '@/components/Section/StoreInquiry';

const Index = () => {
  return (
    <main>
      <MainDescription />
      <DisplayPayment />
      <StoreInquiry />
      <PaymentFeedback />
    </main>
  );
};

export default Index;

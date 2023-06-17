import Head from 'next/head';

import ServiceIntroductionTemplate from '@/components/_Templates/ServiceIntroduction/ServiceIntroduction';
import IntroServiceSection from '@/components/_Organisms/Section/IntroService';
import PaymentSlider from '@/components/_Organisms/Slider/Payment/Payment';
import MerchantSearchSection from '@/components/_Organisms/Section/MerchantSearch';
import FeedbackPaymentSection from '@/components/_Organisms/Section/FeedbackPayment';
import MerchantRegistrationSection from '@/components/_Organisms/Section/MerchantRegistration';
import MemberSlider from '@/components/_Organisms/Slider/Member/Member';
import DownloadAndCheckMerchantSection from '@/components/_Organisms/Section/DownloadAndCheckMerchant';
import useResize from '@/hooks/useResize';

const Index = () => {
  useResize();

  return (
    <>
      <Head>
        <title>탭플레이스</title>
      </Head>

      <ServiceIntroductionTemplate>
        <IntroServiceSection />
        <PaymentSlider />
        <MerchantSearchSection />
        <FeedbackPaymentSection />
        <MerchantRegistrationSection />
        <MemberSlider />
        <DownloadAndCheckMerchantSection />
      </ServiceIntroductionTemplate>
    </>
  );
};

export default Index;

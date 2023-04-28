import { useEffect } from 'react';

import ServiceIntroductionTemplate from '@/components/_Templates/ServiceIntroduction/ServiceIntroduction';
import IntroServiceSection from '@/components/_Organisms/Section/IntroService';
import PaymentSlider from '@/components/_Organisms/Slider/Payment/Payment';
import MerchantSearchSection from '@/components/_Organisms/Section/MerchantSearch';
import FeedbackPaymentSection from '@/components/_Organisms/Section/FeedbackPayment';
import MerchantRegistrationSection from '@/components/_Organisms/Section/MerchantRegistration';
import MemberSlider from '@/components/_Organisms/Slider/Member/Member';
import DownloadAndCheckMerchantSection from '@/components/_Organisms/Section/DownloadAndCheckMerchant';
import { useAppDispatch } from '@/redux/hooks';
import { SET_VIEW_TYPE } from '@/redux/slices/viewType';

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
    <ServiceIntroductionTemplate>
      <IntroServiceSection />
      <PaymentSlider />
      <MerchantSearchSection />
      <FeedbackPaymentSection />
      <MerchantRegistrationSection />
      <MemberSlider />
      <DownloadAndCheckMerchantSection />
    </ServiceIntroductionTemplate>
  );
};

export default Index;

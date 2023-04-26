import { useEffect } from 'react';

import MainTemplates from '@/components/_Templates/Main-Templates/MainTemplates';
import IntroServiceSection from '@/components/_Organisms/Section/IntroService';
import PaymentSlider from '@/components/_Molecules/Slider/Payment/Payment';
import MerchantSearchSection from '@/components/_Organisms/Section/MerchantSearch';
import FeedbackPaymentSection from '@/components/_Organisms/Section/FeedbackPayment';
import MerchantRegistrationSection from '@/components/_Organisms/Section/MerchantRegistration';
import MemberIntroduction from '@/components/MainPage/Section/MemberIntroduction/MemberIntroduction';
import CheckAfterDownlaod from '@/components/MainPage/Section/CheckAfterDownload/CheckAfterDownload';
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
    <MainTemplates>
      <IntroServiceSection />
      <PaymentSlider />
      <MerchantSearchSection />
      <FeedbackPaymentSection />
      <MerchantRegistrationSection />
      <MemberIntroduction />
      {/* <CheckAfterDownlaod /> */}
    </MainTemplates>
  );
};

export default Index;

import { selector } from 'recoil';
import { markerStateAtom } from '../atoms/marker';
import { getMerchantFeedback, getMerchantInfo } from '@/api/merchant';
import { MerchantInfo_I } from '@/types/merchant';
import { PAYS } from '@/constants/PAYS';

export const clickedMerchantInfoSelector = selector({
  key: 'clickedMerchantInfoSelector',
  get: async ({ get }) => {
    const id = get(markerStateAtom).markerID;

    try {
      const info: MerchantInfo_I = await getMerchantInfo(id);
      return info;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
});

export const clickedMerchantFeedbackSelector = selector({
  key: 'clickedMerchantFeedbackSelector',
  get: async ({ get }) => {
    const id = get(markerStateAtom).markerID;

    try {
      const feedbacks = await getMerchantFeedback({ store_id: id, pays: PAYS });
      return feedbacks;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
});

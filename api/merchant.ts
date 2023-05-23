import { instance } from '.';
import { PAYS } from '@/constants/PAYS';
import { Location_I } from '@/types/location';

interface GetMerchantFeedback_I {
  store_id: string;
  pays: Array<string>;
}

export const getMerchantList = async ({ longitude, latitude }: Location_I) => {
  return await instance.post('/store/around', {
    x1: longitude.toString(),
    y1: latitude.toString(),
    distance: 1,
    pays: PAYS,
    user_id: '',
  });
};

export const getMerchantFeedback = async ({ store_id, pays }: GetMerchantFeedback_I) => {
  try {
    const res = await instance.post('/pay/list/more', {
      store_id,
      pays,
    });
    return res;
  } catch (err) {
    console.error(err);
  }
};

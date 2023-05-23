import { instance } from '.';
import { PAYS } from '@/constants/PAYS';
import { Location_I } from '@/types/location';

interface GetMerchantFeedback_I {
  store_id: string;
  pays: Array<string>;
}

export const getMerchantInfo = async (store_id: string) => {
  try {
    const res = await instance.post('/pay/list', {
      store_id,
      pays: PAYS,
      user_id: '',
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getMerchantList = async ({ longitude, latitude }: Location_I) => {
  try {
    const res = await instance.post('/store/around', {
      x1: longitude.toString(),
      y1: latitude.toString(),
      distance: 1,
      pays: PAYS,
      user_id: '',
    });
    return res.data.stores;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getMerchantFeedback = async ({ store_id, pays }: GetMerchantFeedback_I) => {
  try {
    const res = await instance.post('/pay/list/more', {
      store_id,
      pays,
    });
    return res.data.feedback;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

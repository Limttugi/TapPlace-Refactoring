import { PAYS } from '@/constants/PAYS';
import { instance } from '.';

interface locationI {
  longitude: number;
  latitude: number;
}

export const getStore = async ({ longitude, latitude }: locationI) => {
  return await instance.post('/store/around', {
    x1: String(longitude),
    y1: String(latitude),
    distance: 2,
    pays: PAYS,
    user_id: '',
  });
};

export const getStoreFeedback = async (storeId: string, pays: Array<string>) => {
  return await instance.post('/pay/list/more', {
    store_id: storeId,
    pays: pays,
  });
};

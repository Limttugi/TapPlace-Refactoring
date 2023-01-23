import { PAYS } from '@/constants/PAYS';
import { instance } from '.';

interface locationI {
  longitude: number;
  latitude: number;
}

export const getStore = ({ longitude, latitude }: locationI) => {
  instance
    .post('/store/around', {
      x1: longitude,
      y1: latitude,
      distance: 2,
      pays: PAYS,
      user_id: '',
    })
    .then(res => {
      return res.data;
    });
};

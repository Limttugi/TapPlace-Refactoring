import { selector, selectorFamily, waitForAll } from 'recoil';
import { markerStateAtom } from '../atoms/marker';
import { getMerchantFeedback, getMerchantInfo, getMerchantList } from '@/api/merchant';
import { MerchantInfo_I } from '@/types/merchant';
import { PAYS } from '@/constants/PAYS';
import { categoryFilterAtom, paymentFilterAtom } from '../atoms/filter';
import { merchantListAtom, merchantListAtom_T } from '../atoms/merchant';

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

export const merchantListSelector = selector({
  key: 'merchantListSelector',
  get: ({ get }) => {
    const merchantList = get(merchantListAtom);
    const { clickedCategoryFilter, categoryFilter } = get(categoryFilterAtom);
    const { clickedPaymentFilter, paymentFilter } = get(paymentFilterAtom);

    // 아무 필터도 선택 X
    if (!clickedCategoryFilter && !clickedPaymentFilter) return merchantList;

    const filteringCategory = () => {
      const _merchantList: merchantListAtom_T = [];
      merchantList.forEach(merchant => {
        categoryFilter.forEach(category => {
          if (category === merchant.category_group_name) _merchantList.push(merchant);
        });
      });
      return _merchantList;
    };

    const filteringPayment = (list: merchantListAtom_T) => {
      const _merchantList: merchantListAtom_T = [];
      list.forEach(merchant =>
        paymentFilter.forEach(payment => {
          if (merchant.pays.includes(payment)) _merchantList.push(merchant);
        }),
      );
      return _merchantList;
    };

    // 가맹점 카테고리, 결제수단 필터 선택
    if (clickedCategoryFilter && clickedPaymentFilter) {
      let filteredMerchants = filteringCategory();
      filteredMerchants = filteringPayment(filteredMerchants);
      return filteredMerchants;
    }
    // 카테고리 필터만 선택
    else if (clickedCategoryFilter) {
      const filteredMerchants = filteringCategory();
      return filteredMerchants;
    }
    // 결제수단 필터만 선택
    else if (clickedPaymentFilter) {
      const filteredMerchants = filteringPayment(merchantList);
      return filteredMerchants;
    }
  },
});

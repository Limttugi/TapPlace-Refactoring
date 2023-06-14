import { selector, selectorFamily, waitForAll } from 'recoil';
import { markerStateAtom } from '../atoms/marker';
import { getMerchantFeedback, getMerchantInfo, getMerchantList } from '@/api/merchant';
import { MerchantInfo_I } from '@/types/merchant';
import { PAYS } from '@/constants/PAYS';
import { categoryFilterAtom, paymentFilterAtom, searchFilterAtom } from '../atoms/filter';
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
    const { isMerchantSearch, searchWord } = get(searchFilterAtom);

    // 아무 필터도 선택 X
    if (!clickedCategoryFilter && !clickedPaymentFilter && !isMerchantSearch) return merchantList;

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

    const filteringSearch = (list: merchantListAtom_T) => {
      return list.filter(merchant => merchant.place_name.includes(searchWord));
    };

    // 가맹점 카테고리, 결제수단 필터 선택
    if (clickedCategoryFilter && clickedPaymentFilter) {
      let filteredMerchants = filteringCategory();
      filteredMerchants = filteringPayment(filteredMerchants);

      if (isMerchantSearch) filteredMerchants = filteringSearch(filteredMerchants);
      return filteredMerchants;
    } // 카테고리 필터만 선택
    else if (clickedCategoryFilter) {
      let filteredMerchants = filteringCategory();

      if (isMerchantSearch) return filteringSearch(filteredMerchants);
      return filteredMerchants;
    } // 결제수단 필터만 선택
    else if (clickedPaymentFilter) {
      let filteredMerchants = filteringPayment(merchantList);

      if (isMerchantSearch) return filteringSearch(filteredMerchants);
      return filteredMerchants;
    } // 검색만
    else if (isMerchantSearch) {
      const filteredMerchants = filteringSearch(merchantList);
      return filteredMerchants;
    }
  },
});

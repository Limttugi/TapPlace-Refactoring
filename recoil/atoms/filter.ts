import { atom } from 'recoil';

interface categoryFilterAtom_I {
  clickedCategoryFilter: boolean;
  categoryFilter: Array<string>;
}

interface paymentFilterAtom_I {
  clickedPaymentFilter: boolean;
  paymentFilter: Array<string>;
}

interface searchFilterAtom_I {
  isMerchantSearch: boolean;
  searchWord: string;
}

export const isShowFilteringMenuAtom = atom({
  key: 'isShowFilteringMenuAtom',
  default: false,
});

export const categoryFilterAtom = atom<categoryFilterAtom_I>({
  key: 'categoryFilterAtom',
  default: {
    clickedCategoryFilter: false,
    categoryFilter: [],
  },
});

export const paymentFilterAtom = atom<paymentFilterAtom_I>({
  key: 'paymentFilterAtom',
  default: {
    clickedPaymentFilter: false,
    paymentFilter: [],
  },
});

export const searchFilterAtom = atom<searchFilterAtom_I>({
  key: 'searchFilterAtom',
  default: {
    isMerchantSearch: false,
    searchWord: '',
  },
});

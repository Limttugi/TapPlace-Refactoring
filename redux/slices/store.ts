import { storeI } from '@/hooks/useMap';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* 
  stores : 내 주변 가맹점들
  storeDetailInfo : 클릭한 마커/가맹점의 상세정보
  storeFeedbackInfo : 클릭한 마커/가맹점의 피드백 정보
*/

export interface feedbackI {
  store_id: string;
  num: number;
  pay: string;
  exist: boolean;
  success: number;
  fail: number;
  last_state: string;
  last_time: string;
}

export interface storeSliceI {
  stores: Array<storeI>;
  storeDetailInfo: storeI | null;
  storeFeedbackInfo: Array<feedbackI>;
}

const initialState: storeSliceI = {
  stores: [],
  storeDetailInfo: null,
  storeFeedbackInfo: [],
};

export const store = createSlice({
  name: 'store',
  initialState,
  reducers: {
    SET_STORES(state, action: PayloadAction<Array<storeI>>) {
      state.stores = action.payload;
    },
    SET_STORE_DETAIL_INFO(state, action: PayloadAction<storeI | null>) {
      state.storeDetailInfo = action.payload;
    },
    SET_STORE_FEEDBACK_INFO(state, action: PayloadAction<Array<feedbackI>>) {
      state.storeFeedbackInfo = action.payload;
    },
  },
});

export const { SET_STORES, SET_STORE_DETAIL_INFO, SET_STORE_FEEDBACK_INFO } = store.actions;

export default store;

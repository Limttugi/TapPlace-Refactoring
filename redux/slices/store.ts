import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* 
  showListFlag : 데스크톱을 제외한 화면에서 가맹점 리스트들을 보여주는 여부를 관장하는 플래그
  showFilteringFlag : 필터 누르면 필터 창 보이게 하는 플래그
*/

export interface storeI {
  stores: Array<storeI>;
}

const initialState: storeI = {
  stores: [],
};

export const store = createSlice({
  name: 'store',
  initialState,
  reducers: {
    SET_STORES(state, action: PayloadAction<Array<storeI>>) {
      state.stores = action.payload;
    },
    // SET_SHOW_LIST_FLAG(state, action: PayloadAction<boolean>) {
    //   state.showListFlag = action.payload;
    // },
  },
});

export const { SET_STORES } = store.actions;

export default store;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* 
  showListFlag : 데스크톱을 제외한 화면에서 가맹점 리스트들을 보여주는 여부를 관장하는 플래그
  showFilteringFlag : 필터 누르면 필터 창 보이게 하는 플래그
*/

export interface showMenuSliceI {
  showListFlag: boolean;
  showFilteringFlag: boolean;
  showVisitModalFlag: boolean;
}

const initialState: showMenuSliceI = {
  showListFlag: false,
  showFilteringFlag: false,
  showVisitModalFlag: true,
};

export const showMenu = createSlice({
  name: 'showMenu',
  initialState,
  reducers: {
    SET_SHOW_LIST_FLAG(state, action: PayloadAction<boolean>) {
      state.showListFlag = action.payload;
    },
    SET_SHOW_FILTERING_FLAG(state, action: PayloadAction<boolean>) {
      state.showFilteringFlag = action.payload;
    },
    SET_SHOW_VISIT_MODAL_FLAG(state, action: PayloadAction<boolean>) {
      state.showVisitModalFlag = action.payload;
    },
  },
});

export const { SET_SHOW_LIST_FLAG, SET_SHOW_FILTERING_FLAG, SET_SHOW_VISIT_MODAL_FLAG } = showMenu.actions;

export default showMenu;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface sideMenuI {
  showListFlag: boolean;
  showFilteringFlag: boolean;
}

const initialState: sideMenuI = {
  showListFlag: false,
  showFilteringFlag: false,
};

export const sideMenu = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    SET_SHOW_LIST_FLAG(state, action: PayloadAction<boolean>) {
      state.showListFlag = action.payload;
    },
    SET_SHOW_FILTERING_FLAG(state, action: PayloadAction<boolean>) {
      state.showFilteringFlag = action.payload;
    },
  },
});

export const { SET_SHOW_LIST_FLAG, SET_SHOW_FILTERING_FLAG } = sideMenu.actions;

export default sideMenu;

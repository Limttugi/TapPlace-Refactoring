import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface sideMenuI {
  showListFlag: boolean;
}

const initialState: sideMenuI = {
  showListFlag: false,
};

export const sideMenu = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    SET_SHOW_LIST_FLAG(state, action: PayloadAction<boolean>) {
      state.showListFlag = action.payload;
    },
  },
});

export const { SET_SHOW_LIST_FLAG } = sideMenu.actions;

export default sideMenu;

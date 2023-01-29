import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/*
  viewType : innerWidth에 따라 MOBILE, TABLET, DESKTOP
*/

export interface commonStateI {
  viewType: string;
}

const initialState: commonStateI = {
  viewType: 'MOBILE',
};

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    SET_VIEW_TYPE(state, action: PayloadAction<string>) {
      state.viewType = action.payload;
    },
  },
});

export const { SET_VIEW_TYPE } = common.actions;

export default common;

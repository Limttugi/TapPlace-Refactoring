import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/*
  viewType : innerWidth에 따라 MOBILE, TABLET, DESKTOP
*/

export interface viewTypeStateSlice_I {
  viewType: 'MOBILE' | 'TABLET' | 'DESKTOP';
}

export const initialState: viewTypeStateSlice_I = {
  viewType: 'MOBILE',
};

export const viewType = createSlice({
  name: 'viewType',
  initialState,
  reducers: {
    SET_VIEW_TYPE(state, action: PayloadAction<number>) {
      const innerWidth = action.payload;

      if (innerWidth < 768) state.viewType = 'MOBILE';
      else if (innerWidth >= 768 && innerWidth < 1024) state.viewType = 'TABLET';
      else state.viewType = 'DESKTOP';
    },
  },
});

export const { SET_VIEW_TYPE } = viewType.actions;

export default viewType;

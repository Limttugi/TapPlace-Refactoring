import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface locationI {
  LOADING_MY_LOCATION: boolean;
  myLocation: {
    latitude: number;
    longitude: number;
  };
  currentAddress: string;
}

const initialState: locationI = {
  LOADING_MY_LOCATION: true,
  myLocation: {
    latitude: 37.3586704,
    longitude: 127.105499,
  },
  currentAddress: '',
};

export const location = createSlice({
  name: 'location',
  initialState,
  reducers: {
    LOADING_MY_LOCATION_SUCCESS(state) {
      state.LOADING_MY_LOCATION = false;
    },
    SET_MY_LOCATION(state, action: PayloadAction<{ latitude: number; longitude: number }>) {
      state.myLocation.latitude = action.payload.latitude;
      state.myLocation.longitude = action.payload.longitude;
    },
    SET_CURRENT_ADDRESS(state, action: PayloadAction<string>) {
      state.currentAddress = action.payload;
    },
  },
  // extraReducers: builder => {},
});

export const { LOADING_MY_LOCATION_SUCCESS, SET_MY_LOCATION, SET_CURRENT_ADDRESS } = location.actions;

export default location;

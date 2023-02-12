import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/*
  LOADING_MY_LOCATION : true - 가져오는 중 / false - 가져오기 끝
  currentLocation : 최근 위치 위경도
  currentAddress : 최근 위치 주소
  dragFlag : 지도 드래그 플래그
*/

export interface locationSliceI {
  LOADING_MY_LOCATION: boolean;
  currentLocation: {
    latitude: number;
    longitude: number;
  };
  currentAddress: string;
  dragFlag: boolean;
  dragCenter: {
    latitude: number;
    longitude: number;
  };
}

const initialState: locationSliceI = {
  LOADING_MY_LOCATION: true,
  currentLocation: {
    latitude: 37.3586704,
    longitude: 127.105499,
  },
  currentAddress: '',
  dragFlag: false,
  dragCenter: {
    latitude: 0,
    longitude: 0,
  },
};

export const location = createSlice({
  name: 'location',
  initialState,
  reducers: {
    LOADING_MY_LOCATION_SUCCESS(state) {
      state.LOADING_MY_LOCATION = false;
    },
    SET_CURRENT_LOCATION(state, action: PayloadAction<{ latitude: number; longitude: number }>) {
      state.currentLocation.latitude = action.payload.latitude;
      state.currentLocation.longitude = action.payload.longitude;
    },
    SET_CURRENT_ADDRESS(state, action: PayloadAction<string>) {
      state.currentAddress = action.payload;
    },
    SET_DRAGGING_FLAG(state, action) {
      state.dragFlag = action.payload;
    },
    SET_DRAG_CENTER(state, action: PayloadAction<{ latitude: number; longitude: number }>) {
      state.dragCenter.latitude = action.payload.latitude;
      state.dragCenter.longitude = action.payload.longitude;
    },
  },
  // extraReducers: builder => {},
});

export const {
  LOADING_MY_LOCATION_SUCCESS,
  SET_CURRENT_LOCATION,
  SET_CURRENT_ADDRESS,
  SET_DRAGGING_FLAG,
  SET_DRAG_CENTER,
} = location.actions;

export default location;

import { configureStore, combineReducers, Reducer, AnyAction, CombinedState } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import showMenu, { showMenuSliceI } from './slices/showMenu';
import location, { locationSliceI } from './slices/location';
import viewType, { viewTypeStateSlice_I } from './slices/viewType';
import storeSlice, { storeSliceI } from './slices/store';

// 리듀서 State 타입 정의
export interface ReducerStates {
  viewType: viewTypeStateSlice_I;
  location: locationSliceI;
  showMenu: showMenuSliceI;
  store: storeSliceI;
}

// 루트 리듀서 생성
const rootReducer = combineReducers({
  viewType: viewType.reducer,
  location: location.reducer,
  showMenu: showMenu.reducer,
  store: storeSlice.reducer,
});

// store 생성 함수
const makeStore = () => {
  // store 생성
  const store = configureStore({
    reducer: rootReducer as Reducer<ReducerStates, AnyAction>, // 리듀서
  });

  // store 반환
  return store;
};

// next-redux-wrapper의 wrapper 생성
const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export type AppStore = ReturnType<typeof makeStore>; // store 타입
export type RootState = ReturnType<typeof rootReducer>; // RootState 타입
export type AppDispatch = AppStore['dispatch']; // dispatch 타입

export default wrapper;
